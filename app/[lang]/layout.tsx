"use client"
import '../css/globals.css'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LoginButton from '@/app/[lang]/components/LoginButton'
// import { SessionProvider } from '@/app/[lang]/components/SessionProvider'
import LogoutButton from '@/app/[lang]/components/LogoutButton'
import { SessionProvider } from 'next-auth/react'
import Header from '../[lang]/header'
import LocaleSwitcher from './components/locale-switcher'


export default function RootLayout({ children }:{ children: React.ReactNode}) {
  // const session = await getServerSession(authOptions).then((item)=>{console.log({item}); return item})

  
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider >
          <Header/>
          <LocaleSwitcher/>
          {/* {!session ?
            <>
              <LoginButton />
            </>
            :
            <>
              <LogoutButton />
            </>
          } */}
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
