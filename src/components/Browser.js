import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer";

const Browser = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>

        
      {/*
          Maincontainer -> video
              - viderBackground
              - videoTitle
          SecondaryContainer -> lists
              -MoviesLists
              -cards
      */}
    </div>
  );
};

export default Browser;
