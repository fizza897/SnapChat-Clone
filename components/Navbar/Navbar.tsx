import React from 'react'
import Logo from "@/Images/Snapchat-logo.webp"
import Image from 'next/image'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { TbGridDots } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";
import LogoutButton from '@/shared/LogoutButton/LogoutButton'
import { auth } from '@/auth'
import Link from 'next/link'

const Navbar = async()  => {
    const authUser = await auth();
  return (
    <>
    <div className='flex items-center justify-between w-screen px-10 py-6'>
        <div className='flex items-center gap-2'>
            <Image src={Logo} alt='snapchat-logo' width={50} height={50}/>
            <Input type='text' placeholder='Search' className='rounded-full' />
        </div>
        <div>
            <Button variant={"ghost"}>Stories</Button>
            <Button variant={"ghost"}>Spotlight</Button>
            <Button variant={"ghost"}>Chat</Button>
            <Button variant={"ghost"}>Lenses</Button>
        </div>
        <div className='flex items-center gap-5'>
            <Button size={"icon"} variant={"secondary"} className="rounded-full bg-white text-black">
                <TbGridDots/>
            </Button>
            <Button className='rounded-full'>Snapchat App</Button>
            <Button className='rounded-full'>Download</Button>
            {authUser? (

                <LogoutButton/>
            ):(
                <Link href={"/login"}><Button className='rounded-full'>Login</Button></Link>
            )
            }
        </div>
    </div>
    
    
    </>
  )
}

export default Navbar