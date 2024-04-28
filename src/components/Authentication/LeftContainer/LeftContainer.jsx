// LeftContainer.js
import React from 'react';
import book1 from '../Books/1.jpg';
import './LeftContainer.css';

const LeftContainer = () => {
  return (
    <div className="left-container containerProfile">
    
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

     
      <div className="donut-chart-block block">
        <h2 className="titular">Genre STATS</h2>
        <div className="donut-chart">
        
          <div id="porcion1" className="recorte">
            <div className="quesito ios" data-rel="21"></div>
          </div>
          <div id="porcion2" className="recorte">
            <div className="quesito mac" data-rel="39"></div>
          </div>
          <div id="porcion3" className="recorte">
            <div className="quesito win" data-rel="31"></div>
          </div>
          <div id="porcionFin" className="recorte">
            <div className="quesito linux" data-rel="9"></div>
          </div>
          <p className="center-date">
            February<br />
            <span className="scnd-font-color">2023</span>
          </p>
        </div>
        <ul className="os-percentages horizontal-list">
          <li>
            <p className="os ios scnd-font-color">Romance</p>
            <p className="os-percentage">21<sup>%</sup></p>
          </li>
          <li>
            <p className="os mac scnd-font-color">Anime</p>
            <p className="os-percentage">48<sup>%</sup></p>
          </li>
          <li>
            <p className="os linux scnd-font-color">Horror</p>
            <p className="os-percentage">9<sup>%</sup></p>
          </li>
          <li>
            <p className="os win scnd-font-color">Thriller</p>
            <p className="os-percentage">32<sup>%</sup></p>
          </li>
        </ul>
      </div>

    
      <div className="media block">
        <div id="media-display">
          <img src={book1} alt="Book" />
        </div>
        <div className="mediahead">
          <h4>Most Favourite Book</h4>
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;