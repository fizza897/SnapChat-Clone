"use server"

import { auth, signOut } from "@/auth"
import { redirect } from "next/navigation"
// module level server actions
export const sendMessage =async(image:string,receiverId:string,messageType:"image" | "text")=>{
    try {
        const authUser = await auth()
    } catch (error) {
        
    }
}
export const logoutHandler=async()=>{
    try {
        await signOut()
    } catch (error) {
        console.log(error)
        throw error
    }
    redirect("/login")
}
