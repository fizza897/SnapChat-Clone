import { auth } from '@/auth'
import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import LogoutButton from '@/shared/LogoutButton/LogoutButton'
import Searchbar from '../Searchbar/Searchbar'
import Friends from '../Friends/Friends'

const LeftSidebar =async () => {
    const authUser=await auth()
  return (
    <>
    <div className='w-[50%] m-2 md:w-[25%] border-2 border-gray-300 rounded-lg '>
        <div className='flex p-4 xitems-center justify-between border-b border-gray-300 pb-3'>
            <div className='flex items-center gap-2'>
                {authUser && (
                    <>
                    <Avatar>
                        <AvatarImage src={authUser.user?.image!} alt="@shadcn"/>
                    </Avatar>
                    <h1 className='font-medium'>{authUser.user?.name}</h1>
                    </>
                )}
            </div>
            <div>
                <LogoutButton/>
            </div>
        </div>
        <div className='p-2'>
            <Searchbar/>
            <Friends/>
        </div>
    </div>
    
    </>
  )
}

export default LeftSidebar