import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackGround = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useTrailerVideo(movieId);

  return (
    <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=true&mute=true`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;

