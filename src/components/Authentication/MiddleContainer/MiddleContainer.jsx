// MiddleContainer.js
import React, { useState ,useEffect} from 'react';
import {getAuth} from "firebase/auth"
import {app,useAuth,upload} from "../../../assets/scripts/firebase"
import Calender from './Calender/Calender';
import './MiddleContainer.css';
import Published from './Calender/Published';

const auth=getAuth(app);

const MiddleContainer = (set) => {

  console.log("Recieved Set: ",set)
  const currentUser=useAuth();
  const [photo,setPhoto]=useState(null);
  const [loading,setLoading]=useState(false);
  const [photoURL,setPhotoURL]=useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEw_De963pYsWjudWc56nI-ervEsZi6EOt9Qbcvs5Ww&s');

  function handleChange(e){
    if(e.target.files[0]){
      setPhoto(e.target.files[0]);
    }
  }
  function handleClick(){
    upload(photo,currentUser,setLoading);
    
  }

  useEffect(()=>{
    if(currentUser?.photoURL){
      setPhotoURL(currentUser.photoURL);
    }
  },[currentUser]);
  return (
    <div className="middle-container containerProfile">

      <div style={{display: "flex"}}>
      <div className="profile_main block">
        <div className="imageMain">
          <img src={photoURL} alt="Profile" />
        </div>
        <div className="imageName">
          <h1>{set.username||'Sung Jin Woo'}</h1>
        </div>
        <div className="readBooks">
          <div>Books Read: 15</div>
          <div>Books Currently Reading: 3</div>
          <div>Current Streak: 55</div>
        </div>
        <div className="upload-btns">
          <label htmlFor="file" className="custom-file-upload">Choose Profile Pic</label>
          <input id='file' type="file" onChange={handleChange} style={{display: 'none'}}/>
          <button className='upload-btn' disabled={loading||!photo} onClick={handleClick}>Upload</button>
        </div>
      </div> 

      </div>

     
      <section className="continue">
        <div className="continue-heading">
          <h2>Your Books</h2>
        </div>
        <div className="continue-container">
          {set.books.map((item) => <Published id={item.id} key={item.id} {...item.data()}/>)}
        </div>
      </section>
      <div className="lastContainer">
                <Calender/> 
            </div>
    </div>
  );
};

export default MiddleContainer;