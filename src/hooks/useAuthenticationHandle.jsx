import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const useAuthenticationHandle = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            const email = user.email;
            const displayName = user.displayName;
            const photoUrl = user.photoURL;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoUrl: photoUrl,
              })
            );
            navigate("/browse");
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        });
    
        // Unsubscribe when the component is unmounted.
        return () => unsubscribe();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
}

export default useAuthenticationHandle;