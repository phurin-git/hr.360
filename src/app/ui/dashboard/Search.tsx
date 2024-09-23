'use client';
import { useState, useEffect } from 'react';
import { Attendance } from '@/app/lib/type';
import lodash from 'lodash'; // delaying the search execution after the user has stopped typing (just try best practice)
import Menu from '@/app/ui/dashboard/search/Menu';
import ResultTable from '@/app/ui/dashboard/search/ResultTable';
import ResultPagination from '@/app/ui/dashboard/search/ResultPagination';

const Component = ({attendanceData}: {attendanceData: Attendance[]}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Attendance[]>(attendanceData);

  const searchHandler = lodash.debounce((term: string) => {
    const results = attendanceData.filter((data: Attendance) => {
      return Object.values(data).join(' ').toLowerCase().includes(term.toLowerCase());
    });
    setSearchResults(results);
  }, 300);

  useEffect(() => {
    searchHandler(searchTerm);
  }, [searchTerm, searchHandler]);
  
  return (
    <>
      <Menu filterTerm={searchTerm} setFilterTerm={setSearchTerm} />
      <ResultTable filteredResult={searchResults}/>
      <ResultPagination />
    </>
  );
};

export default Component;