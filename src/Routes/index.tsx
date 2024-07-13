import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from '../Pages/Home/HomePage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import Protected from './protected'
import { isAuthenticated } from './helpers'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Protected />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} loader={isAuthenticated} />
      <Route path="*" element={<Navigate to={'/login'} />} />
    </Route>
  )
)

const Index = () => {
  return <RouterProvider router={router} />
}

export default Index
