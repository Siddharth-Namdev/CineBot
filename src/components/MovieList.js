import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-4 md:px-0">
      <h1 className="text-xl md:text-3xl font-bold text-white mb-4 drop-shadow-md">
        {title}
      </h1>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-scroll no-scrollbar space-x-4 pb-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
