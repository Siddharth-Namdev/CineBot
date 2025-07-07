import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browser from "./Browser";
import Header from "./Header";
import { useState, useEffect } from "react";
import { auth } from "../utils/firebase";
import appStore from "../utils/appStore";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // this isSign In case , when user is present
        const { uid, email, displayName } = user;
        dispatch(addUser({uid:uid, email:email,displayName:displayName}));
      } else {
        // this is sign Out case , when user is null
        dispatch(removeUser());
      }
    });
  },[]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
