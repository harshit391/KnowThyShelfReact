import React, { useEffect, useState } from 'react';
import Page from './Authentication/Page';
import '../assets/css/Authentication.css'
import Profile from './Authentication/Profile';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from "../assets/scripts/firebase";
const auth = getAuth(app);

const Authentication = () => {
  const [user, setUser] = useState(null);

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
  }, []);

  if (user === null) {
    return (
      <div>
        <Page />
      </div>
    );
  }

  if (user !== null) {
    return (
      <Profile />
    );
  }
};

export default Authentication;
