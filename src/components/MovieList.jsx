import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (movies === null) return;

  return (
    <div className="px-8">
      <h1 className="text-2xl py-3 text-white">{title}</h1>
      <div className="flex overflow-hidden overflow-x-scroll scroll-hide">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
