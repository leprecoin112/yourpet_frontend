import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, current } from "./auth-operations";

const initialState = {
    email: "",
    token: "",
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
            // store.token = payload.token;
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
        store.token = payload.token;
        store.isLogin = true;
    },
    [login.rejected]: (store, {payload}) => {
        store.loading = false;
        store.error = payload;
    },
   
}
})
export default authSlice.reducer;