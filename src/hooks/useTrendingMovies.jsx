import { API_OPTIONS } from "../utils/constants";
import { useDispatch ,useSelector} from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const trendingMovies = useSelector(store => store.movies.trendingMoviesMovies);

    const getTrendingMovies = async () => {
      const data = await fetch(
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addTrendingMovies(json.results));
    };
    useEffect(() => {
     !trendingMovies && getTrendingMovies();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useTrendingMovies;
