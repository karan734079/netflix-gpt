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
    <div className="absolute top-0 left-0 right-0 px-4 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row items-center justify-between">
      {/* Logo */}
      <img className="w-32 md:w-48" src={LOGO} alt="logo" />

      {/* User Info and Actions */}
      {user && (
        <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
          {/* Actions Wrapper */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-x-4 md:space-y-0">
            {/* Language Selector */}
            {showGptSearch && (
              <select
                className="p-1 bg-black text-white rounded-md"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option className="text-white" key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            {/* GPT Search Button */}
            <button
              className="bg-red-700 px-4 md:px-6 py-2 rounded-md text-white font-bold text-sm md:text-lg hover:bg-red-800 transition duration-200"
              onClick={handleGptSearch}
            >
              {showGptSearch ? "Back To Home" : "GPT Search"}
            </button>
          </div>

          {/* User Profile and Sign Out */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* User Profile */}
            <img
              className="h-10 w-10 md:h-12 md:w-12 rounded-full"
              src={user.photoUrl}
              alt="usericon"
            />

            {/* Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="text-white font-bold text-sm md:text-lg hover:text-red-600 transition duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
