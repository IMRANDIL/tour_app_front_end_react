import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../api'









export const login = createAsyncThunk('auth/login', async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {

        const response = await api.signIn(formValue);
        console.log(response);
        toast.success('Login successful');
        navigate('/');
        return response.data;



    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});






export const register = createAsyncThunk('auth/register', async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {

        const response = await api.signUP(formValue);
        console.log(response);
        toast.success('Registration successful');
        navigate('/');
        return response.data;



    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});



const user = localStorage.getItem('user');



const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: user ? user : null,
        error: '',
        loading: false
    },
    reducers: {
        reset: (state) => {
            state.error = '';
            state.loading = false;

        }
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.loading = true;

        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.setItem('user', JSON.stringify({ ...action.payload }));
            state.user = action.payload;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.payload.message;
        },
        [register.pending]: (state, action) => {
            state.loading = true;

        },
        [register.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
            state.user = action.payload;
        },
        [register.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
});


export const { reset } = authSlice.actions;

export default authSlice.reducer;