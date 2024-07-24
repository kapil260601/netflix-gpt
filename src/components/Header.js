import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const navigate = useNavigate();

  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className='w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
      {
        user && (
          <div className='flex'>
        <img className='w-12 h-12 my-5 rounded-xl' src={user?.photoURL} alt='user-Icon'/>
        <div className='bg-red-500 text-white px-3 py-1 mx-1 my-7 rounded-md hover:opacity-80'>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
        )
      }
    </div>
  )
}

export default Header