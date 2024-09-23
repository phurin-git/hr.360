import { type NextRequest, NextResponse } from 'next/server';
import argon2 from 'argon2';
import userDB from '@/app/data/userData';

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();
    const user = userDB.find(async (user) => user.email === email && await argon2.verify(user.password, password));
  return NextResponse.json(user ? user : {});
}