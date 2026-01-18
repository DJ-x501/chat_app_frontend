'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import useAuth from '@/store/authStore'
import Link from 'next/link'
import React from 'react'
import { FaSkull } from 'react-icons/fa6'

const page = () => {
    const {userObject,setUserObject,register} = useAuth();
  return (
     <div className='relative flex flex-col items-center w-full h-full justify-center px-24'>
            <Button variant='ghost' className={`absolute top-4 right-4 text-gray-400`}><Link href={"/"}>Home</Link></Button>
            <p className="text-primary flex gap-4 items-center font-bold text-4xl">
                          <FaSkull className="text-primary"/>
                          <span>WhisperNet </span>
                        </p>
            <p className='text-base font-medium text-gray-400 mt-2'>Join now—your identity stays hidden from everyone.</p>

<div className="flex flex-col px-12 mt-24 w-full">
     <div className="flex flex-col gap-1 w-full">
                <label htmlFor="name" className='font-medium text-gray-300'>Username</label>
                <Input placeholder="Enter username" type={"email"} className={`font-semibold w-full`} name="name" value={userObject.name} onChange={(e)=>setUserObject(e.target.name,e.target.value)}/>
            </div>
     <div className="flex flex-col gap-1 w-full mt-4">
                <label htmlFor="email" className='font-medium text-gray-300'>Email</label>
                <Input placeholder="Enter Email" type={"email"} className={`font-semibold w-full`} name="email" value={userObject.email} onChange={(e)=>setUserObject(e.target.name,e.target.value)}/>
            </div>
            <div className="flex flex-col gap-1 mt-4 w-full">
                <label htmlFor="password" className='font-medium text-gray-300'>Password</label>
                <Input placeholder="Enter password" type={"password"} className={`font-semibold w-full`} name="password" value={userObject.password} onChange={(e)=>setUserObject(e.target.name,e.target.value)}/>
            </div>
            <Button className={`font-semibold cursor-pointer text-lg mt-6 w-full`} onClick={register}>Register</Button>
            <p className='flex gap-1 items-center mt-2 text-center w-full justify-center'><span className='text-sm'>Don't have an account.</span>
            <Button variant='link' className={`cursor-pointer -ml-4`}><Link href={"/login"}>Login</Link></Button></p>
</div>
           
    </div>
  )
}

export default page