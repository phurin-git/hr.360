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
        <div className='text-base'>13 January, 2024</div>
        <div className='text-base uppercase'>11:23 AM</div>
      </div>
    </div>
  );
};

export default Component;