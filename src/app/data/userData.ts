import { User } from "@/app/lib/type";

const userData: User[] = [
  {
    id: "1",
    name: "Super User",
    email: "super@account.com",
    password: "$argon2id$v=19$m=65536,t=3,p=4$pz4OxYo1gT79PYFwYYmsBw$4pc5kTwZtpp3C62sZZxJAgZ5/+jL2+M1MQYe2haikb4",
    role: "Super User",
  },
{
  id: "2",
  name: "Admin User",
  email: "admin@account.com",
  password: "$argon2id$v=19$m=65536,t=3,p=4$KEpaQmbwGdF5ZDqADJ5IAw$YXAwksYaZsl9OT0QPsEE1RtzW+kPi13iUqUCmLrWOrw",
  role: "Admin",
},
{
  id: "3",
  name: "Regular User",
  email: "user@account.com",
  password: "$argon2id$v=19$m=65536,t=3,p=4$wMv8hJZsReZe7muq+O/vVg$rs8Dhzde5etxNBFGhcfH4U9Wzf3XBC8aWR4xCwtPxBc",
  role: "User",
}
];

export default userData;