import { Message } from "@/models/messageModels/messsage.Models";
import { User, UserDocument } from "@/models/userModels/user.Models"
import connectDatabase from "../Database/db";

export const getSidebarUsers =async(loggedInUserId:string)=>{
   try {
    const otherUsers=await User.find({_id:{$ne:loggedInUserId}})
    const userInfo =await Promise.all(
        otherUsers.map(async(user)=>{
            const lastMessage=await Message.findOne({
                $or:[
                    {senderId:user._id,receiverId:loggedInUserId},
                    {senderId:loggedInUserId,receiverId:user._id},

                ]
            }).sort({createdAt:-1})
            .populate("senderId","fullName profilePhoto _id")
            .populate("receiverId ","fullName profilePhoto _id")
            .exec();
            return {
                _id:user._id,
                participants:[user],
                lastMessage:lastMessage ?
                {
                    ...lastMessage.toJSON(),
                    senderId:lastMessage.senderId,
                    receiverId:lastMessage.receiverId
                }: null
            }
        })
    )
    return userInfo;
   } catch (error) {
    console.log(error)
    throw error;
   }
}

export const getProfileUser =async(userId:string)=>{
    try {
        await connectDatabase();
        const user :UserDocument | null =await User.findOne({_id:userId})
        if(!user) return "User not found"
        return user;
    } catch (error) {
        console.log(error)
        throw error 

        
    }
}