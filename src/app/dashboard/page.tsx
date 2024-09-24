import Heading from '@/app/ui/dashboard/Heading';
import Cards from '@/app/ui/dashboard/Cards';
import Data from '@/app/ui/dashboard/Data';

const Page = () => {
  return (
    <section className='mx-6'>
      <Heading />
      <Cards />
      <Data />
    </section>
  );
};

export default Page;