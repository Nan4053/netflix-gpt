import { FaPlay } from "react-icons/fa";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-4 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-4 text-sm w-1/4">{overview}</p>
      <div className="flex my-2 md:m-0">
        <button className=" flex bg-white text-black py-1 md:py-2 px-3 md:px-10 text-sm  rounded-lg hover:bg-opacity-80">
        <FaPlay /> Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-2 px-10 text-sm bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
