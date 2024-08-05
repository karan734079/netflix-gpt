import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import genAI from "../utils/gemini";
import { generationConfig } from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const geminiQuery =
      "Act as a Movie Recommendation System and suggest exactly five movies based on the following query:" + searchText.current.value + ". Only provide the movie titles in a comma-separated list format: MOVIE1,MOVIE2,MOVIE3,MOVIE4,MOVIE5. Do not include any additional text or line breaks.";

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(geminiQuery);
    const text = result.response.text();
    const arrayText = text.split(",");

    const promiseArray = arrayText.map((movie) => searchMovieTmdb(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: arrayText, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-44 flex justify-center ">
      <form
        className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-12 gap-4 bg-black rounded-lg p-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 col-span-1 sm:col-span-9 rounded-md w-full text-black"
        />
        <button
          className="py-2 px-4 bg-red-700 hover:bg-red-600 rounded-md text-white col-span-1 sm:col-span-3 w-full"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
