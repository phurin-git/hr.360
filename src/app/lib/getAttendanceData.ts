import { Attendance } from '@/app/lib/type';

const attendanceData = async ():Promise<Attendance[]> => {
  const data = await fetch('http://localhost:3000/api/attendances').then((res) => res.json());
  return data;
};

export default attendanceData;