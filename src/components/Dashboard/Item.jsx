import React from "react";

const Item = () => {
    return (
        <div className="anime-img">
            <img src="./images/comic.jpg" alt=""/>
            <div className="progress">
                <div className="progress-value pX" style={{"--percentage": "40%"}}></div>
            </div>
        </div>
    )
}

export default Item;