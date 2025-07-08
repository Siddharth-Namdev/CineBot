// in this file , we store our all movies data
import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    nowPopularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    nowPlayingTraller: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },
    addTopRatedmovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addPlayingTraller: (state, action) => {
      state.nowPlayingTraller = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPlayingTraller,
  addPopularMovies,
  addTopRatedmovies,
  addUpcomingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
