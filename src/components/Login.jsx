import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"
          alt="logo"
        />
      </div>
      <form
        action=""
        className="w-3/12 absolute  bg-black  p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="text-left text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-3 my-2 w-full font-bold text-sm ring-1 ring-slate-400 rounded-[4px] bg-black bg-opacity-80"
        />}
        <input
          type="email"
          placeholder="Email or mobile number"
          className="p-3 my-2 w-full font-bold text-sm ring-1 ring-slate-400 rounded-[4px] bg-black bg-opacity-80"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full  ring-1 font-bold ring-slate-400 text-sm  rounded-[4px] bg-black bg-opacity-80"
        />
        <button
          type="submit"
          className="p-2 my-2 bg-red-700 w-full font-bold rounded-[4px] cursor-pointer"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New To Netflix? Sign Up now."
            : "Already have an Account? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
