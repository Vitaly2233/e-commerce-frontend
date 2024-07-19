import { Box, Tab, Tabs } from '@mui/material'
import { Link, Outlet, useLocation } from 'react-router-dom'

type Props = {
  tabRoutes: string[]
}

const Index = ({ tabRoutes }: Props) => {
  const location = useLocation()
  const path = location.pathname

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
        <Tab label="Products" value={tabRoutes[0]} component={Link} to={tabRoutes[0]} />
        <Tab label="Orders" value={tabRoutes[1]} component={Link} to={tabRoutes[1]} />
      </Tabs>
      <div>
        <Outlet />
      </div>
    </Box>
  )
}

export default Index
