import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from "../../context/Firebase";
const auth = getAuth(app);

const Main = ({goback}) => {
    const [user, setUser] = useState(null);
  const [logged, setLogged] = useState("Join Us");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    if (user !== null) {
      setLogged("Go to Profile");
    }
  });   

  let str = "/";

  if (goback) {
    str += goback;
  }

    return (
       

        <div className="main-section">
    <div className="join-us main-buttons">
        <Link to="/authentication" className="joinbtn"><button type="button">{logged}</button></Link>
        <Link to={str} style={{textDecoration: "none"}}><button type="button" style={{marginTop: "0"}}>Go Back</button></Link>
    </div>
    <div className="main-title">
        <h1 style={{fontSize: "2em ", marginTop: "22px", fontWeight: "bold"}}>Know Thy Shelf</h1>
        <h3>Premium</h3>
        <p style={{fontSize:"16px", marginTop: "25px"}}>Indulge in the warmth of premium reading - where every page feels like a snug embrace. Our exclusive membership is your passport to a haven of stories, relaxation, and literary bliss..
          Unlock a realm where every page is an adventure waiting to unfold. Embark on a literary journey like never before!</p>
        <div className="main-buttons">
            <a href="/authentication/?type=read"><button style={{fontSize: "1rem"}}>Start Reading</button></a>
            <a href="/authentication/?type=write"><button style={{fontSize: "1rem"}}>Start Writing</button></a>
        </div>
        
    </div>
    <div className="animation-elementsab">
        <section className="red-elements">
            <div className="book12">
                <img src="/WebsiteElements/Book.png" alt=""/>
            </div>
            <div className="left-heart">
                <img src="/WebsiteElements/Heart.png" alt=""/>
            </div>
            <div className="right-heart">
                <img src="/WebsiteElements/Heart.png" alt=""/>
            </div>
            <div className="left-flower">
                <img src="/WebsiteElements/Flower.png" alt=""/>
            </div>
            <div className="right-flower">
                <img src="/WebsiteElements/Flower.png" alt=""/>
            </div>
            <div className="left-cloud">
                <img src="/WebsiteElements/Cloud.png" alt=""/>
            </div>
            <div className="right-choco">
                <img src="/WebsiteElements/Choco.png" alt=""/>
            </div>
        </section>
    </div>
  </div>

    )
}

export default Main;