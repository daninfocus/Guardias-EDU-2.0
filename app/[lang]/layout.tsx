"use client"
import '../css/globals.css'
import { SessionProvider } from 'next-auth/react'
import Header from '../[lang]/header'
import LocaleSwitcher from './components/locale-switcher'


export default function RootLayout({ children }:{ children: React.ReactNode}) {

  
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
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
