"use client"
  import React, { useEffect, useState } from "react";

  import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
  } from "@/components/ui/dialog";

  import Image from "next/image";
  import { Button } from "../ui/button";
  import { Input } from "../ui/input";
  import { UserDocument } from "@/models/userModels/user.Models";
  import { AvatarImage ,Avatar} from "../ui/avatar";
import { Loader2 } from "lucide-react";

  const PreviewUsersDialog = ({
    selectedFile,
    close,
    onPreview,
  }: {
    selectedFile:string;
    close: ()=>void;
    onPreview:()=>void;
  })=> {
    const [users,setUsers] =useState([]);
    console.log("users122222333333333",users)
    const [loading,setLoading] =useState(false)
    const [selectedUser,setSelectedUser] =useState<UserDocument>();
    console.log("selectedUser123456789",selectedUser)

    useEffect(()=>{
      const fetchUsers=async()=>{
        setLoading(true)
        try {
          const res=await fetch("/api/chat/getusers")
          const jsonData=await res.json();
          setUsers(jsonData)
        } catch (error) {
          console.log(error)
        } finally{
          setLoading(false)
        }
      }
      fetchUsers()
    },[])
    const selectedUserHandler=(user:UserDocument)=>{
      setSelectedUser(user)
    }
    return (
      <>
      <div>
          <Dialog open={!!selectedFile}>
            <DialogContent onInteractOutside={close} className="sm:max-w-[425px] bg-white border max-w-xl flex flex-col">
              <DialogHeader>
                <div className="flex items-center realative h-3/4 my-auto">
                <Input
                type="text"
                placeholder="Search user to send snap"
                id="name"
                />
                </div>
              </DialogHeader>
              <div className="grid gap-1 py-4">
                {users.map((user:UserDocument)=>{
                  return(
                    <div onClick={()=>selectedUserHandler(user)} className={`${selectedUser?._id ===user._id ? "bg-gray-200" : null} flex items-center gap-5 cursor-pointer p-2 rounded-md hover:bg-gray-200`}>
                      <Avatar>
                        <AvatarImage src={user?.profilePhoto} alt={"user"}/>
                      </Avatar>
                      <div>
                        <h1 className="font-medium">{user.fullName}</h1>
                        <p className="text-sm text-gray-500">@{user.userName}</p>
                      </div>
                    </div>
                  )
                })}
                {
                  loading && 
                  <div className="mx-auto">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                  </div>
                }
              </div>
              <DialogFooter>
                <Button type="submit">Send</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </>
    );
  };

  export default PreviewUsersDialog;
