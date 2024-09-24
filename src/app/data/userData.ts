import { User } from "@/app/lib/type";

const userData: User[] = [
  {
    id: "1",
    name: "Super User",
    email: "superuser@account.com",
    password: "$argon2id$v=19$m=65536,t=3,p=4$YvYGwCqKYf9d7UwJSSlIVg$QZHtQ7rmXTNTrUWd2BHXDbd7OP7g34tWkbKFXmFJeZs",
    role: "Super User",
  },
{
  id: "2",
  name: "Admin User",
  email: "admin@account.com",
  password: "$argon2id$v=19$m=65536,t=3,p=4$YvYGwCqKYf9d7UwJSSlIVg$QZHtQ7rmXTNTrUWd2BHXDbd7OP7g34tWkbKFXmFJeZs",
  role: "Admin",
},
{
  id: "3",
  name: "Regular User",
  email: "user@account.com",
  password: "$argon2id$v=19$m=65536,t=3,p=4$YvYGwCqKYf9d7UwJSSlIVg$QZHtQ7rmXTNTrUWd2BHXDbd7OP7g34tWkbKFXmFJeZs",
  role: "User",
}
];

export default userData;