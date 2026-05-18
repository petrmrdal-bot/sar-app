import { NextResponse } from 'next/server';
import { readFile, writeFile, access, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';

const DATA_FILE = join(process.cwd(), 'data', 'waitlist.json');

async function readWaitlist(): Promise<string[]> {
  try {
    await access(DATA_FILE);
    const raw = await readFile(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeWaitlist(emails: string[]) {
  await mkdir(dirname(DATA_FILE), { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(emails, null, 2), 'utf-8');
}

export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) as { email?: string };

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 },
      );
    }

    const normalized = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalized)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 },
      );
    }

    const emails = await readWaitlist();

    if (emails.includes(normalized)) {
      return NextResponse.json(
        { message: 'Already on the waitlist' },
        { status: 200 },
      );
    }

    emails.push(normalized);
    await writeWaitlist(emails);

    return NextResponse.json(
      { message: 'Signed up successfully' },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
