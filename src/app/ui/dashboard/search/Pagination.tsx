import Image from 'next/image';
import arrowLeftIcon from '@/app/images/menu-item/square-arrow-left-double-round.svg';
import arrowRightIcon from '@/app/images/menu-item/square-arrow-right-double-round.svg';

const Component = (
  {
    page,
    setPage,
    total,
    totalPage,
    perPage
  }:{
    page: number,
    setPage: (page: string) => void,
    total: number,
    totalPage: number,
    perPage: number
  }
) => {
  return (
    <div className='flex gap-[553px] justify-between items-center my-[62px]'>
        <div className='flex gap-3 text-base leading-6'>
          <span>Showing</span>
          <span className='font-normal'>
            {((page - 1) * perPage) + 1}
            {' to '}
            {page * perPage > total ? total : page * perPage}
            {' of '}
            {total}
          </span>
          <span>employees</span>
        </div>
        <div className='flex gap-3'>
          <button type="button" 
          onClick={() => page > 1 ? setPage((page - 1).toString()) : null }
          className='w-[60px] rounded-lg flex justify-center items-center px-4 py-[18px] bg-btn'>
            <Image src={arrowLeftIcon} alt="arrow left" />
          </button>
          <button type="button"
          onClick={() => page < totalPage ? setPage((page + 1).toString()) : null }
          className='w-[60px] rounded-lg flex justify-center items-center px-4 py-[18px] bg-btn'>
            <Image src={arrowRightIcon} alt="arrow right" />
          </button>
        </div>
      </div>
  );
};

export default Component;