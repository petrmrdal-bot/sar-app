import { join } from 'node:path';

const DATA_DIR = process.env.VERCEL === '1'
  ? '/tmp/data'
  : join(process.cwd(), 'data');

export function getDataPath(filename: string): string {
  return join(DATA_DIR, filename);
}
