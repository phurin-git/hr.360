'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import { AttendanceApiResponse } from '@/app/lib/type';
import SearchAndFilter from '@/app/ui/dashboard/search/SearchAndFilter';
import Table from '@/app/ui/dashboard/search/Table';
import Pagination from '@/app/ui/dashboard/search/Pagination';

const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<AttendanceApiResponse> => fetch(...args).then(res => res.json());

const Component = () => {
  const router = useRouter();
  const query = useSearchParams();
  const perPage = query.get('per_page') || '5';
  const [page, setPage] = useState<string>(query.get('page') || '1');
  const [searchTerm, setSearchTerm] = useState<string>(query.get('search') || '');
  const [searchQuery, setSearchQuery] = useState<string>(`/?page=${page}&per_page=${perPage}&search=${searchTerm}`);
  const { data, error, isLoading } = useSWR(`/api/attendances${searchQuery}`, fetcher);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(`/?page=${page}&per_page=${perPage}&search=${searchTerm}`);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    setSearchQuery(`/?page=${page}&per_page=${perPage}&search=${searchTerm}`);
  }, [page]);

  useEffect(() => {
    router.push(`/dashboard${searchQuery}`);
  }, [router, searchQuery]);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <SearchAndFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {data && <Table data={data['data']} />}
      {data && (
        <Pagination
          page={data['page']}
          setPage={setPage}
          total={data['total']}
          totalPage={data['total_pages']}
          perPage={data['per_page']}
        />
      )}
    </>
  );
};

export default Component;