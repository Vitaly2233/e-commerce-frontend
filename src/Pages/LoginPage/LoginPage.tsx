import './styles.scss'
import { Button, TextField } from '@mui/material'
import useUserStore from '../../Stores/UserStore.ts'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { IErrorResponse } from '../../common/interfaces/error-response.interface.ts'
import React from 'react'

const LoginPage: React.FC = () => {
  const email = useUserStore((state) => state.email)
  const password = useUserStore((state) => state.password)
  const setEmail = useUserStore((state) => state.setEmail)
  const setPassword = useUserStore((state) => state.setPassword)
  const sendData = useUserStore((state) => state.sendData)
  const navigate = useNavigate()

  const handleSubmitForm = async () => {
    try {
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
        <div className="textFieldMargin">
          <TextField
            className="textFieldMargin"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </div>
        <div className="textFieldMargin">
          <TextField
            className="textFieldMargin"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </div>
        <Button onClick={handleSubmitForm} variant="contained">
          Login
        </Button>
      </div>
    </div>
  )
}

export default LoginPage
