import {lazy} from 'react'

const AppRoutes = [
    {
        path: ['/', '/j-manager'],
        exact: true,
        component: lazy(() => import('src/views/Home'))
    },
    {
        path: '/dashboard',
        component: lazy(() => import('src/views/Dashboard'))
    },
    {
        path: '/log',
        component: lazy(() => import('src/views/TradingLog'))
    },
]
export default AppRoutes;
