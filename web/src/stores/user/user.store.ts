import { api } from '@/lib/api'
import { create } from 'zustand'

interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  picture: string
}

interface UserState {
  user: User
}

interface UserAction {
  updateUser: (token: string) => Promise<void>
}

export const useUserStore = create<UserState & UserAction>((set) => ({
  user: {
    id: '',
    email: '',
    first_name: '',
    last_name: '',
    picture: '',
  },
  updateUser: async (token: string) => {
    const { data } = await api.get<User>('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    set((state) => ({ ...state, user: { ...data } }))
  },
}))
