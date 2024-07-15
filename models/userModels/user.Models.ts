import mongoose,{Document,Model} from "mongoose";
export  interface UserInterface{
    userName:string,
    fullName:string,
    emails:string,
    profilePhoto:string
}
export interface UserDocument extends UserInterface,Document{
    createdAt:Date,
    updatedAt:Date  

}
const userModel=new mongoose.Schema<UserDocument>({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    fullName:{
        type:String,
        required:true,
    },
    emails:{
        type:String,
        required:true,
        unique:true
    },
    profilePhoto:{
        type:String,
        default:""
    }
},{timestamps:true})
export const User:Model<UserDocument>=mongoose?.models?.User || mongoose.model("User",userModel);