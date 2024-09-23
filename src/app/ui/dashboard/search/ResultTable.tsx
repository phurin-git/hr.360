import Image from 'next/image';
import { Attendance } from '@/app/lib/type';

const Component = ({ filteredResult }:{ filteredResult: Attendance[] }) => {
  return (
    <div className='h-[488px]'>
      <table className='w-full my-6'>
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
          {filteredResult.map((data, index) => {
            return (
              <tr key={index} >
                <td>{data.date}</td>
                <td>
                  <div className='flex gap-3 items-center'>
                    <Image src={data.avatar} alt="avatar" />
                    <span>{data.name}</span>
                  </div>
                </td>
                <td>{data.role}</td>
                <td>
                  <div>{data.type}</div>
                </td>
                <td>
                  <div>{data.status}</div>
                </td>
                <td>{data.timeIn}</td>
                <td>{data.timeOut}</td>
                <td>{data.ot}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Component;