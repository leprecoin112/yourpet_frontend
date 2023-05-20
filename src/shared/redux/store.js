import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/backend/auth/authApi';
import { authReducer } from './api/backend/auth/authSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
  ],
});
