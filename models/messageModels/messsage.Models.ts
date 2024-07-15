
import { UserDocument } from './../userModels/user.Models';
import mongoose, { Types,PopulatedDoc, Model } from "mongoose";

export interface MessageInterface{
    senderId:Types.ObjectId | PopulatedDoc <UserDocument>,
    receiverId:Types.ObjectId | PopulatedDoc <UserDocument>,
    content:string,
    messageTypes :"text" | "image",
    opened:boolean
}
export interface MessageDocument extends MessageInterface, Document{
    createdAt:Date,
    updatedAt:Date
}
const messageModels =new mongoose.Schema<MessageDocument>({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    content:{
        type:String,
        required:true,
    },
    messageTypes:{
        type:String,
        required:true,
        enum:["text","image"]
    },
    opened:{
        type:Boolean,
        default:false
    }
},{timestamps:true})
export const Message:Model<MessageDocument> =mongoose?.models?.Message || mongoose.model("Message",messageModels)