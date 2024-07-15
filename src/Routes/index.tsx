import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage/LoginPage'
import Protected from './protected'
import { isAuthenticated } from './helpers'
import ProductsTab from '../Tabs/ProductsTab.tsx'
import OrdersTab from '../Tabs/OrdersTab.tsx'
import SidebarTabs from '../Tabs/SidebarTabs'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Protected />}>
        <Route path="/" element={<SidebarTabs />}>
          <Route path="products" element={<ProductsTab />} />
          <Route path="orders" element={<OrdersTab />} />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
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
