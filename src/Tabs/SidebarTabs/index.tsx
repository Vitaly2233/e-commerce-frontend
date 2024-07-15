import React, { useEffect } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

const Index: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname
  const routes = ['/products', '/orders']
  console.log(path)
  useEffect(() => {
    if (!routes.includes(path)) {
      navigate(routes[0])
    }
  })

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Tabs
        orientation={'vertical'}
        value={path}
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          bgcolor: 'primary.light',
          minWidth: '200px',
          height: '100vh',
        }}
      >
        <Tab label="Products" value={routes[0]} component={Link} to={routes[0]} />
        <Tab label="Orders" value={routes[1]} component={Link} to={routes[1]} />
      </Tabs>
      <div>
        <Outlet />
      </div>
    </Box>
  )
}

export default Index
