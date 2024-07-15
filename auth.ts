import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import connectDatabase from "./lib/Database/db"
import { User } from "./models/userModels/user.Models";
export const {handlers,signIn,signOut,auth} =NextAuth({
    providers:[
        Github({
            clientId:process.env.NEXT_GITHUB_CLIENT_ID,
            clientSecret:process.env.NEXT_GITHUB_CLIENT_SECRET
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
        async session({session}:{session:any}){
            try {
                await connectDatabase();
                if(session.user){
                    const user =await User.findOne({emails:session.user.email})
                    if(user){
                        session.user._id =user._id
                        return session
                    }
                    else{
                        console.log("User not found ")
                    }
                }else{
                    console.log("Invalid Session")
                }
            } catch (error) {
                throw error;
                console.log("error",error)
                
            }
        },
        async signIn({account,profile}){
            if(account?.provider === "github"){
                await connectDatabase();
                try {
                    const user =await User.findOne({emails:profile?.email})
                    if(!user){
                        const newUser=await User.create({
                            userName:profile?.login,
                            fullName:profile?.name,
                            emails:profile?.email,
                            profilePhoto:profile?.avatar_url
                        })
                        await newUser.save()
                    }                  
                    return true
                } catch (error) {
                    console.log("error",error)
                    throw error
                }
            }
            return false;
        }
    }
})