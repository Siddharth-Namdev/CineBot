import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-md underline underline-offset-4 decoration-pink-500">
        {title}
      </h2>

      <div className="flex overflow-x-auto gap-4 no-scrollbar pb-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
