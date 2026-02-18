import React, { useState } from 'react';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,updateProfile,signOut} from "firebase/auth"

import { firebaseApp } from '../../context/Firebase';

import lap from "../../assets/images/Authentication/lap.png" 

const auth=getAuth(firebaseApp);

const googleProvider=new GoogleAuthProvider();

function SignInSignUpPage({user}) {
  const [inemail,setinEmail]=useState("");
  const [inpassword,setinPassword]=useState("");
  const [upemail,setupEmail]=useState("");
  const [uppassword,setupPassword]=useState("");
  const [Username,setUsername]=useState("");
  const signupUser = () => {
    createUserWithEmailAndPassword(auth, upemail, uppassword)
      .then((userCredential) => {
        // Update the user's profile with the username
        updateProfile(userCredential.user, {
          displayName: Username,
        })
      })
      .catch((error) => {
        alert("Error creating user");
      });
  };
  const signinUser = () => {
    signInWithEmailAndPassword(auth, inemail, inpassword)
      .then((userCredential) => {
        const user = userCredential.user;
        const username = user.displayName;
        // Store the username in a state variable or component property
        setUsername(username);
      })
      .catch((err) => {
        alert("Invalid credentials");
      });
  };
  
  const signinWithGoogle=()=>{
    signInWithPopup(auth,googleProvider);
  }
  const [isSignUp, setIsSignUp] = useState(false);

  const toggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div id="container123" className={`container123 ${isSignUp ? 'sign-up' : 'sign-in'}`}>
      
  
      <div className="row">

        <div className={`col align-items-center flex-col sign-up ${isSignUp ? 'active' : ''}`}>
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              <div className="input-group">
                <i className="bx bxs-user"></i>
                <input onChange={e=>setUsername(e.target.value)} value={Username} type="text" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className="bx bx-mail-send"></i>
                <input onChange={e=>setupEmail(e.target.value)} value={upemail}  type="email" placeholder="Email" />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input onChange={e=>setupPassword(e.target.value)} value={uppassword}  type="password" placeholder="Password" />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Confirm password" />
              </div>
              <button onClick={signupUser}>Sign up</button>
              <p>
                <span>Already have an account?</span>
                <b onClick={toggle} className="pointer">
                  Sign in here
                </b>
              </p>
            </div>
          </div>
        </div>
     
        <div className={`col align-items-center flex-col sign-in ${isSignUp ? '' : 'active'}`}>
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="input-group">
                <i className="bx bxs-user"></i>
                <input onChange={e=>setinEmail(e.target.value)} value={inemail} type="text" placeholder="Email" />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt"></i>
                <input onChange={e=>setinPassword(e.target.value)} value={inpassword}  type="password" placeholder="Password" />
              </div>
              <button onClick={signinUser}>Sign in</button>
              <p>
                <b>Or</b>
                <button onClick={signinWithGoogle}>Sign in with Google</button>
              </p>
              <p>
                <b>Forgot password?</b>
              </p>
              <p>
                <span>Don't have an account?</span>
                <b onClick={toggle} className="pointer">
                  Sign up here
                </b>
              </p>
            </div>
          </div>
          <div className="form-wrapper"></div>
        </div>
      
      </div>
     
      <div className="row content-row">
      
        <div className={`col align-items-center flex-col ${isSignUp ? '' : 'active'}`}>
          <div className="text sign-in">
            <h2>Welcome </h2>
          </div>
          <div className="img sign-in">
            <img src={lap} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 3px 15px' }} />
          </div>
        </div>
        
        <div className={`col align-items-center flex-col ${isSignUp ? 'active' : ''}`}>
          <div className="img sign-up">
            <img src={lap} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 3px 15px' }} />
          </div>
          <div className="text sign-up">
            <h2>Join Us</h2>
          </div>
        </div>
   
      </div>

    </div>
  );
}

export default SignInSignUpPage;
