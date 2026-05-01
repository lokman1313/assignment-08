import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { auth } from "./lib/auth"

export async function proxy(request) {
 console.log("hellow john")
  const session = await auth.api.getSession({
        headers: await headers()
    })
    if(session){
      return NextResponse.next()
    }
    else{
      return NextResponse.redirect(new URL('/login', request.url))
    }
}



export const config = {
  matcher: ["/profile","/tile/:path*"],
}