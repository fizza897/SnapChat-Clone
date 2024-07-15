import NextAuth, { Session } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const authConfig={
    pages:{
        login:"/login"
    },
    providers:[],
    callbacks:{
        async authorized({auth,request}:{auth:Session | null, request:NextRequest}){
            const user =auth?.user
            const chatPage=request.nextUrl.pathname.startsWith("/chat")
            const authPage =request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/register")
            if(!user && chatPage ){
                return false;
            }
            if(user && authPage){
                return NextResponse.redirect(new URL("/chat",request.nextUrl));
            }
            return true;
        }
    }
}
export default NextAuth(authConfig).auth;