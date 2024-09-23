import Image from "next/image";
import { Preahvihear } from'next/font/google';
import logo from '@/app/images/logo.svg';
import dashboardIcon from '@/app/images/side-nav/dashboard-square-01.svg';
import employeeIcon from '@/app/images/side-nav/user-group.svg';
import recruitmentIcon from '@/app/images/side-nav/user-add-02.svg';
import performanceIcon from '@/app/images/side-nav/chart-evaluation.svg';
import payrollIcon from '@/app/images/side-nav/cash-01.svg';
import trainingIcon from '@/app/images/side-nav/book-02.svg';
import scheduleIcon from '@/app/images/side-nav/calendar-01.svg';
import reportsIcon from '@/app/images/side-nav/file-01.svg';
import helpIcon from '@/app/images/side-nav/information-circle.svg';
import logoutIcon from '@/app/images/side-nav/logout-03.svg';
import { logout } from "@/app/lib/authActions";
import { NavItem } from "@/app/lib/type";

const preahvihear = Preahvihear(
  {
    weight: "400",
    preload: true,
    subsets: ["latin"],
    style: ["normal"],
  }
);

const navItems: NavItem[] = [
  { icon: dashboardIcon, label: 'Dashboard', isActive: false },
  { icon: employeeIcon, label: 'Employee', isActive: true },
  { icon: recruitmentIcon, label: 'Recruitment', isActive: false },
  { icon: performanceIcon, label: 'Performance Mgt', isActive: false },
  { icon: payrollIcon, label: 'Payroll', isActive: false },
  { icon: trainingIcon, label: 'Training and Development', isActive: false },
  { icon: scheduleIcon, label: 'Schedule', isActive: false },
  { icon: reportsIcon, label: 'Reports and Analytics', isActive: false },
  { icon: helpIcon, label: 'Help', isActive: false },
];

const getNavLink = ({ icon, label, isActive=false }: NavItem) => {
  return (
    <div className={`rounded-[3px] flex gap-3 items-center p-4 ${isActive ? 'bg-tertiary text-white' : ''}`}>
      <div className="size-5">
        {icon && <Image src={icon} alt={label}/>}
      </div>
      <p className="text-sm truncate">{label}</p>
    </div>
  );
};

const Page = () => {
  return (
    <section className="sticky top-0 w-[248px] h-full min-h-screen flex flex-col bg-table">
      <div className="flex gap-3 items-center p-6 -mb-4">
        <Image src={logo} width={40} height={40} alt="logo" />
        <span className={`${preahvihear.className} text-xl`}>HR.360</span>
      </div>
      <nav className="flex flex-col justify-between p-6">
        <ul className="flex flex-col gap-2 justify-center">
          {navItems.map((item, index) => 
          <li key={index}>{getNavLink(item)}</li>
          )}
          <li key={navItems.length}>
            <form action={logout}>
              <button type="submit" className='w-full rounded-[3px] flex gap-3 items-center p-4 hover:bg-tertiary hover:text-white transition-colors'>
                <Image src={logoutIcon} alt='logout' className="size-5"/>
                <p className="text-sm truncate">Logout</p>
              </button>
            </form>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Page;