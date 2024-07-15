import { signIn } from '@/auth';
import Register from '@/components/Register/Register';
import React from 'react'

const RegisterPage = () => {
  // inline function level
  const registerHandler=async ()=>{
    "use server"
    await signIn("github")
  }
  return (
    <>
    <form action={registerHandler}>
    <Register/>
    </form>
    
    </>
  )
}

export default RegisterPage;