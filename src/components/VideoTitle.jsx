const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[14%] px-12 w-full h-screen absolute text-white bg-gradient-to-tr from-black ">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-md py-6 w-1/4">{overview}</p>
      <div className="flex space-x-2">
        <button className="bg-white bg-opacity-80 px-5 py-2 rounded-md flex items-center hover:bg-opacity-60 transition duration-200">
          <img
            className="w-6 h-6 mr-2"
            src="https://cdn-icons-png.flaticon.com/128/27/27223.png"
            alt="Play Icon"
          />
          <p className="text-xl pb-[4px] font-bold text-black">Play</p>
        </button>

        <button className="bg-white bg-opacity-20 px-5 py-2 rounded-md flex items-center hover:bg-opacity-30 transition duration-200">
          <img
            className="w-6 h-6 mr-1"
            src="https://static.vecteezy.com/system/resources/thumbnails/022/488/758/small_2x/3d-information-icon-isolated-on-transparent-background-file-png.png"
            alt="Information Icon"
          />
          <p className="text-xl pb-[4px] font-bold text-white">More Info</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
