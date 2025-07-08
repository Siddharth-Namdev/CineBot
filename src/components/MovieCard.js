import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-[150px] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 ease-out hover:scale-175 cursor-pointer">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="movie-poster"
        className="w-full h-[225px] object-cover"
      />
    </div>
  );
};

export default MovieCard;
