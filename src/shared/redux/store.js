import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/backend/auth/authApi';
import { authReducer } from './api/backend/auth/authSlice';
import { newsApi } from './api/backend/news/newsApi';
import { userApi } from './api/backend/user/userApi';
import { sponsorsApi } from './api/backend/sponsors/sponsorsApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [sponsorsApi.reducerPath]: sponsorsApi.reducer,
    auth: authReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    newsApi.middleware,
    userApi.middleware,
    sponsorsApi.middleware,
  ],
});
