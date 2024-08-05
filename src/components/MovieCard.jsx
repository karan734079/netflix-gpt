import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath){
    return null;
  }
  return (
    <div className="w-44 pr-2">
      <img
        alt="Movie Card"
        src={posterPath ? IMG_CDN_URL + posterPath : 'https://via.placeholder.com/150'} // Fallback image if posterPath is missing
        className="rounded-md"
      />
    </div>
  );
};

export default MovieCard;
