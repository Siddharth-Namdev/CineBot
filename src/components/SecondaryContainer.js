import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SeconaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  //console.log(movies);
  return (
    <div className="relative -mt-40 z-20 bg-gradient-to-b from-black via-zinc-900 to-black pb-10">
      <div className="pl-4 md:pl-12 space-y-8">
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
