import "@/assets/style/global.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import type { AppProps } from "next/app";
import Home from "./login";
import { useEffect } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
function MyApp({ Component, pageProps }: AppProps) {
  const [loggedInUser] = useAuthState(auth);
  useEffect(() => {
    const setUserInDb = async () => {
      try {
        await setDoc(
          doc(db, "users", loggedInUser?.email as string),
          {
            email: loggedInUser?.email,
            Password: loggedInUser?.toJSON,
            lastSeen: serverTimestamp(),
            photoURL: loggedInUser?.photoURL,
          },
          { merge: true }
        );
      } catch (error) {
        console.log("ERROR SETTING USER INFO IN DB", error);
      }
    };

    if (loggedInUser) {
      setUserInDb();
    }
  }, [loggedInUser]);
  if (!loggedInUser) return <Home />;

  return <Component {...pageProps} />;
}

export default MyApp;
