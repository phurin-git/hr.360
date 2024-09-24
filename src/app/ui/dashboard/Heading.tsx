const getDateAndTime = (): string[] => {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const datetime = new Date();
  const splitDate = datetime.toLocaleDateString('en-US', options).replace(',','').split(' ');
  const day = splitDate[1];
  const month = splitDate[0];
  const year = splitDate[2];
  const time = datetime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  return [`${day} ${month}, ${year}`, time];
};

const Component = () => {
  return (
  <div className='flex gap-6 justify-between items-center mt-6 mb-10'>
    <div className='flex flex-col gap-2'>
      <p className='text-2xl font-normal'>Employee Attendance</p>
      <div className='flex gap-2'>
        <div className='flex gap-2 items-center'>
          <span className='text-sm opacity-60'>Dashboard</span>
          <div className='size-1 rounded-full bg-secondary border border-black/20'></div>
        </div>
        <div className='flex gap-2 items-center'>
          <span className='text-sm opacity-60'>Employee</span>
          <div className='size-1 rounded-full bg-secondary border border-black/20'></div>
        </div>
        <span className='text-sm text-highlight'>Attendance</span>
      </div>
    </div>
      <div className='flex gap-3'>
        <div className='text-base'>{getDateAndTime()[0]}</div>
        <div className='text-base uppercase'>{getDateAndTime()[1]}</div>
      </div>
    </div>
  );
};

export default Component;