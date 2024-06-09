import React, { useEffect, useState } from "react";
import Calender from "../Calender/Calender";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {app} from "../../../context/Firebase";
const auth=getAuth(app);

const Left = () => {
    const [user,setUser]=useState(null);
    const [username,setUsername]=useState("null");

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
          if(user){
            setUser(user);
           
          }
          else{
            setUser(null);
          }
        })

        if (user) {
            setUsername(user.displayName);
        }
      })


    
    return (
        <div className="right-section">
            <div className="welcome">
                <h1>Welcome {username||'Sung Jin Woo'}</h1>
                <p>Meet your favourite book, find your reading community and manage your reading life</p>
                <div className="video">
                    <video height="200px" width="300px" src="images/185096 (540p).mp4" autoPlay loop></video>
                </div>
                <div className="streak">
                    <Calender/>
                </div>
            </div>
        </div>
    )
}

export default Left;