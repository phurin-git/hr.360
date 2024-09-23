import { type NextRequest, NextResponse } from 'next/server';
import argon2 from 'argon2';

export async function POST(req: NextRequest) {
    const { password } = await req.json();
    const hash = await argon2.hash(password);
  return NextResponse.json({hashedPassword: hash});
}