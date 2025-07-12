import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE } from "../utils/constant";
import GptMoviesSuggestions from "./GptMoviesSuggestions";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="" src={BACKGROUND_IMAGE} />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default GptSearch;
