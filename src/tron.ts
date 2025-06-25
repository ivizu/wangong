import { TronWeb } from "tronweb";
import env from "./env";
import { TransactionWrapper } from "tronweb/src/types/Transaction";

const USDT_ADDRESS = env.TEST_NET ? 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf' : 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
const API_URL = env.TEST_NET ? 'https://api.nileex.io' : 'https://api.trongrid.io'

const tronWeb = new TronWeb({
  fullHost: API_URL,
  headers: { 'TRON-PRO-API-KEY': env.TRONGRID_KEY },
  privateKey: env.PRIVATE_KEY,
});

export default {
  async transferTrx(to: string, amount: number) {
    return await tronWeb.trx.sendTransaction(to, amount * 1e6);
  },
  async transferUsdt(to: string, amount: number) {
    const spec = await tronWeb.trx.getContract(USDT_ADDRESS);
    const contract = tronWeb.contract(spec.abi.entrys, USDT_ADDRESS);
    return await contract.methods.transfer(to, tronWeb.toSun(amount)).send();
  },
  getAddress() {
    return tronWeb.defaultAddress.base58 as string;
  },
  async dryRunUsdt(to: string, amount_: number) {
    const amount = tronWeb.toSun(amount_); // 1 USDT 转成 6 位精度

    const parameter = [
      { type: 'address', value: to },
      { type: 'uint256', value: amount },
    ];

    const options = {
      feeLimit: 100_000_000, // 设置最高费用上限（100 TRX）
      callValue: 0,
      txLocal: false,
    };

    const args = tronWeb.transactionBuilder._getTriggerSmartContractArgs(
      USDT_ADDRESS,
      'transfer(address,uint256)',
      options,
      parameter,
      tronWeb.defaultAddress.base58 as string,
      undefined,
      undefined,
      0,
      100_000_000
    );

    const req = await fetch('https://api.trongrid.io/wallet/triggerconstantcontract', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
    })
    const tx = await req.json() as TransactionWrapper;
    return tx;
  },
  async getSelf() {
    return await tronWeb.trx.getAccountResources(tronWeb.defaultAddress.base58 as string)
  }
}