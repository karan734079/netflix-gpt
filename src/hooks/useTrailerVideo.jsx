import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(store => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await response.json();
    const filterTrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
      !trailerVideo &&  getMovieVideos();
  
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
};

export default useTrailerVideo;
