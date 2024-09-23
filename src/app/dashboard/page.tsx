'use client';
import { useState, useEffect } from 'react';
import lodash from 'lodash'; // delaying the search execution after the user has stopped typing (just try best practice)
import HeadSection from '@/app/ui/dashboard/HeadSection';
import CardSection from '@/app/ui/dashboard/CardSection';
import MenuSection from '@/app/ui/dashboard/MenuSection';
import ResultTableSection from '@/app/ui/dashboard/ResultTableSection';
import ResultNavSection from '@/app/ui/dashboard/ResultNavSection';
import { employeeData } from '@/app/lib/employeeData';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(employeeData);

  const searchHandler = lodash.debounce((term: string) => {
    const results = employeeData.filter((data) => {
      return Object.values(data).join(' ').toLowerCase().includes(term.toLowerCase());
    });
    setSearchResults(results);
  }, 300);

  useEffect(() => {
    searchHandler(searchTerm);
  }, [searchTerm, searchHandler]);

  return (
    <section className='mx-6'>
      <HeadSection />
      <CardSection />
      <MenuSection filterTerm={searchTerm} setFilterTerm={setSearchTerm} />
      <ResultTableSection filteredResult={searchResults}/>
      <ResultNavSection />
    </section>
  );
};

export default Page;