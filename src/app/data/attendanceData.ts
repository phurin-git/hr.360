import { Attendance } from '@/app/lib/type';
import { faker } from '@faker-js/faker';
import avatar1 from '@/app/images/default-avatar/avatar-1.png';
import avatar2 from '@/app/images/default-avatar/avatar-2.png';
import avatar3 from '@/app/images/default-avatar/avatar-3.png';
import avatar4 from '@/app/images/default-avatar/avatar-4.png';
import avatar5 from '@/app/images/default-avatar/avatar-5.png';

const randomIntBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const calculateOT = (timeIn: Date, timeOut: Date): number => {
  let otHours = 0;

  // Calculate early clock-in OT (before 08:00 AM)
  const workStart = new Date(timeIn);
  workStart.setHours(8, 0, 0); // 08:00 AM start

  if (timeIn < workStart) {
    const earlyOtMs = workStart.getTime() - timeIn.getTime(); // milliseconds of OT before 08:00 AM
    const earlyOtHours = earlyOtMs / (1000 * 60 * 60); // Convert to hours
    otHours += Math.floor(earlyOtHours * 2) / 2; // Round to nearest 0.5
  }

  // Calculate late clock-out OT (after 17:00 PM)
  const workEnd = new Date(timeOut);
  workEnd.setHours(17, 0, 0); // 05:00 PM end

  if (timeOut > workEnd) {
    const lateOtMs = timeOut.getTime() - workEnd.getTime(); // milliseconds of OT after 05:00 PM
    const lateOtHours = lateOtMs / (1000 * 60 * 60); // Convert to hours
    otHours += Math.floor(lateOtHours * 2) / 2; // Round to nearest 0.5
  }

  return otHours;
};

const createFakeData = (): Attendance => {
  const now = new Date();
  const oneMonthAgo = new Date().setDate(now.getDate() - 30);
  const date = faker.date.between({ from: oneMonthAgo, to: now });
  
  // Generate timeIn and timeOut within the same day
  const baseDate = faker.date.between({ from: oneMonthAgo, to: now });

  // Set timeIn within the range of 08:00 AM to 09:00 AM of the same date
  const timeIn = faker.date.between({
    from: new Date(baseDate.setHours(8, 0, 0)),  // 08:00 AM
    to: new Date(baseDate.setHours(9, 0, 0))     // 09:00 AM
  });

  // Set timeOut within the range of 05:00 PM to 06:00 PM of the same date
  const timeOut = faker.date.between({
    from: new Date(baseDate.setHours(17, 0, 0)),  // 05:00 PM
    to: new Date(baseDate.setHours(18, 0, 0))     // 06:00 PM
  });

  const ot = calculateOT(timeIn, timeOut);
  const status = timeIn.getHours() > 8 ? 'Late' : faker.helpers.arrayElement(['Present', 'Absent', 'Leave']);
  const isGetWork = status === 'Present' || status === 'Late';
  return {
    name: faker.person.fullName(),
    role: faker.person.jobTitle(),
    department: faker.person.jobArea(),
    date: date.toLocaleDateString(),
    timeIn: isGetWork ? timeIn.toLocaleTimeString() : '-',
    timeOut: isGetWork ? timeOut.toLocaleTimeString() : '-',
    ot: isGetWork ? ot : 0,
    status: status,
    type: faker.helpers.arrayElement(['Full-Time', 'Part-Time']),
    avatar: faker.helpers.arrayElement([avatar1, avatar2, avatar3, avatar4, avatar5])
  };
};

const attendanceData: Attendance[] = [...Array(randomIntBetween(1, 250))].map(() => createFakeData());

export default attendanceData;