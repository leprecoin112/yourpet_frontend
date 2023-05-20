import { useSelector } from "react-redux";

import { isAuth } from '../../../redux/auth/auth-selectors';

const useAuth = () => {
    const result = useSelector(isAuth);
    return result;
}

export default useAuth;



// Provides the status of authentication

// import { useSelector } from 'react-redux';
// import {
//   selectUser,
//   selectIsLoggedIn,
//   selectIsRefreshing,
// } from '../redux/auth/selectors';

// export const useAuth = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);
//   const user = useSelector(selectUser);

//   return {
//     isLoggedIn,
//     isRefreshing,
//     user,
//   };
// };
