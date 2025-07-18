import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browser from "./Browser";
import MovieDetail from "./MovieDetail";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
    {
      path: "/movie/:id", //
      element: <MovieDetail />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
