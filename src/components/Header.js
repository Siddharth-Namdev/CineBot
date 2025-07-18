import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
import { toogleGptSearchview } from "../utils/GptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // this isSign In case , when user is present
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        // this is sign Out case , when user is null
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribe when conponent unmount
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toogleGptSearchview());
  };

  return (
    <div className="absolute w-full px-4 sm:px-8 py-4 bg-gradient-to-b from-black/80 via-black/50 to-transparent backdrop-blur-md shadow-md z-50">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <img
          className="w-36 sm:w-44 object-contain drop-shadow-md"
          src={LOGO}
          alt="logo-img"
        />

        {user && (
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center">
            <button
              onClick={handleGptSearchClick}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-white px-5 py-2 rounded-full font-semibold text-sm sm:text-base shadow-md hover:scale-105"
            >
              {showGptSearch ? "🏠 Homepage" : "🔍 GPT Search"}
            </button>

            <button
              onClick={handleSignOut}
              className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 transition-all duration-300 text-white px-5 py-2 rounded-full font-semibold text-sm sm:text-base shadow-md hover:scale-105"
            >
              🚪 Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
