import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="relative z-20 -mt-36 px-4 sm:px-6 md:px-8 bg-black">
      <div className="bg-black py-4">
        {/* Now Playing */}
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        {/* Trending */}
        <MovieList title="Trending" movies={movies.trendingMovies} />
        {/* Popular */}
        <MovieList title="Popular" movies={movies.popularMovies} />
        {/* Upcoming Movies */}
        <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
        {/* Top Rated */}
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
