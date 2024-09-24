'use client';
import useSWR from 'swr';
import Image from 'next/image';
import { Card } from '@/app/lib/type';
import totalWorkforceIcon from '@/app/images/card/briefcase-06.svg';
import presentWorkforceIcon from '@/app/images/card/office-chair.svg';
import absentWorkforceIcon from '@/app/images/card/alert-diamond.svg';
import lateArrivalsIcon from '@/app/images/card/alarm-clock.svg';
import onLeaveIcon from '@/app/images/card/beach.svg';

const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<any> => fetch(...args).then(res => res.json());

const getCard = ({ icon, title, value, color }: Card) => {
  return (
    <div className='rounded-xl flex flex-col gap-4 p-6 border border-black/20'>
          <div className='flex gap-1 justify-between items-center'>
            <div className='size-10 rounded-lg flex justify-center items-center border border-black/20'>
              <Image src={icon} alt={title} />
            </div>
            <p className='font-light text-xs leading-5 text-black/60'><span className={`font-normal ${color === 'positive' ? 'text-positive' : 'text-negative'}`}>10%</span> vs last month</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-light text-xs leading-5'>{title}</p>
            <p className='font-medium text-[2rem] leading-10'>{value}</p>
          </div>
        </div>
  );
};

const Component = () => {
  const { data, error, isLoading } = useSWR('/api/attendances', fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const cardData: Card[] = [
    { icon: totalWorkforceIcon, title: 'Total Workforce', value: data['total'], color: 'positive' },
    { icon: presentWorkforceIcon, title: 'Present Workforce', value: data['present'], color: 'positive' },
    { icon: absentWorkforceIcon, title: 'Absent Workforce', value: data['absent'], color: 'negative' },
    { icon: lateArrivalsIcon, title: 'Late arrivals', value: data['late'], color: 'positive' },
    { icon: onLeaveIcon, title: 'On leave', value: data['leave'], color: 'positive' },
  ];

  return (
    <div className='flex flex-wrap gap-6 mt-6 mb-10'>
      {cardData.map((data, index) => {
        return (
          <div key={index}>
            {getCard(data)}
          </div>
        )})
      } 
    </div>
  );
};

export default Component;