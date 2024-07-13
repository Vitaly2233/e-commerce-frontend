import { create } from 'zustand'
import { loginUser } from '../Requests'

type UserStore = {
  id?: number
  email: string
  password: string
  token?: string

  setId: (id: number) => void
  setEmail: (email: string) => void
  setPassword: (password: string) => void
  sendData: (email: string, password: string) => Promise<void>
  setToken: (token?: string) => void
}

const useUserStore = create<UserStore>((set) => ({
  id: undefined,
  email: '',
  password: '',
  token: '',

  setId: (id) => set({ id }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setToken: (token) => set({ token }),
  sendData: async (email: string, password: string) => {
    const response = await loginUser({
      email,
      password,
    })
    const token: string = response.data.token

    set(() => ({ email: '', password: '', token }))
  },
}))

export default useUserStore
