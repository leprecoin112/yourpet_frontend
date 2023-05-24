import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.accessToken;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(authApi.endpoints.refresh.matchPending, state => {
        state.isRefreshing = true;
      })
      .addMatcher(authApi.endpoints.refresh.matchFulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addMatcher(authApi.endpoints.refresh.matchRejected, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addMatcher(authApi.endpoints.logout.matchRejected, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addMatcher(authApi.endpoints.logout.matchFulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      });
  },
});

export const { setCredentials } = authSlice.actions;

export const authReducer = authSlice.reducer;
