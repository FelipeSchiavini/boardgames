'use client'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import logo from '../assets/logo.png'

export const Header = () => {
  return (
    <>
      <header className="flex h-20 max-h-96 w-full justify-center bg-gray-600 ">
        <div className="max-w-8xl flex w-full flex-row items-center justify-around align-middle">
          <div className="cursor-pointer hover:opacity-60">
            <Image alt="logo" src={logo} width={200} height={80} />
          </div>
          <div className="flex space-x-4 align-middle">
            {/* <Body>Opção 1</Body>
            <Body>Opção 2</Body>
            <Body>Opção 3</Body> */}
          </div>
          <div className="flex cursor-pointer flex-row items-center space-x-4 hover:opacity-60">
            <button onClick={() => signIn('google')}>criar conta</button>
            <div className="inline-block flex h-8 w-8 items-center justify-center rounded-full bg-gray-400">
              {/* <User className="h-5 w-5 text-gray-500" /> */}
              <ShoppingCart className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
