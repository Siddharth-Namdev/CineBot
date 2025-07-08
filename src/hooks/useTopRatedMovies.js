import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedmovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1", // fetch data from TMDB API
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addTopRatedmovies(json.results)); // we put json.results (Movies) inside my store
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
