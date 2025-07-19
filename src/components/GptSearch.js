import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { BACKGROUND_IMAGE } from "../utils/constant";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          className="w-full h-full object-cover brightness-75"
          src={BACKGROUND_IMAGE}
          alt="background"
        />
      </div>

      {/* Overlay Content */}
      <div className="flex flex-col items-center pt-28 px-4 mt-[60px] md:px-16">
        <GptSearchBar />
        <GptMoviesSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
