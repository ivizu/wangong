import z from 'zod';
import path from 'path';

const configParsed = z.object({
  TEST_NET: z.string().transform((v) => ['true', '1', 'yes'].includes(v.toLowerCase())).default('false'),
  PRIVATE_KEY: z.string().nonempty(),
  TRONGRID_KEY: z.string(),

  // env for CLIENT
  USERNAME: z.string().nonempty(),
  PASSWORD: z.string().nonempty(),
  API_BASE: z.string().url().default('https://wangong.org'),
}).safeParse(process.env);

if (!configParsed.success) {
  console.error('配置错误');
  process.exit(1);
}

export default configParsed.data;
