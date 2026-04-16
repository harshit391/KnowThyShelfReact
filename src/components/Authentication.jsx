import React, { useEffect, useState } from 'react';
import Page from './Authentication/Page';
import '../assets/css/Authentication.css'
import Profile from './Authentication/Profile';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
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
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsub;
  }, []);

  if (user === null) {
    return (
      <div>
        <Page />
      </div>
    );
  }

  let content;
  switch (type) {
    case 'write':
      content = <Write />;
      break;
    case 'read':
      content = <Dashboard />;
      break;
    default:
      content = <Profile />;
  }

  return (
    <div>
      {content}
    </div>
  );

};

export default Authentication;
