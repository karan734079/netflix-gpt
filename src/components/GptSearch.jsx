import React from 'react';
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BackgroundImage } from "../utils/constants";

const GptSearch = () => {
  return (
    <div
  className="relative h-full w-full bg-black bg-opacity-50"
  style={{
    backgroundImage: `${BackgroundImage}`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh", 
    position: "fixed", 
  }}
>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
