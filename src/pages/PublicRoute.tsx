import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface IPublicRoute {
  authed: boolean
}

export const PublicRoute: FC<IPublicRoute> = ({ authed }) => (
  !authed ? <Outlet /> : <Navigate to='/' replace />
);

export default PublicRoute;
