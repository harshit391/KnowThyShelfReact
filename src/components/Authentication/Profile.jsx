import React, { useEffect, useState } from 'react'
import Header from './Header/Header';
import MiddleContainer from './MiddleContainer/MiddleContainer';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {app} from "../../assets/scripts/firebase"
const auth=getAuth(app);


import "./Profile.css" 
import Authentication from '../Authentication';
import { useFirebase } from "../../context/Firebase";

const Profile = () => {
    const firebase = useFirebase();
    
    const [bookSet,setBookSet] = useState([]);
    const [user,setUser]=useState(null);

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
          if(user){
            setUser(user);
            firebase.listAllBooks().then(items => {
              console.log("This Works");
              setBookSet(items.docs);
            });
          }
          else{
            console.log("Your are logged out");
            setUser(null);
          }
        })
      },[])
        

      if(user!=null){

        if (bookSet.length === 0) {
          return <div>Loading...</div>
        }
        else {
        console.log("Bookset :- ", bookSet);
  return (
    
    <div>
       <div  className='App'>
      
      <Header prev='profile'/>
      <div className="main-container">
        <MiddleContainer username={user.displayName} books={bookSet}/>
      </div>
    </div>
    </div>
  )}
} else{
  return <Authentication/>
}
}

export default Profile
