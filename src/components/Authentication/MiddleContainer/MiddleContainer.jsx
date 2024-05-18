// MiddleContainer.js
import React, { useState ,useEffect} from 'react';
import profilePic from '../Books/sungjinwoo.jpg';
// import {imageDb} from "../../../assets/scripts/firebase"
import {getAuth} from "firebase/auth"
import {app,useAuth,upload} from "../../../assets/scripts/firebase"
import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"
import book1 from '../Books/1.jpg';
import book2 from '../Books/2.jpg';
import book3 from '../Books/3.jpg';
import book4 from '../Books/4.jpg';
import book5 from '../Books/5.jpg';
import book6 from '../Books/6.jpg';
import book7 from '../Books/7.jpg';
import book8 from '../Books/8.jpg';
import book9 from '../Books/9.jpg';
import book10 from '../Books/10.jpg';
import Calender from './Calender/Calender';
import './MiddleContainer.css';

const auth=getAuth(app);

const MiddleContainer = ({ username }) => {
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

      <div style={{display: "flex", width: "200vw"}}>
      <div className="menu-box block">
        <h2 className="titular">MENU BOX</h2>
        <ul className="menu-box-menu">
          <li>
            <a className="menu-box-tab" href="#6">
              <span className="icon fontawesome-envelope scnd-font-color"></span>
              Favorites
              <div className="menu-box-number">10</div>
            </a>
          </li>
          <li>
            <a className="menu-box-tab" href="#8">
              <span className="icon entypo-paper-plane scnd-font-color"></span>
              Recomendations
              <div className="menu-box-number">3</div>
            </a>
          </li>
          <li>
            <a className="menu-box-tab" href="#10">
              <span className="icon entypo-calendar scnd-font-color"></span>
              History
              <div className="menu-box-number">5</div>
            </a>
          </li>
          <li>
            <a className="menu-box-tab" href="#12">
              <span className="icon entypo-cog scnd-font-color"></span>
              Account Settings
            </a>
          </li>
          <li>
            <a className="menu-box-tab" href="#13">
              <span className="icon entypo-chart-line scnd-font-color"></span>
              Statistics
            </a>
          </li>
        </ul>
      </div>
    
      <div className="profile_main block">
        <div className="imageMain">
        <img src={photoURL} alt="Profile" />
        </div>
        <div className="imageName">
          <h1>{username||'Sung Jin Woo'}</h1>
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
          <h2>Current Readings</h2>
        </div>
        <div className="continue-container">
          <div className="booksContinued">
            <img src={book1} alt="Book 1" />
            <div className="progress">
              <div className="progress-value pX" style={{ '--percentage': '40%' }}></div>
            </div>
          </div>
          <div className="booksContinued">
            <img src={book2} alt="Book 2" />
            <div className="progress">
              <div className="progress-value pX" style={{ '--percentage': '40%' }}></div>
            </div>
          </div>
          <div className="booksContinued">
            <img src={book3} alt="Book 3" />
            <div className="progress">
              <div className="progress-value pX" style={{ '--percentage': '40%' }}></div>
            </div>
          </div>
          <div className="booksContinued">
            <img src={book4} alt="Book 4" />
            <div className="progress">
              <div className="progress-value pX" style={{ '--percentage': '40%' }}></div>
            </div>
          </div>
          <div className="booksContinued">
            <img src={book5} alt="Book 5" />
            <div className="progress">
              <div className="progress-value pX" style={{ '--percentage': '40%' }}></div>
            </div>
          </div>
          <div className="booksContinued">
            <img src={book6} alt="Book 6" />
            <div className="progress">
              <div className="progress-value pX" style={{ '--percentage': '40%' }}></div>
            </div>
          </div>
          <div className="booksContinued">
            <img src={book7} alt="Book 7" />
            <div className="progress">
              <div className="progress-value pX" style={{ '--percentage': '40%' }}></div>
            </div>
          </div>
          <div className="booksContinued">
            <img src={book8} alt="Book 8" />
            <div className="progress">
              <div className="progress-value pX" style={{ '--percentage': '40%' }}></div>
            </div>
          </div>
          <div className="booksContinued">
            <img src={book9} alt="Book 9" />
            <div className="progress">
              <div className="progress-value pX" style={{ '--percentage': '40%' }}></div>
            </div>
          </div>
          <div className="booksContinued">
            <img src={book10} alt="Book 10" />
            <div className="progress">
              <div className="progress-value pX" style={{ '--percentage': '40%' }}></div>
            </div>
          </div>
        </div>
      </section>
      <div className="lastContainer">
                <Calender/> 
            </div>
    </div>
  );
};

export default MiddleContainer;