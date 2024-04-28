import React from "react";
import Calender from "../Calender/Calender";

const Left = () => {
    return (
        <div className="right-section">
            <div className="welcome">
                <h1>Welcome User!</h1>
                <p>Meet your favourite book, find your reading community and manage your reading life</p>
                <div className="video">
                    <video height="200px" width="300px" src="images/185096 (540p).mp4" autoPlay loop></video>
                </div>
                <div className="streak">
                    <Calender/>
                </div>
            </div>
        </div>
    )
}

export default Left;