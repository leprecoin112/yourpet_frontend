import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://your-pet-by-it-kotiki.onrender.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('/users/signup', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            const { code } = error.response.data;
            if (code === 11000)
                return rejectWithValue({
                    message: 'User with this email already exists.',
                });
            return rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/logIn',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('/users/login', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return rejectWithValue({ message: 'Email or password is incorrect.' });
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getCurrentUser = createAsyncThunk(
    'auth/currentUser',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const currentToken = state.auth.token;

        if (currentToken === null) return rejectWithValue('Unable to fetch user');

        try {
            setAuthHeader(currentToken);
            const response = await axios.get('/users/current');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);