// fetch traller videoes and updating the store with traller video data

import { useDispatch } from "react-redux";
import { addPlayingTraller } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useMovietraller = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailler = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json); // all these data is come from above link

    // we have many type of movie list , but we want thoe whoes type is traller
    const trallerList = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const playingTraller = trallerList ? trallerList[0] : json.results[0]; //this a handle case when we have no movie which type is traller
    //console.log(playingTraller);
    dispatch(addPlayingTraller(playingTraller)); // we store our playing traller in movieSlice and fetch when we have needed
  };

  useEffect(() => {
    getMovieTrailler();
  });
};

export default useMovietraller;
