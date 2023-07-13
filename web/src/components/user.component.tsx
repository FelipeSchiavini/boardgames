'use client'

import { useUserStore } from '@/stores/user/user.store'
import { User } from 'lucide-react'
import { signIn, useSession, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
export const UserComponent = () => {
  const { user, updateUser } = useUserStore((state) => state)
  console.log('🚀 ~ file: user.component.tsx:10 ~ UserComponent ~ user:', user)
  const { data: session } = useSession()
  console.log(
    '🚀 ~ file: user.component.tsx:11 ~ UserComponent ~ session:',
    session,
  )
  useEffect(() => {
    console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀')
    const a = async () => {
      const token = Cookies.get('token')
      if (token) {
        updateUser(token)
      }
    }
    a()
  }, [session])

  return (
    <div className="flex cursor-pointer flex-row items-center space-x-4 hover:opacity-60">
      <button onClick={() => signIn('google')}>
        {session ? session.user?.name : 'criar conta'}
      </button>
      <button onClick={() => signOut()}>sair</button>
      <div className="inline-block flex h-8 w-8 items-center justify-center rounded-full bg-gray-400">
        <User className="h-5 w-5 text-gray-500" />
        {/* <ShoppingCart className="h-5 w-5 text-gray-500" /> */}
      </div>
    </div>
  )
}
