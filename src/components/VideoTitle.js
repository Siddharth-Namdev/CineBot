import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute mt-[15%]  px-10 pt-24 bg-gradient-to-r from-black/80 via-slate-800/5 to-transparent text-white">
      <div className="w-1/2">
        <h1 className="text-6xl font-extrabold  mb-6">{title}</h1>
        <p className="text-lg text-gray-200 mb-8">{description}</p>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-opacity-70 transition duration-300 hover:scale-105">
            <FaPlay />
            Play
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/20 font-semibold rounded-xl hover:bg-white/30 transition duration-300 hover:scale-105">
            <FaInfoCircle />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;


