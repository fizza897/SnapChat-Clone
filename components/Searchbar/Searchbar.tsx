import React from 'react'
import { Input } from '../ui/input'
import { BiSearchAlt2 } from "react-icons/bi";

const Searchbar = () => {
  return (
    <>
    <div>
        <div className='flex items-center gap-2 bg-[#E3E6E8] rounded-xl px-2 py-3'>
    <input
     type='text'
     placeholder='Search or start new chat'
    className='bg-transparent outline-none w-full' />
    <BiSearchAlt2 className='w-6 h-6 outline-none'/>
        </div>
    </div>
    
    
    </>
  )
}

export default Searchbar