import { useState, useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import { API_OPTIONS, GEMINI_KEY } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/GptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const ai = new GoogleGenAI({ apiKey: GEMINI_KEY });
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const gptQuery =
      "Act as a movie recommendation system and suggest 5 movies for this query: " +
      searchText?.current?.value +
      ". Return comma-separated movie names only. Example: Gadar, Sholay, Don, Chup Chup Ke, Koi Mil Gaya";

    try {
      const gptResults = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: gptQuery,
      });

      const gptMovies = gptResults.text?.split(",").map((m) => m.trim());
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      if (error.status === 429) {
        alert("API quota exceeded. Try later.");
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl w-full max-w-3xl shadow-xl border border-white/20 transition-all duration-300"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <input
          ref={searchText}
          className="flex-1 px-4 py-3 rounded-xl text-black placeholder-gray-500 focus:outline-none font-medium"
          type="text"
          placeholder="What do you want to watch today?"
        />
        <button
          onClick={handleGptSearchClick}
          className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-200"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-t-white border-red-500 rounded-full animate-spin"></span>
              Loading...
            </span>
          ) : (
            "Search"
          )}
        </button>
      </div>
    </form>
  );
};

export default GptSearchBar;
