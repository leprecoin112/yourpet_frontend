import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/backend/auth/authApi';
import { authReducer } from './api/backend/auth/authSlice';
import { newsApi } from './api/backend/news/newsApi';
import { userApi } from './api/backend/user/userApi';
import { noticesApi } from './api/backend/notices/noticesApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authReducer,
    [noticesApi.reducerPath]: noticesApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    newsApi.middleware,
    userApi.middleware,
    noticesApi.middleware,
  ],
});
