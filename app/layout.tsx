import './css/globals.css'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LoginButton from '@/app/[lang]/components/LoginButton'
import { SessionProvider } from '@/app/[lang]/components/SessionProvider'
import LogoutButton from '@/app/[lang]/components/LogoutButton'


export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const session = await getServerSession(authOptions).then((item)=>{console.log({item}); return item})

  
  return (
    <html lang={params.lang}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ?
            <>
              <pre>{JSON.stringify(session, null, 2)}</pre>
              <LoginButton />{children}
            </>
            :
            <>
              <pre>{JSON.stringify(session, null, 2)}</pre>
              <LogoutButton />
              {children}
            </>
          }
          
        </SessionProvider>
      </body>
    </html>
  )
}
