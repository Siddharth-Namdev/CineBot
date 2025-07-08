import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {  useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO} from "../utils/constant"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // this isSign In case , when user is present
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browser');
      } else {
        // this is sign Out case , when user is null
        dispatch(removeUser());
        navigate('/');
      }
    });
    //Unsubscribe when conponent unmount 
    return ()=> unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className=" w-[200px]"
        src={LOGO}
        alt="logo-img"
      />
      {user && (
        <button
          onClick={handleSignOut}
          className="text-white font-bold text-2xl"
        >
          Sign Out{" "}
        </button>
      )}
    </div>
  );
};

export default Header;
