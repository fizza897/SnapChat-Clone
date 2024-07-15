import ChatPage from '@/components/ChatPage/ChatPage'
import { getProfileUser } from '@/lib/UserData/UserData'
import React from 'react'

const ChattingPage = async ({params}:{params:{id:string}}) => {
    const {id}=params
    let userProfile=await getProfileUser(id);
    // userProfile=JSON.stringify(userProfile)

  return (
    <>
    <div className='w-[72%]'>
      <ChatPage userProfile={userProfile}/>
    </div>
    
    </>
  )
}

export default ChattingPage;