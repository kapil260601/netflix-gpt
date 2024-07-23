import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';

const App = () => {

  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login /> // Assuming Login is the main element for the root path
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  },[]);

  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
