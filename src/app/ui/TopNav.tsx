import Image from "next/image"
import settingIcon from '@/app/images/top-nav/setting-03.svg';
import mailIcon from '@/app/images/top-nav/mail-02.svg';
import notificationIcon from '@/app/images/top-nav/notification-03.svg';
import profileIcon from '@/app/images/default-avatar/avatar-default.svg';
import arrowDownIcon from '@/app/images/menu-item/arrow-down-01-round.svg';
import getSession from '@/app/lib/getSession';

const Page = async () => {
  const session = await getSession();
  return (
    <header className="flex gap-[714px] justify-between items-center px-6 py-4">
      <p className="text-xl">Welcome back, <span className="font-normal">{session?.name}</span> ☀️</p>
      <div className="flex shrink-0 gap-6 justify-between items-center">
        <div className="flex gap-2">
            <Image src={settingIcon} alt="setting" />
            <Image src={mailIcon} alt="mail" />
            <Image src={notificationIcon} alt="notification" />
        </div>
        <div className='flex gap-3 items-center px-4 py-2'>
            <div className='relative size-10 overflow-hidden'>
            <Image src={profileIcon} alt="profile" fill />
            </div>
            <Image src={arrowDownIcon} alt="arrow" />
        </div>
      </div>
  </header>
  );
};

export default Page;