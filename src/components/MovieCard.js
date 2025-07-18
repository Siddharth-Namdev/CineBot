import { IMG_CDN_URL } from "../utils/constant";

import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  if (!movie || movie.length === 0) return null;

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="w-36 md:w-48 cursor-pointer transform hover:scale-105 transition-all duration-300">
        {movie?.poster_path && (
          <img
            className="rounded-lg shadow-md"
            src={IMG_CDN_URL + movie.poster_path}
          />
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
