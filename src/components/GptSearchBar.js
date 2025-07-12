import { useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/GptSlice";
import { GEMINI_KEY } from "../utils/constant";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const ai = new GoogleGenAI({ apiKey: GEMINI_KEY });

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    //Make an API call to GPT API and get Movie Results

    const gptQuery =
      "act as a movie recomandation systerm and suggest somemovies fpr the query" +
      searchText?.current?.value +
      "only give me names of 5 movies comma seperated. Example : Gadar, sholay, Don , chup chup , koi mil gaya ";
    try {
      const gptResults = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: gptQuery,
      });

      const gptMovies = gptResults.text?.split(",");
      console.log(gptMovies);

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);

      console.log(tmdbResults);

      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );

      console.log(gptResults.text);
    } catch (error) {
      if (error.status === 429) {
        alert("You have exceeded your API quota. Please try again later.");
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder="What would you to like today"
        />
        <button
          className="bg-red-700 col-span-3 m-4 rounded-xl font-bold"
          onClick={handleGptSearchClick}
        >
          {" "}
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
