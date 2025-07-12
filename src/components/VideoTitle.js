import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute top-[25%] left-0 px-12 md:px-20 pt-16 bg-gradient-to-r from-black/90 via-black/10 to-transparent w-1/2 text-white z-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-4xl font-extrabold mb-6 leading-tight drop-shadow-xl">
          {title}
        </h1>
        <p className="text-sm md:text-lg text-gray-200 mb-8 drop-shadow-md line-clamp-4">
          {description}
        </p>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-opacity-80 hover:scale-105 transition duration-300 shadow-lg">
            <FaPlay />
            Play
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 hover:scale-105 transition duration-300 shadow-md backdrop-blur-sm">
            <FaInfoCircle />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
