import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage/LoginPage'
import Protected from './protected'
import { isAuthenticated } from './helpers'
import ProductsTab from '../Tabs/ProductsTab.tsx'
import OrdersTab from '../Tabs/OrdersTab.tsx'
import SidebarTabs from '../Tabs/SidebarTabs'

const tabRoutes = ['/products', '/orders']

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Protected />}>
        <Route element={<SidebarTabs tabRoutes={tabRoutes} />}>
          <Route path={tabRoutes[0]} element={<ProductsTab />} />
          <Route path={tabRoutes[1]} element={<OrdersTab />} />
        </Route>
        <Route path="*" element={<Navigate to={tabRoutes[0]} />} />
      </Route>
      <Route path="/login" element={<LoginPage />} loader={isAuthenticated} />
      <Route path="*" element={<Navigate to={'/login'} />} />
    </Route>,
  ),
)

const Index = () => {
  return <RouterProvider router={router} />
}

export default Index
