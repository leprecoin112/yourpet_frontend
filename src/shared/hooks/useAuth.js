import { useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/api/backend/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectCurrentUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
