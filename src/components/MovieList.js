import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 py-4">
      <h1 className="text-2xl font-bold text-white mb-3">{title}</h1>

      {/* Horizontal scroll container */}
      <div className="flex overflow-x-auto overflow-y-hidden space-x-4 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
