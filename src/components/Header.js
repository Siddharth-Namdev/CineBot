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
    <div className="absolute w-screen px-8 py-3 bg-gradient-to-b from-gray-900 via-black to-transparent shadow-md z-10 flex justify-between items-center">
      <img className="w-44 object-contain" src={LOGO} alt="logo-img" />

      {user && (
        <div className="flex items-center gap-4">
          <button
            onClick={handleGptSearchClick}
            className="bg-purple-700 hover:bg-purple-800 transition duration-300 text-white px-5 py-2 rounded-lg font-semibold text-lg shadow-md"
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-5 py-2 rounded-lg font-semibold text-lg shadow-md"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
