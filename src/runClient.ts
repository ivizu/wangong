import { api, setToken } from "./api";
import env from "./env";
import { md5Hex } from "./utils/hashing";
import tron from "./tron";
import { WanGongModelBillExecuteAction, WanGongModelBillProcessStatus } from "./api/apiGen";

const login = async () => {
  const loginReq = await api.accountLoginjwt({
    Account: env.USERNAME!,
    Password: md5Hex(env.PASSWORD!),
  })

  if (loginReq.status !== 200) {
    console.error("登录失败:", (loginReq.error || loginReq.data));
    process.exit(1);
  }

  console.log("登录成功");
  setToken((loginReq.data as any).access_token)
}

const getRunTask = async () => {
  const req = await api.sysusdttransferrequestbillSearch({
    AccountAddress: tron.getAddress(),
    Limit: 1,
    ProcessStatus: WanGongModelBillProcessStatus.Value待处理
  });
  if (req.status !== 200) {
    console.error("获取任务失败:", (req.error || req.data));
    return;
  }
  const data: any[] = (req.data as any)?.Data || [];
  if (!data.length) {
    console.log("没有待处理的任务");
    return;
  }

  const task = data[0];
  console.log("获取到任务:", task);
  let energy_required: number;
  try {
    const dry = await tron.dryRunUsdt(task.TargetAddress, Number(task.Amount));
    if (!dry.result.result) {
      throw new Error("模拟交易失败");
    }
    energy_required = dry.energy_required || 64500;
  } catch (e: any) {
    console.error("模拟交易失败:", e);
    await api.sysusdttransferrequestbillExecute({
      BillId: task.ID,
      Action: WanGongModelBillExecuteAction.Value记录日志,
      Message: "模拟交易失败: " + e.message + "将稍后重试",
    })
    return;
  }
  const self = await tron.getSelf();
  const selfEnergy = self.EnergyLimit || 0;

  console.log("需要能量", energy_required, "剩余能量", selfEnergy);


  if (energy_required > selfEnergy) {
    console.error("能量不足，一分钟后重新检测");

    await api.sysusdttransferrequestbillExecute({
      BillId: task.ID,
      Action: WanGongModelBillExecuteAction.Value记录日志,
      Message: "需要能量 " + energy_required + " 剩余能量 " + self.EnergyLimit + " 能量不足，一分钟后再次检测",
    })

    return 1000 * 60;
  }

  const res = await api.sysusdttransferrequestbillExecute({
    BillId: task.ID,
    Action: WanGongModelBillExecuteAction.Value开始执行,
    Message: "需要能量 " + energy_required + " 剩余能量 " + self.EnergyLimit + " 能量足够，开始执行转账",
  })
  
  console.log("标记开始执行状态", res.status);

  if (res.status !== 200) {
    console.error("记录开始执行失败:", res.error || res.data, "已取消执行，稍后重试");
    return;
  }

  try {
    if (task.CurrencyType === 'USDT') {
      const transfer = await tron.transferUsdt(task.TargetAddress, Number(task.Amount));
      console.log("转账成功:", transfer);
      const res = await api.sysusdttransferrequestbillExecute({
        BillId: task.ID,
        Action: WanGongModelBillExecuteAction.Value执行成功,
        Message: "转账成功",
        TransactionHash: transfer,
      })
      console.log("返回信息", res.status);
    } else if (task.CurrencyType === 'TRX') {
      const transfer = await tron.transferTrx(task.TargetAddress, Number(task.Amount));
      if (transfer.code !== 0) {
        throw new Error(transfer.message);
      }
      console.log("转账成功:", transfer);
      const res = await api.sysusdttransferrequestbillExecute({
        BillId: task.ID,
        Action: WanGongModelBillExecuteAction.Value执行成功,
        Message: "转账成功",
        TransactionHash: transfer.transaction.txID,
      })
    }
  } catch (e: any) {
    console.error("转账异常:", e);
    const res = await api.sysusdttransferrequestbillExecute({
      BillId: task.ID,
      Action: WanGongModelBillExecuteAction.Value执行失败,
      Message: "转账异常: " + e.message,
    })
    console.log("返回信息", res.status);
  }
}

export default async () => {
  await login()
  setInterval(login, 1000 * 60 * 50); // 每小时重新登录一次

  console.log('钱包地址', tron.getAddress());
  while (true) {
    let waitTime = 0;
    try {
      waitTime = await getRunTask() || 1000 * 10;
    } catch (e) {
      console.error(e);
    }
    await new Promise(resolve => setTimeout(resolve, waitTime));
  }
}