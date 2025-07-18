import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, description }) => {
  return (
    //<div className="absolute top-[20%] left-0 px-6 sm:px-10 md:px-16 lg:px-20 pt-10 sm:pt-14 md:pt-16 bg-gradient-to-r from-black/90 via-black/10 to-transparent w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-white z-20">
    <div className="absolute top-[10%] md:top-[25%] left-0 px-4 md:px-20 pt-12 bg-gradient-to-r from-black/90 via-black/10 to-transparent w-full md:w-1/2 text-white z-20">
      <div className="max-w-2xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 leading-snug sm:leading-tight drop-shadow-xl">
          {title}
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mb-6 sm:mb-8 drop-shadow-md line-clamp-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <button className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black font-semibold rounded-lg hover:bg-opacity-80 hover:scale-105 transition duration-300 shadow-lg">
            <FaPlay />
            Play
          </button>
          <button className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 hover:scale-105 transition duration-300 shadow-md backdrop-blur-sm">
            <FaInfoCircle />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
