'use client'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'

const LogoutButton = () => {
  return (
    <div className="text-white cursor-pointer bg-[#ea4d62] hover:bg-[#ea4d62]/90 focus:ring-4 focus:outline-none focus:ring-[#9e3341]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
      <button onClick={()=> signOut()}>Logout</button>
    </div>
  )
}

export default LogoutButton