import React, { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from "../../context/Firebase";
import SignInSignUpPage from "../Authentication/Page";
const auth = getAuth(app);




const SignUp = () => {

    const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLogged(true);
      } else {
        setUser(null);
        setLogged(false);
      }
    });
    return unsub;
  }, []);


    if (!logged) {
    return (
        <SignInSignUpPage />
    )
}else{
    return <></>
}
}

export default SignUp;