import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1", // fetch data from TMDB API
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addUpcomingMovies(json.results)); // we put json.results (Movies) inside my store
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
