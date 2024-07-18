import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';

const App = () => {
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

  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
