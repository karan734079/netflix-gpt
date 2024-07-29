import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged , getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/Browse',
      element: <Browse />,
    }
  ])

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        const displayName = user.displayName;
        const photoUrl = user.photoURL;
        dispatch(addUser({uid : uid,email : email, displayName : displayName,photoUrl : photoUrl}));
      } else {
        dispatch(removeUser());
      }
    });
  })

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;
