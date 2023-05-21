import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { register, login, logout } from "./operations";

const initialState = {
   email: "",
   name: "",

  
    token: '',
    loading: false,
    error: null,
    isLogin: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers:{
        [register.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [register.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.email = payload.email;
            store.token = payload.token;
            store.isLogin = true;
        },
        [register.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [login.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [login.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.email = payload.email;
            store.name = payload.name;
            store.token = payload.token;
            store.isLogin = true;
        },
        [login.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [logout.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [logout.fulfilled]: (store) => {
            store.loading = false;
            store.user = {};
            store.token = "";
            store.isLogin = false;
        },
        [logout.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        }
    }
});
// export default authSlice.reducer;
// import { register, logIn, logOut, getCurrentUser } from './operations';

// const initialState = {
//     user: { name: null, email: null },
//     token: null,
//     isLoading: false,
//     error: null,
//     isLoggedIn: false,
//     isRefreshing: false,
// };

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     extraReducers: builder => {
//         //register
//         builder
//             .addCase(register.fulfilled, (state, { payload }) => {
//                 state.user = payload.user;
//                 state.token = payload.token;
//                 state.isLoggedIn = true;
//             })
//             .addCase(logIn.fulfilled, (state, { payload }) => {
//                 state.user = payload.user;
//                 state.token = payload.token;
//                 state.isLoggedIn = true;
//             })
//             .addCase(logOut.fulfilled, (state, { payload }) => {
//                 state.user = { name: null, email: null };
//                 state.token = null;
//                 state.isLoggedIn = false;
//                 state.isRefreshing = false;
//             })
//             .addCase(getCurrentUser.pending, state => {
//                 state.isRefreshing = true;
//             })
//             .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
//                 state.user = payload;
//                 state.isLoggedIn = true;
//                 state.isRefreshing = false;
//             })
//             .addCase(getCurrentUser.rejected, (state, { payload }) => {
//                 state.isRefreshing = false;
//                 state.token = null;
//             })
//             .addMatcher(
//                 isAnyOf(
//                     register.pending,
//                     logIn.pending,
//                     logOut.pending,
//                     getCurrentUser.pending
//                 ),
//                 state => {
//                     state.isLoading = true;
//                 }
//             )
//             .addMatcher(
//                 isAnyOf(
//                     register.fulfilled,
//                     logIn.fulfilled,
//                     logOut.fulfilled,
//                     getCurrentUser.fulfilled
//                 ),
//                 state => {
//                     state.isLoading = false;
//                     state.error = null;
//                 }
//             )
//             .addMatcher(
//                 isAnyOf(
//                     register.rejected,
//                     logIn.rejected,
//                     logOut.rejected,
//                     getCurrentUser.rejected
//                 ),
//                 (state, { payload }) => {
//                     state.isLoading = false;
//                     state.error = payload;
//                 }
//             );
//     },
// });

export const authReducer = authSlice.reducer;