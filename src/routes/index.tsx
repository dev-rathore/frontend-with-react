import { useRoutes } from 'react-router-dom';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const isUserAuthenticated = () => {
    return false;
  }

  const routes = isUserAuthenticated() ? protectedRoutes : publicRoutes;
console.log(routes);

  const element = useRoutes([...routes, ...publicRoutes]);

  return <>{element}</>;
};
