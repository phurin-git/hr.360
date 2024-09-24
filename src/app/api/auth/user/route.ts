import { type NextRequest, NextResponse } from 'next/server';
import argon2 from 'argon2';
import userDB from '@/app/data/userData';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Find user by email
  const user = userDB.find((u) => u.email === email);

  // If no user is found or password does not match, return empty object
  if (!user || !(await argon2.verify(user.password, password))) {
    return NextResponse.json(null);
  }

  // Return safe user data (excluding password)
  const { password: _, ...safeUserData } = user;
  return NextResponse.json(safeUserData);
};