import { Navigate, Outlet } from 'react-router-dom'
import { setUpTokenToAxios } from '../Requests'

const Protected = () => {
  const token = localStorage.getItem('token')

  if (token) {
    setUpTokenToAxios(token)
  }

  return token ? <Outlet /> : <Navigate to="/login" />
}

export default Protected
