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

  const handleRegistration = (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setError('');
      })
      .catch(error => setError(error.message));
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
    handleLogin
  };
}

export default useFirebase;