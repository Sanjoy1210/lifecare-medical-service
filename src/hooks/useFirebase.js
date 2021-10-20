import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider)

  }

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => { })
      .finally(() => setIsLoading(false));
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleRegistration = () => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const handleLogin = () => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  return {
    user,
    isLoading,
    setIsLoading,
    signInUsingGoogle,
    logOut,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    error,
    setError,
    handleLogin,
    password
  };
}

export default useFirebase;