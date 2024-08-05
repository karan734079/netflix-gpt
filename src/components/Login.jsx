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
        backgroundImage:`${BackgroundImage}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <Header />
      <div className="flex items-center justify-center h-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-70 p-6 md:p-8 lg:p-10 text-white rounded-lg w-full max-w-sm"
        >
          <div className="flex justify-center mb-4">
            <img className="w-36 sm:w-44 md:w-52" src={LOGO} alt="logo" /> {/* Responsive logo size */}
          </div>
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-700 px-4 py-2 font-bold rounded-md text-white cursor-pointer hover:bg-red-800"
          >
            Sign In with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
