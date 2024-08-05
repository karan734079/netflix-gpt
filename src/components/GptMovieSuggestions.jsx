import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector(store => store.gpt);

  if (!movieNames || movieNames.length === 0 || !movieResults || movieResults.length === 0) {
    return null;
  }

  const flattenedMovies = movieResults.flat();

  const uniqueMovies = Array.from(new Map(flattenedMovies.map(movie => [movie.id, movie])).values());

  if (uniqueMovies.length === 0) {
    return null;
  }

  return (
    <div className="relative h-screen w-full bg-black bg-opacity-70 text-white overflow-hidden mt-3">
      <div className="absolute inset-0 p-6 flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 max-w-full max-h-full overflow-hidden overflow-y-auto scroll-hide">
          {uniqueMovies.map((movie) => (
            <div
              key={movie.id}
              className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden group scroll-hide"
              style={{ width: '180px', height: '230px' }}
            >
              <img
                src={`${IMG_CDN_URL}${movie.poster_path}`}
                alt={movie.title}
                className="absolute inset-0  object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-2 bg-gradient-to-t from-black to-transparent">
                <h2 className="text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-white truncate">{movie.title}</h2>
                <p className="text-xs sm:text-sm md:text-md text-gray-400">{movie.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptMovieSuggestions;

