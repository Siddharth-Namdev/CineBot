import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1", // fetch data from TMDB API
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addPopularMovies(json.results)); // we put json.results (Movies) inside my store
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
