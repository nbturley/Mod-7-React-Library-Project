import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signInWithRedirect } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
    const navigate = useNavigate();
    // This will just check if the user is logged in, if so, it returns the children
    // (which are passed as props - it's just whatever component is either protected
    // or not)
    // otherwise it sends them to the login route


    // This is the method Brandon demonstrated but I decided to use the onAuthStateChanged instead.
    // useEffect(() => {
    //     if (!auth.currentUser) {
    //         console.log(auth);
    //         navigate("../")
    //         signInWithRedirect(auth, Providers.google)
    //     }
    // }, [])

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
            // I was playing around with the user information.
            const uid = user.uid;
            const displayName = user.displayName;

            console.log("uid", uid)
            console.log("displayName", displayName);
            
          } else {
            // User is signed out
            console.log("user is logged out")

            navigate("../")
            signInWithRedirect(auth, Providers.google)
          }
        })});
  return (
    <>{children}</>
  )
}

export default AuthChecker