import { ArrowBigLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'

const ChatTopbar = ({userProfile}:{userProfile:any}) => {
  return (
    <>
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
            <Link href={"/chat"}>
            <ArrowBigLeft/>
            </Link>
            <div className='flex items-center gap-1'>
                <Avatar>
                    <AvatarImage src={userProfile.profilePhoto} alt='user-profile-photo'/>
                </Avatar>
                <h1 className='font-bold'>{userProfile.fullName}</h1>
            </div>
        </div>

        <form action="">
          <SubmitButton/> 
        </form>
    </div>   
    </>
  )
}
export default ChatTopbar

const SubmitButton =()=>{
  return (
    <Button>
      Submit
    </Button>
  )
}