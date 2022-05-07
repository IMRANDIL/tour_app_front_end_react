import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../api'






const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        error: '',
        loading: false
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