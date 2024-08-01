import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
import useAuthenticationHandle from "../hooks/useAuthenticationHandle";

const Header = () => {
  
  const user = useSelector((store) => store.user);

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  }

  useAuthenticationHandle();

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-bl from-black z-10 flex justify-between">
      <img
        className="w-48"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img className="h-12 w-12 my-2 rounded-full" src={user.photoUrl} alt="usericon" />
          <button
            onClick={handleSignOut}
            className=" ml-2 font-bold rounded-[4px] text-white text-lg cursor-pointer hover:text-red-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
