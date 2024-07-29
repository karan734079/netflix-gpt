import Header from "./Header";
import { auth, googleProvider, signInWithPopup } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { BackgroundImage } from "../utils/constants";

const Login = () => {
  const handleGoogleLogin = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    updateProfile(user, {
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  return (
    <div
      style={{
        backgroundImage: `${BackgroundImage}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute  bg-black  p-20 pb-8 my-60 mx-auto right-0 left-0 text-white bg-opacity-70 justify-center"
      >
        <div className="absolute px-6 -my-16">
          <img className="w-44" src={LOGO} alt="logo" srcset="" />
        </div>
        <button
          onClick={handleGoogleLogin}
          className="p-2 my-2 bg-red-700 w-full font-bold rounded-[4px] text-white cursor-pointer"
        >
          Sign In with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
