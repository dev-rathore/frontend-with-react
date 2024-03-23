import {
  AppLayout,
  Dashboard,
  Four0Four,
} from '../pages';
import {
  routes,
} from './routes';

export const protectedRoutes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: routes.DASHBOARD,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '*',
    element: <Four0Four />,
  },
];
