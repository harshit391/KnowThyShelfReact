import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="/images/logo.png" alt=""/>
            </div>

            <ul>
                <li><Link to="/dashboard">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/library">Library</Link></li>
                <li><Link to="/browser">Browse</Link></li>
                <li><Link tp="/premium">Premium</Link></li>
            </ul>

            <div className="profile">
                <i className="fas fa-search"></i>
                <img src="/images/sungjinwoo.jpg" alt="" style={{borderRadius: "50%"}}/>
            </div>
        </header>
    )
}

export default Header;
