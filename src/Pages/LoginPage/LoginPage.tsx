import './styles.css'
import 'react-toastify/dist/ReactToastify.css'

import React, { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { Button, TextField } from '@mui/material'
import useUserStore from '../../Stores/UserStore.ts'
import { IErrorResponse } from '../../common/interfaces/error-response.interface.ts'

const LoginPage: React.FC = () => {
  const email = useUserStore((state) => state.email)
  const password = useUserStore((state) => state.password)
  const setEmail = useUserStore((state) => state.setEmail)
  const setPassword = useUserStore((state) => state.setPassword)
  const sendData = useUserStore((state) => state.sendData)
  const navigate = useNavigate()

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      await sendData(email, password)

      return navigate('/')
    } catch (error) {
      console.log(error)

      if (error instanceof AxiosError) {
        const errorResponse = error.response?.data as IErrorResponse
        toast.error(errorResponse.message)
      }
    }
  }

  return (
    <div className="container">
      <div className="inner-container">
        <h2 className="label">Login</h2>
        <form className="form-container" onSubmit={handleSubmitForm}>
          <div className="input-margin">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-margin">
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" variant="contained">
            Login
          </Button>
          <Button>Is not a member? Register here</Button>
        </form>
      </div>
      <ToastContainer position={'top-right'} />
    </div>
  )
}

export default LoginPage
