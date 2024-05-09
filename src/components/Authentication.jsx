import React, { useEffect, useState } from 'react';
import Page from './Authentication/Page';
import Header from './Authentication/Header/Header';
import LeftContainer from './Authentication/LeftContainer/LeftContainer';
import MiddleContainer from './Authentication/MiddleContainer/MiddleContainer';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'; // Import from 'firebase/auth'
import { app } from "../assets/scripts/firebase";
import Profile from './Authentication/Profile';
import '../assets/css/Authentication.css'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';

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
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    );
  }
};

export default Authentication;
