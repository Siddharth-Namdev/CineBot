import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  // useSelector is use fetch data from store , we fetch movies from our store
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  //console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
