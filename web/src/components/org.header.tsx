'use client'
import Image from 'next/image'
import logo from '../assets/logo.png'
import { UserComponent } from './user.component'

export const Header = () => {
  return (
    <>
      <header className="flex h-20 max-h-96 w-full justify-center bg-gray-600 ">
        <div className="max-w-8xl flex w-full flex-row items-center justify-around align-middle">
          <div className="cursor-pointer hover:opacity-60">
            <Image alt="logo" src={logo} width={200} height={80} />
          </div>
          <UserComponent />
        </div>
      </header>
    </>
  )
}
