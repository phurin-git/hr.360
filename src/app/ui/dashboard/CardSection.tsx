import Image, { StaticImageData } from 'next/image';
import totalWorkforceIcon from '@/app/images/card/briefcase-06.svg';
import presentWorkforceIcon from '@/app/images/card/office-chair.svg';
import absentWorkforceIcon from '@/app/images/card/alert-diamond.svg';
import lateArrivalsIcon from '@/app/images/card/alarm-clock.svg';
import onLeaveIcon from '@/app/images/card/beach.svg';

type colorOption = 'positive' | 'negative';
type CardData = { icon: StaticImageData, title: string, value: number, color: colorOption };

const cardData: CardData[] = [
  { icon: totalWorkforceIcon, title: 'Total Workforce', value: 150, color: 'positive' },
  { icon: presentWorkforceIcon, title: 'Present Workforce', value: 125, color: 'positive' },
  { icon: absentWorkforceIcon, title: 'Absent Workforce', value: 15, color: 'negative' },
  { icon: lateArrivalsIcon, title: 'Late arrivals', value: 5, color: 'positive' },
  { icon: onLeaveIcon, title: 'On leave', value: 5, color: 'positive' },
];

const getCard = ({ icon, title, value, color }: CardData) => {
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

const CardSection = () => {
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

export default CardSection;