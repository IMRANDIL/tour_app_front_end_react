import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        error: '',
        loading: false
    }
});



export const login = createAsyncThunk('auth/login', async () => {
    try {

    } catch (error) {
        console.log(error);
    }
})


export default authSlice.reducer;