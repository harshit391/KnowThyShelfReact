import React, { useEffect, useState } from 'react';
import Page from './Authentication/Page';
import '../assets/css/Authentication.css'
import Profile from './Authentication/Profile';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {app} from "../context/Firebase"
import { useSearchParams } from 'react-router-dom';
import Write from './Writing/Write';
import Dashboard from './Dashboard/Dashboard';
const auth = getAuth(app);

const Authentication = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const AuthComp = () => {
    switch (type) {
      case 'write':
      return <Write />;
      case 'read':
      return <Dashboard/>;
      default:
        return <Profile />;
    }
  };

  if (user === null) {
    return (
      <div>
        <Page />
      </div>
    );
  }

  

  if (user !== null) {
    return (
      <div>
        <AuthComp />
      </div>
    );
    
  }

  
};

export default Authentication;
