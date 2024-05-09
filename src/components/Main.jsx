import React from "react";
import Book from './WebsiteElements/Book.png';
import Heart from './WebsiteElements/Heart.png';
import Flower from './WebsiteElements/Flower.png';
import Cloud from './WebsiteElements/Cloud.png';
import Choco from './WebsiteElements/Choco.png';
import Hat from './WebsiteElements/Hat.png';
import Naruto from './WebsiteElements/Naruto.png';
import Katana from './WebsiteElements/Katana.png';
import Totoro from './WebsiteElements/Totoro.png';
import {Link} from 'react-router-dom';
import BlueBook from './WebsiteElements/BlueBook.png';

const Main = () => {
    return (
        <div className="main-section">
      <div className="join-us main-buttons">
        <Link to="/authentication" ><button type="button">Join Us</button></Link>
      </div>
      <div className="main-title">
        <h1>Know Thy Shelf</h1>
        <h3>Explore Worlds. Pen Your Own.</h3>
        <p>Begin your literary journey on our platform – read, write, and connect with fellow enthusiasts!</p>
        <div className="main-buttons">
          <a href="./authentication"><button>Start Reading</button></a>
          <a href="./authentication"><button>Start Writing</button></a>
          <a href="./premium" style={{ textDecoration: 'none' }}>
            <button className="premium" type="button">
              <div className="premium-div">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#5c10ff" stroke="#5c10ff" strokeWidth="2" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round" className="zap-icon">
                  <g><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></g>
                </svg>
                Try Premium
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className="animation-elements">
        <section className="red-elements">
          <div className="red-book">
            <img src={Book} alt="" />
          </div>
          <div className="left-heart">
            <img src={Heart} alt="" />
          </div>
          <div className="right-heart">
            <img src={Heart} alt="" />
          </div>
          <div className="left-flower">
            <img src={Flower} alt="" />
          </div>
          <div className="right-flower">
            <img src={Flower} alt="" />
          </div>
          <div className="left-cloud">
            <img src={Cloud} alt="" />
          </div>
          <div className="right-choco">
            <img src={Choco} alt="" />
          </div>
        </section>
        <section className="blue-elements">
          <div className="left-hat">
            <img src={Hat} alt="" />
          </div>
          <div className="left-naruto">
            <img src={Naruto} alt="" />
          </div>
          <div className="right-naruto">
            <img src={Naruto} alt="" />
          </div>
          <div className="left-katana">
            <img src={Katana} alt="" />
          </div>
          <div className="right-katana">
            <img src={Katana} alt="" />
          </div>
          <div className="right-totoro">
            <img src={Totoro} alt="" />
          </div>
          <div className="bluebook">
            <img src={BlueBook} alt="" />
          </div>
        </section>
      </div>
    </div>
    )
}

export default Main;