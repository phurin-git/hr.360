import { type NextRequest, NextResponse } from 'next/server';
import attendanceDB from '@/app/data/attendanceData';

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const page = parseInt(params.get('page') || '1');
  const perPage = parseInt(params.get('per_page') || '5');
  const search = params.get('search');
  const searchResult = attendanceDB.filter((data) => {
    return Object.values(data).join(' ').toLowerCase().includes(search ? search.toLowerCase() : '');
  })
  return NextResponse.json(
    {
      total: searchResult.length,
      present: searchResult.filter((data) => data.status.toLowerCase() === 'present').length,
      absent: searchResult.filter((data) => data.status.toLowerCase() === 'absent').length,
      late: searchResult.filter((data) => data.status.toLowerCase() === 'late').length,
      leave: searchResult.filter((data) => data.status.toLowerCase() === 'leave').length,
      page: page,
      per_page: perPage,
      total_pages: Math.ceil(searchResult.length / perPage),
      data: searchResult.slice(perPage * (page - 1), perPage * page),
    }
  );
};