import Header from "./Header";
import { auth, googleProvider, signInWithPopup } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      if (user) {
        updateProfile(user, {
          displayName: user.displayName, photoURL: user.photoURL,
        }).then(() => {
          navigate('/browse');
        }).catch((error) => {
         navigate('/error')
        });
      } else {
        navigate('/');
      }

    } catch (error) {
      navigate('/error');
    }
  };

  return (
    <div style={{
      backgroundImage: 'url("https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100%',
      position: 'relative',
    }}>
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute  bg-black  p-20 pb-8 my-60 mx-auto right-0 left-0 text-white bg-opacity-70 justify-center"
      >
        <div className='absolute px-6 -my-16'>
          <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" srcset="" />
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
