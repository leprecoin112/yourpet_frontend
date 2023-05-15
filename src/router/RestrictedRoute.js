import { Navigate } from 'react-router-dom';
import { useAuth } from '../shared/hooks/useAuth';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = false;
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
