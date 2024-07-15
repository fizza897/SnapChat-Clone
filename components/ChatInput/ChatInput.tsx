"use client"
import React, { useState } from 'react'
import { MdPhotoCamera } from "react-icons/md";
import { Button } from '../ui/button';
import EmojiPopover from '../EmojiPopover/EmojiPopover';

const ChatInput = () => {
  const [inputText,setInputText] =useState<string>("");
  const submitHandler=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <>
    <div className='flex justify-between items-center gap-2'>
      <div className='p-2 cursor-pointer bg-gray-200 rounded-full'>
      <MdPhotoCamera size={"24px"} />
      </div>
      <form onSubmit={submitHandler} className='w-full'>
        <div className='flex items-center gap-4'>
          <input 
          value={inputText}
          onChange={(e)=>setInputText(e.target.value)}
          type="text"
          placeholder='Send a snap message!'
          className='rounded-full w-full border border-gray-400 p-2 outline-none font-medium'
           />
           <Button className='rounded-full' type='submit'>Send Snap</Button>
        </div>
      </form>
      <div>
        <EmojiPopover/>
      </div>
    </div>
    </>
  )
}

export default ChatInput