'use client'
import { User } from 'lucide-react'
import { Body, H2 } from './atm.typography.component'
import { useSession, signIn } from 'next-auth/react'

export const Header = () => {
  const { data: session } = useSession()
  console.log('🚀 ~ file: org.header.tsx:8 ~ Header ~ session:', session)

  return (
    <>
      <header className="flex h-12 max-h-80 w-full justify-center bg-gray-600 ">
        <div className="max-w-8xl flex w-full flex-row items-center justify-around align-middle">
          <div className="cursor-pointer hover:opacity-60">
            <H2>BoardGames Logo</H2>
          </div>
          <div className="flex space-x-4 align-middle">
            <Body>Opção 1</Body>
            <Body>Opção 2</Body>
            <Body>Opção 3</Body>
          </div>
          <div className="flex cursor-pointer flex-row items-center space-x-4 hover:opacity-60">
            <Body> criar conta </Body>
            <button onClick={() => signIn('google')}>TESTE</button>
            <div className="inline-block flex h-8 w-8 items-center justify-center rounded-full bg-gray-400">
              <User className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
