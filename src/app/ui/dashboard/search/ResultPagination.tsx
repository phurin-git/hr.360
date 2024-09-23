import Image from 'next/image';
import arrowLeftIcon from '@/app/images/menu-item/square-arrow-left-double-round.svg';
import arrowRightIcon from '@/app/images/menu-item/square-arrow-right-double-round.svg';

const Component = () => {
  return (
    <div className='flex gap-[553px] justify-between items-center mb-[62px]'>
        <div className='flex gap-3 text-base leading-6'>
          <span>Showing</span>
          <span className='font-normal'>{1} to {5} of {5}</span>
          <span>employees</span>
        </div>
        <div className='flex gap-3'>
          <button type="button" className='w-[60px] rounded-lg flex justify-center items-center px-4 py-[18px] bg-btn'>
            <Image src={arrowLeftIcon} alt="arrow left" />
          </button>
          <button type="button" className='w-[60px] rounded-lg flex justify-center items-center px-4 py-[18px] bg-btn'>
            <Image src={arrowRightIcon} alt="arrow right" />
          </button>
        </div>
      </div>
  );
};

export default Component;