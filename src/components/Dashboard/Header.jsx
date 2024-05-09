import React from "react";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="/images/logo.png" alt=""/>
            </div>

            <ul>
                <li><a href="./dashboard">Home</a></li>
                <li><a href="./profile">Profile</a></li>
                <li><a href="./library">Library</a></li>
                <li><a href="./browser">Browse</a></li>
                <li><a href="./premium">Premium</a></li>
            </ul>

            <div className="profile">
                <i className="fas fa-search"></i>
                <img src="/images/sungjinwoo.jpg" alt="" style={{borderRadius: "50%"}}/>
            </div>
        </header>
    )
}

export default Header;
