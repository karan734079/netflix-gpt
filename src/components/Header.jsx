import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import useAuthenticationHandle from "../hooks/useAuthenticationHandle";
import { toogleSearchGptMovie } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  }

  useAuthenticationHandle();

  const handleGptSearch = () => {
    dispatch(toogleSearchGptMovie());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && <select className="p-1  bg-black text-white m-2 rounded-md" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option className="text-white" key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))} 
          </select>}
          <button
            className="bg-red-700 px-6 m-3 rounded-md text-white font-bold text-lg hover:bg-red-800"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Back To Home" : "GPT Search"}
          </button>
          <img
            className="h-12 w-12 my-2 rounded-full"
            src={user.photoUrl}
            alt="usericon"
          />
          <button
            onClick={handleSignOut}
            className="text-white font-bold text-lg hover:text-red-600 ml-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
