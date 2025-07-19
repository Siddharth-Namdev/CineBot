import Header from "./Header";
import { useState, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BACKGROUND_IMAGE } from "../utils/constant";

const Login = () => {
  // this is use for use same form in signIn and signUp both conditions
  const [isSignIn, setIsSignIn] = useState(true);

  // for password icon visible
  const [showPassword, setShowPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  const toogleSignInform = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef(null); // this is give email and password , which we entered
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    // useRef object return krta h , to use object se email or passwork nikalne k liye , email.current.value likha
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return; // agar email or pass wrong honge to kuch message generate hoga or return ho jyega

    if (!isSignIn) {
      //agar email pass shi honge to hi isi line me ayenge
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          //const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />

      <div className="relative min-h-screen w-full">
        <img
          className="absolute inset-0 w-full h-full object-cover -z-10 brightness-89"
          src={BACKGROUND_IMAGE}
          alt="bg-image"
        />

        <div className="flex items-start justify-center h-full pt-16 px-4 sm:px-0">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-black bg-opacity-70 text-white p-6 rounded-lg w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] xl:w-[25%] shadow-xl backdrop-blur-md"
          >
            <h1 className="text-3xl font-bold m-3 text-center">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>

            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 my-3 w-full rounded-lg bg-slate-800 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            )}

            {!isSignIn && (
              <input
                type="number"
                placeholder="Mobile No."
                className="p-3 my-3 w-full rounded-lg bg-slate-800 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            )}

            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="p-3 my-3 w-full rounded-lg bg-slate-800 focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <div className="relative my-3">
              <input
                ref={password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="p-3 w-full rounded-lg bg-slate-800 pr-10 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-xl cursor-pointer text-gray-300 hover:text-white"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <p className="text-lg text-red-500">{errorMessage}</p>

            <button
              onClick={handleButtonClick}
              className="bg-red-600 hover:bg-red-700 p-3 w-full rounded-xl font-semibold transition-all duration-300"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>

            <p
              onClick={toogleSignInform}
              className="cursor-pointer text-center mt-4 hover:underline"
            >
              {isSignIn
                ? "New in NetFlix? Sign Up"
                : "Already registered? Sign In"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
