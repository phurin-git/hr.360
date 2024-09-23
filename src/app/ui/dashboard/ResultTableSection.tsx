import Image from 'next/image';
import { EmployeeData } from '@/app/lib/employeeData';

const ResultTableSection = ({ filteredResult }:{ filteredResult: EmployeeData[] }) => {
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
                <td>{data.Date}</td>
                <td>
                  <div className='flex gap-3 items-center'>
                    <Image src={data.avatar} alt="avatar" />
                    <span>{data.Employee}</span>
                  </div>
                </td>
                <td>{data.Role}</td>
                <td>
                  <div>{data['Employment Type']}</div>
                </td>
                <td>
                  <div>{data.Status}</div>
                </td>
                <td>{data['Check In']}</td>
                <td>{data['Check Out']}</td>
                <td>{data['Over Time']}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTableSection;