import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';


const Header = () => {

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
      <div className=''>
        <div className='bg-red-500 text-white px-3 py-1 mx-5 my-7 rounded-md hover:opacity-80'>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  )
}

export default Header