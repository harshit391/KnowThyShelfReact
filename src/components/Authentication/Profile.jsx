import React, { useEffect, useState } from 'react'
import Header from './Header/Header';
import LeftContainer from './LeftContainer/LeftContainer';
import MiddleContainer from './MiddleContainer/MiddleContainer';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {app} from "../../assets/scripts/firebase"
import "./Profile.css" 

const auth=getAuth(app);



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
      
      <Header/>
      <div className="main-container">
        <LeftContainer />
      <MiddleContainer username={user.displayName} />
    
      </div>
    </div>
    </div>
  )
}
}

export default Profile
