import { NextResponse } from 'next/server';
import attendanceDB from '@/app/data/attendanceData';

export async function GET() {
  return NextResponse.json(attendanceDB);
};