import { configureStore } from "@reduxjs/toolkit";
import authReducer from './userSlice';

const appStore = configureStore({
    reducer:{
        auth: authReducer,
    },
});

export default appStore;