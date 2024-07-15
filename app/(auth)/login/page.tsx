import { signIn } from '@/auth'
import Login from '@/components/Login/Login'
import React from 'react'

const LoginPage = () => {
  const loginHandlder=async()=>{
    "use server"
    await signIn("github")
  }
  return (
    <>
    <form action={loginHandlder}>
        <Login/>
    </form>
    
    </>
  )
}

export default LoginPage