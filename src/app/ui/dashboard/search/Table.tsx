import Image from 'next/image';
import { Attendance } from '@/app/lib/type';

const Component = ({ data }:{ data: Attendance[] }) => {
  return (
    <div className='relative h-[675px] hide-scrollbar my-6 overflow-x-scroll'>
      <table className='absolute '>
        <thead className='text-left bg-table'>
          <tr>
            <th className='rounded-l-xl'>Date</th>
            <th>Employee</th>
            <th>Role</th>
            <th>Employment Type</th>
            <th>Status</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th className='rounded-r-xl'>Over Time</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((d, index) => {
            return (
              <tr key={index} >
                <td>{d.date}</td>
                <td>
                  <div className='flex gap-3 items-center'>
                    <Image src={d.avatar} alt="avatar" />
                    <span>{d.name}</span>
                  </div>
                </td>
                <td>{d.role}</td>
                <td>
                  <div>{d.type}</div>
                </td>
                <td>
                  <div>{d.status}</div>
                </td>
                <td>{d.timeIn}</td>
                <td>{d.timeOut}</td>
                <td>{d.ot}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Component;