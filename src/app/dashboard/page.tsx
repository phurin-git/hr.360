import Heading from '@/app/ui/dashboard/Heading';
import Cards from '@/app/ui/dashboard/Cards';
import Search from '@/app/ui/dashboard/Search';
import getAttendanceData from '@/app/lib/getAttendanceData';

const Page = async () => {
  const attendanceData = await getAttendanceData();
  return (
    <section className='mx-6'>
      <Heading />
      <Cards />
      <Search attendanceData={attendanceData} />
    </section>
  );
};

export default Page;