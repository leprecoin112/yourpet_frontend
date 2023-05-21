import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../shared/hooks/useAuth';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    <Navigate state={{ from: location.pathname }} to={redirectTo} />
  ) : (
    Component
  );
};
