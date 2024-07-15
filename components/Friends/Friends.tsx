import React from 'react'
import Friend from './Friend/Friend'
import { auth } from '@/auth'
import { getSidebarUsers } from '@/lib/UserData/UserData'

const Friends =async () => {
    const authUser =await auth()
    console.log("authUser23456789",authUser)
    const otherUsers =authUser?.user ? await getSidebarUsers(authUser?.user?._id):[];
    console.log("otherUsers",otherUsers)
  return (
    <>
    <div className='flex-1 overflow-y-auto'>
      {
        otherUsers.map((user)=>{
          return (
            <Friend key={user._id} user={user}/>
          )
        })
      }
    </div>
    
    </>
  )
}

export default Friends