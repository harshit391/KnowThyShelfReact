import React,{useState,useEffect} from 'react';
import { getAuth, signOut } from 'firebase/auth';
import {app,useAuth} from "../../../context/Firebase"

import './header.css'
import logo from './logo.jpg' 
import profilePic from './sungjinwoo.jpg'
import { Link } from 'react-router-dom';

const auth=getAuth(app);

const Header = ({prev}) => {

  const currentUser=useAuth();
  const [photoURL,setPhotoURL]=useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEw_De963pYsWjudWc56nI-ervEsZi6EOt9Qbcvs5Ww&s');
  useEffect(()=>{
    if(currentUser?.photoURL){
      setPhotoURL(currentUser.photoURL);
    }
  },[currentUser]);
  return (
    <header>
      <Link to="/">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      </Link>

      <ul>
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/library">Library</Link></li>
        <li><Link to="/browser">Browse</Link></li>
        <li><Link to={"/write?prev=" + prev}>Write a Book</Link></li>
        <li><Link to={"/premium/?type=" + prev}>Premium</Link></li>
        <li><button onClick={()=>signOut(auth)} className='button'>Logout</button></li>
      </ul>

      <Link to="/profile">
      <div className="profilePic">
        <img src={photoURL||profilePic} alt="Profile-Pic" style={{ borderRadius: '50%', width:"50px", height: "50px" }} />
      </div>
      </Link>
    </header>
  );
};

export default Header;