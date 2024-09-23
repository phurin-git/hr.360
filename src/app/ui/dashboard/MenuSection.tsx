'use client';
import Image from 'next/image';
import searchIcon from '@/app/images/menu-item/search.svg';
import commandIcon from '@/app/images/menu-item/ck.svg';
import filterIcon from '@/app/images/menu-item/text-align-center.svg';
import arrowDownIcon from '@/app/images/menu-item/arrow-down-01-round.svg';
import calendarIcon from '@/app/images/menu-item/calendar-01.svg';
import exportCsvIcon from '@/app/images/menu-item/cloud-upload.svg';

const MenuSection = (
  {
    filterTerm,
    setFilterTerm
  }:{
    filterTerm: string,
    setFilterTerm: (term: string) => void
  }) => {
  
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterTerm(e.target.value);
  }

  return (
    <div className='flex gap-6 justify-between'>
      <div className='flex gap-4'>
        <div className='relative w-[377px]'>
          <input type="search" name="search" value={filterTerm} onChange={handleFilter} placeholder='Search by name, role, department...' className='rounded-xl w-full  flex gap-3 items-center pl-[52px] pr-[52px] py-4 text-base truncate border border-black/20'/>
          <Image src={searchIcon} alt="search" className='absolute top-5 left-6' />
          <Image src={commandIcon} alt="command" className='absolute top-5 right-6' />
        </div>
        <div className='rounded-xl flex gap-3 px-6 py-4 border border-black/20'>
          <p className='text-base leading-6'>Filter</p>
          <Image src={filterIcon} alt="filter" />
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='rounded-xl flex gap-3 items-center px-6 py-4 border border-black/20'>
          <p className='text-base leading-6'>All Departments</p>
          <Image src={arrowDownIcon} alt="arrow" />
        </div>
        <div className='rounded-xl flex gap-3 items-center px-6 py-4 border border-black/20'>
          <Image src={calendarIcon} alt="calendar" />
          <p className='text-base leading-6'>13 Jan, 2024</p>
        </div>
        <div className='rounded-xl flex gap-3 items-center px-6 py-4 border border-black/20'>
          <p className='text-base leading-6'>Export CSV</p>
          <Image src={exportCsvIcon} alt="export csv" />
        </div>
      </div>
    </div>
  );
};

export default MenuSection;