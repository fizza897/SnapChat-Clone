import { auth } from "@/auth"
import connectDatabase from "@/lib/Database/db";
import { User, UserDocument } from "@/models/userModels/user.Models";
import { NextResponse } from "next/server";

export const GET =async ()=>{
    try {
        const authUser =await auth()
        if(!authUser) return;
        await connectDatabase();
        const users:UserDocument[] =await User.find({_id:{$ne:authUser.user?._id}})
        return NextResponse.json(users)
    } catch (error) {
        console.log(error)
        throw error 
    }
}