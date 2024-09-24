import { User } from "@/app/lib/type";

const userData: User[] = [
  {
    id: "1",
    name: "Super User",
    email: "super@account.com",
    password: "superuser",
    role: "Super User",
  },
{
  id: "2",
  name: "Admin User",
  email: "admin@account.com",
  password: "adminuser",
  role: "Admin",
},
{
  id: "3",
  name: "Regular User",
  email: "user@account.com",
  password: "regularuser",
  role: "User",
}
];

export default userData;