// in this file , we store our all movies data
import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTraller:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPlayingTraller:(state,action)=>{
            state.nowPlayingTraller=action.payload;
        }
    },
});

export const {addNowPlayingMovies,addPlayingTraller} = movieSlice.actions;

export default movieSlice.reducer;