import React from "react";

import comic from "/images/comic.jpg";

const Item = () => {
    return (
        <div className="anime-img">
            <img src={comic} alt=""/>
            <div className="progress">
                <div className="progress-value pX" style={{"--percentage": "40%"}}></div>
            </div>
        </div>
    )
}

export default Item;