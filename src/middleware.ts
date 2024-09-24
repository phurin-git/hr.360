import { auth } from "@/app/auth"
 
export default auth((req) => {
  if (req.auth && req.nextUrl.pathname == "/signin") {
    const newUrl = new URL("/", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})