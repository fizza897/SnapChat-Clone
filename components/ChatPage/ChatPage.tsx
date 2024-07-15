import React from 'react'
import ChatTopbar from '../ChatTopbar/ChatTopbar'
import ChatBody from '../ChatBody/ChatBody'
import ChatInput from '../ChatInput/ChatInput'

const ChatPage = ({userProfile}:{userProfile:any}) => {
  return (
    <>
    <div className='m-2 flex flex-col h-[96%] '>
        <ChatTopbar userProfile={userProfile}/>
        <ChatBody/>
        <ChatInput/>
    </div>
    </>
  )
}

export default ChatPage