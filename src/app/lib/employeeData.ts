import { StaticImageData } from 'next/image';
import avatar1 from '@/app/images/default-avatar/avatar-1.png';
import avatar2 from '@/app/images/default-avatar/avatar-2.png';
import avatar3 from '@/app/images/default-avatar/avatar-3.png';
import avatar4 from '@/app/images/default-avatar/avatar-4.png';
import avatar5 from '@/app/images/default-avatar/avatar-5.png';

const getRandAvatar = (): StaticImageData => {
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
  return avatars[Math.floor(Math.random() * avatars.length)];
}

export type EmployeeData = {
  Date: string;
  Employee: string;
  avatar: StaticImageData;
  Role: string;
  "Employment Type": string;
  Status: string;
  "Check In": string;
  "Check Out": string;
  "Over Time": string;
};

export const employeeData: EmployeeData[] = [
  {
    Date: "2023-10-01",
    Employee: "John Doe",
    avatar: getRandAvatar(),
    Role: "Developer",
    "Employment Type": "Full-time",
    Status: "Active",
    "Check In": "09:00 AM",
    "Check Out": "05:00 PM",
    "Over Time": "1"
  },
  {
    Date: "2023-10-01",
    Employee: "Jane Smith",
    avatar: getRandAvatar(),
    Role: "Designer",
    "Employment Type": "Part-time",
    Status: "Active",
    "Check In": "10:00 AM",
    "Check Out": "04:00 PM",
    "Over Time": "0.5"
  },
  {
    Date: "2023-10-01",
    Employee: "Alice Johnson",
    avatar: getRandAvatar(),
    Role: "Manager",
    "Employment Type": "Full-time",
    Status: "Active",
    "Check In": "08:30 AM",
    "Check Out": "06:00 PM",
    "Over Time": "2"
  },
  {
    Date: "2023-10-01",
    Employee: "Bob Brown",
    avatar: getRandAvatar(),
    Role: "Tester",
    "Employment Type": "Contract",
    Status: "Active",
    "Check In": "09:15 AM",
    "Check Out": "05:15 PM",
    "Over Time": "0.75"
  },
  {
    Date: "2023-10-01",
    Employee: "Charlie Davis",
    avatar: getRandAvatar(),
    Role: "Support",
    "Employment Type": "Full-time",
    Status: "Active",
    "Check In": "08:00 AM",
    "Check Out": "04:00 PM",
    "Over Time": "1"
  }
];