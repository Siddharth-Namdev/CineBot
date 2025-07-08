import { useSelector } from "react-redux";
import useMovietraller from "../hooks/useMovieTraller";

const VideoBackground = ({ movieId }) => {
  const traller = useSelector((store) => store.movies?.nowPlayingTraller); // fetch playing traller from moviesSlice
  useMovietraller(movieId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          traller?.key +
          "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          traller?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
