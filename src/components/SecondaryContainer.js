import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SeconaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  //console.log(movies);
  return (
    <div className="bg-black">
      {" "}
      <div className="pl-8 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.nowPopularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SeconaryContainer;
