import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/backend/auth/authApi';
import { authReducer } from './api/backend/auth/authSlice';
import { newsApi } from './api/backend/news/newsApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    auth: authReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    newsApi.middleware,
  ],
});
