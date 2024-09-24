import { type NextRequest, NextResponse } from 'next/server';
import argon2 from 'argon2';
import userDB from '@/app/data/userData';

export async function POST(req: NextRequest) {
  console.log('POST /api/auth/user');
    const { email, password } = await req.json();
    console.log(email, password);
    const user = userDB.find(async (user) => user.email === email && await argon2.verify(user.password, password));
    console.log(user);
  return NextResponse.json(user ? user : {});
}