import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../api'






const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        error: '',
        loading: false
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.loading = true
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
            state.user = action.payload;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
});



export const login = createAsyncThunk('auth/login', async ({ formValue, navigate, toast }) => {
    try {

        const response = await api.signIn(formValue);
        console.log(response);
        toast.success('Login successful');
        navigate('/');
        return response.data;



    } catch (error) {
        console.log(error);
    }
})


export default authSlice.reducer;