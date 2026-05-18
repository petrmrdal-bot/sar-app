import { NextResponse } from 'next/server';
import { readFile, writeFile, access, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';

const DATA_FILE = join(process.cwd(), 'data', 'events.jsonl');

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const line = JSON.stringify(payload) + '\n';

    try {
      await access(DATA_FILE);
    } catch {
      await mkdir(dirname(DATA_FILE), { recursive: true });
      await writeFile(DATA_FILE, '', 'utf-8');
    }

    const buf = await readFile(DATA_FILE, 'utf-8');
    await writeFile(DATA_FILE, buf + line, 'utf-8');

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
