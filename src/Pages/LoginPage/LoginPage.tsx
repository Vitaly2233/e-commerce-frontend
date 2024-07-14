import './styles.css'
import { Button, TextField } from '@mui/material'
import useUserStore from '../../Stores/UserStore.ts'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { IErrorResponse } from '../../common/interfaces/error-response.interface.ts'
import React, { FormEvent } from 'react'

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

      return navigate('/home')
    } catch (error) {
      console.log(error)

      if (error instanceof AxiosError) {
        const errorResponse = error.response?.data as IErrorResponse
        alert(errorResponse.message)
      }
    }
  }

  return (
    <div className="container">
      <div className="inner-container">
        <h2 className="label">Login</h2>
        <form onSubmit={handleSubmitForm}>
          <div className="textFieldMargin">
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
          <div className="textFieldMargin">
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
        </form>
      </div>
    </div>
  )
}

export default LoginPage
