import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="w-full mt-8 bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-xl animate-fadeIn">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMoviesSuggestions;
