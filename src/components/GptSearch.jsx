import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BackgroundImage } from "../utils/constants";

const GptSearch = () => {
  return (
    <div style={{
      backgroundImage: `${BackgroundImage}`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width: "100%",
      position: "relative",
    }}>
      <GptSearchBar /> 
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch;
