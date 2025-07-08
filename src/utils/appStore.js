import { configureStore } from "@reduxjs/toolkit";
import authReducer from './userSlice';
import moviesReducer from './moviesSlice'

const appStore = configureStore({
    reducer:{
        auth: authReducer,
        movies:moviesReducer
    },
});

export default appStore;