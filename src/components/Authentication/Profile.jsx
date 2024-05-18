import React, { useEffect, useState } from 'react'
import Header from './Header/Header';
import MiddleContainer from './MiddleContainer/MiddleContainer';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {app} from "../../assets/scripts/firebase"
const auth=getAuth(app);


import "./Profile.css" 
import Authentication from '../Authentication';

const Profile = () => {
    const [user,setUser]=useState(null);

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
          if(user){
            setUser(user);
           
          }
          else{
            console.log("Your are logged out");
            setUser(null);
          }
        })
      },[])

      if(user!=null){
  return (
    
    <div>
       <div  className='App'>
      
      <Header prev='profile'/>
      <div className="main-container">
      <MiddleContainer username={user.displayName}/>
      </div>
    </div>
    </div>
  )
} else{
  return <Authentication/>
}
}

export default Profile
