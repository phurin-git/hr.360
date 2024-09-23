import { Attendance } from '@/app/lib/type';
import avatar1 from '@/app/images/default-avatar/avatar-1.png';
import avatar2 from '@/app/images/default-avatar/avatar-2.png';
import avatar3 from '@/app/images/default-avatar/avatar-3.png';
import avatar4 from '@/app/images/default-avatar/avatar-4.png';
import avatar5 from '@/app/images/default-avatar/avatar-5.png';

const getRandAvatar = () => {
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
  return avatars[Math.floor(Math.random() * avatars.length)];
}


const attendanceData: Attendance[] = [
  {
    name: 'John Doe',
    role: 'Software Engineer',
    department: 'Engineering',
    date: '13 Jan, 2024',
    timeIn: '08:00',
    timeOut: '17:00',
    ot: 0,
    status: 'Present',
    type: 'Regular',
    avatar: getRandAvatar()
  },
  {
    name: 'Jane Doe',
    role: 'Software Engineer',
    department: 'Engineering',
    date: '13 Jan, 2024',
    timeIn: '08:00',
    timeOut: '17:00',
    ot: 0,
    status: 'Present',
    type: 'Regular',
    avatar: getRandAvatar()
  },
  {
    name: 'John Doe',
    role: 'Software Engineer',
    department: 'Engineering',
    date: '13 Jan, 2024',
    timeIn: '08:00',
    timeOut: '17:00',
    ot: 0,
    status: 'Present',
    type: 'Regular',
    avatar: getRandAvatar()
  },
  {
    name: 'Jane Doe',
    role: 'Software Engineer',
    department: 'Engineering',
    date: '13 Jan, 2024',
    timeIn: '08:00',
    timeOut: '17:00',
    ot: 0,
    status: 'Present',
    type: 'Regular',
    avatar: getRandAvatar()
  },
  {
    name: 'John Doe',
    role: 'Software Engineer',
    department: 'Engineering',
    date: '13 Jan, 2024',
    timeIn: '08:00',
    timeOut: '17:00',
    ot: 0,
    status: 'Present',
    type: 'Regular',
    avatar: getRandAvatar()
  },
  {
    name: 'Jane Doe',
    role: 'Software Engineer',
    department: 'Engineering',
    date: '13 Jan, 2024',
    timeIn: '08:00',
    timeOut: '17:00',
    ot: 0,
    status: 'Present',
    type: 'Regular',
    avatar: getRandAvatar()
  },
];

export default attendanceData;