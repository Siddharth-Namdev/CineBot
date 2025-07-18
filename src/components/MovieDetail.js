import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constant";
import { motion } from "framer-motion";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}`,
        API_OPTIONS
      );
      const data = await res.json();
      setMovie(data);
    };

    const fetchCredits = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits`,
        API_OPTIONS
      );
      const data = await res.json();
      setCast(data.cast?.slice(0, 10)); // top 10 actors
    };

    fetchMovie();
    fetchCredits();
  }, [id]);

  if (!movie) return <div className="text-white p-8">Loading...</div>;

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white p-6 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to="/browser"
        className="text-indigo-400 hover:underline text-sm mb-4 block"
      >
        ← Back to Home
      </Link>

      <motion.div
        className="rounded-lg overflow-hidden shadow-xl relative max-w-7xl mx-auto"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div
          className="w-full h-64 md:h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-70 flex items-center justify-center md:justify-start p-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={IMG_CDN_URL + movie.poster_path}
                alt={movie.title}
                className="w-40 md:w-56 rounded-xl shadow-lg"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
                  {movie.title}
                </h1>
                <p className="text-gray-300 italic mb-2">{movie.tagline}</p>
                <p className="text-sm text-gray-400 mb-4">
                  📅 {movie.release_date} • ⏱ {movie.runtime} mins
                </p>
                <div className="flex gap-4 flex-wrap text-sm mb-4">
                  <span className="bg-pink-500/80 px-3 py-1 rounded-full text-white font-semibold">
                    ⭐ {movie.vote_average.toFixed(1)} / 10
                  </span>
                  <span className="bg-indigo-500/80 px-3 py-1 rounded-full text-white font-semibold">
                    🗳 {movie.vote_count} votes
                  </span>
                  <span className="bg-blue-500/80 px-3 py-1 rounded-full text-white font-semibold">
                    🎬 {movie.original_language.toUpperCase()}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {movie.genres?.map((genre) => (
                    <span
                      key={genre.id}
                      className="text-xs px-2 py-1 bg-white text-black rounded-full font-medium"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="bg-black/90 p-6 md:p-10 backdrop-blur-xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            📝 Overview
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">{movie.overview}</p>

          {/* Cast Section */}
          {cast.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                🎭 Cast
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {cast
                  .filter((actor) => actor.profile_path)
                  .map((actor) => (
                    <div key={actor.id} className="text-center">
                      <img
                        src={
                          actor.profile_path
                            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                            : "https://via.placeholder.com/200x300?text=No+Image"
                        }
                        alt={actor.name}
                        className="w-full h-48 object-cover rounded-md shadow"
                      />
                      <p className="mt-2 text-sm text-white font-semibold">
                        {actor.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        as {actor.character}
                      </p>
                    </div>
                  ))}
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MovieDetail;
