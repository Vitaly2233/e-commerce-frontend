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
}

const useUserStore = create<UserStore>((set, getState) => ({
  id: undefined,
  email: '',
  password: '',
  token: '',

  setId: (id) => set({ id }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  sendData: async () => {
    const state = getState()

    const response = await loginUser({
      email: state.email,
      password: state.password,
    })
    const token: string = response.data.token

    localStorage.setItem('token', token)

    set(() => ({ email: '', password: '', token }))
  },
}))

export default useUserStore
