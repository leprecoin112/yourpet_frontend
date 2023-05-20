import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://yourpet-backend-jxa0.onrender.com/api';

export const fetchFriends = createAsyncThunk(
    'friends/fetchFriends',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/sponsors');
            return data.result;
            
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);