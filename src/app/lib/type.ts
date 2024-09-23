import { StaticImageData } from "next/image";

export interface Attendance {
  name: string;
  role: string;
  department: string;
  date: string;
  timeIn: string;
  timeOut: string;
  ot: number;
  status: string;
  type: string;
  avatar: StaticImageData;
}

type colorOption = 'positive' | 'negative';

export interface Card {
  title: string;
  value: number;
  icon: StaticImageData;
  color: colorOption;
}

export interface NavItem {
  icon?: StaticImageData;
  label: string;
  isActive?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}