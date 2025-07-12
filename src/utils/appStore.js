import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./GptSlice";

const appStore = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
