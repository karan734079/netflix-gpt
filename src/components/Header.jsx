import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {

  const user = useSelector(store => store.user);
  const navigate = useNavigate();

  function handleSignOut() {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      navigate('/error');
    });
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-48" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" srcset="" />
      {user && <div className='flex p-2'>
        <img className='h-12 w-12 my-2' src={user.photoUrl} alt="usericon" />
        <button onClick={handleSignOut} className=' ml-2 font-bold rounded-[4px] text-white text-xl cursor-pointer hover:text-red-700'>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header;
