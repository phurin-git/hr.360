import { auth } from "@/app/auth"
 
const getSession = async () => {
  const session = await auth()
  if (!session || !session.user) return null
  return session.user
}

export default getSession;