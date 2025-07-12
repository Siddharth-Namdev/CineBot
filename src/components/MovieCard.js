import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-[120px] md:min-w-[160px] lg:min-w-[180px] rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-150 cursor-pointer bg-zinc-900 hover:shadow-2xl">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="movie-poster"
        className="w-full h-[180px] md:h-[240px] object-cover rounded-xl"
      />
    </div>
  );
};

export default MovieCard;
