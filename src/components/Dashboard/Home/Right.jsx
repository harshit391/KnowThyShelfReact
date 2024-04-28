import React from "react";

const Right = () => {
    return (
        <div className="left-section">
            <div className="curr-read">
                <h5>Currently Reading</h5>
                <div className="readbook">
                    <i className="fa-solid fa-book"></i><p>What are you reading?</p>
                </div>
                <div className="read-input">
                    <input type="text" placeholder="Search books"/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="links">
                    <a href="">Recommendations</a>
                    <a href="">General Update</a>
                </div>
            </div>
            <div className="read-graph">
                <h5>My Reading Graph</h5>
                <img  src="images/mo-removebg-preview.png" alt=""/>
            </div>
            <div className="read-challenge">
                <h5>2024 Reading Challenge</h5>
                <div className="read-ele">
                    <div className="read-left">
                        <img src="./images/challenge.png" alt=""/>
                    </div>
                    <div className="read-right">
                        <h5>0</h5>
                        <p>books completed</p>
                        <p className="behindsched">18 books behind schedule</p>
                        <a href="">View Challenge</a>
                    </div>
                </div>  
            </div>
            <div className="want-to-read">
                <div className="wtr-content">
                    <img src="images/images.png" alt=""/>
                    <h5>What do you want to read next?</h5>
                </div>
                <a style={{textAlign: "center"}} href="">Recommendations</a>
            </div>
        </div>
    )
}

export default Right;