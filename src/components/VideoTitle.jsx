const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center p-4 md:p-8 bg-gradient-to-tr from-black to-transparent text-white">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 lg:w-1/2 -mx-[170px]">{title}</h1>

   
      <p className="text-sm md:text-md mb-6 w-full md:w-3/4 lg:w-1/2 text-left">{overview}</p>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <button className="bg-white bg-opacity-80 px-4 py-2 rounded-md flex items-center hover:bg-opacity-60 transition duration-200">
          <img
            className="w-5 h-5 mr-2"
            src="https://cdn-icons-png.flaticon.com/128/27/27223.png"
            alt="Play Icon"
          />
          <p className="text-sm md:text-xl font-bold text-black">Play</p>
        </button>

        <button className="bg-white bg-opacity-20 px-4 py-2 rounded-md flex items-center hover:bg-opacity-30 transition duration-200">
          <img
            className="w-5 h-5 mr-1"
            src="https://static.vecteezy.com/system/resources/thumbnails/022/488/758/small_2x/3d-information-icon-isolated-on-transparent-background-file-png.png"
            alt="Information Icon"
          />
          <p className="text-sm md:text-xl font-bold text-white">More Info</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
