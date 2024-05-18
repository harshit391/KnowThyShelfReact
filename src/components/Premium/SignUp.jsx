import React, { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from "../../assets/scripts/firebase";
import SignInSignUpPage from "../Authentication/Page";
const auth = getAuth(app);




const SignUp = () => {

    const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        console.log("You are logged out");
        setUser(null);
      }
    });

    if (user !== null) {
      setLogged(true);
    }
  });


    if (!logged) {
    return (
        <SignInSignUpPage />
    )
}else{
    return <></>
}
}

export default SignUp;