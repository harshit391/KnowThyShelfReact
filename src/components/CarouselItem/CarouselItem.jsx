import React from "react";

const CarlItem = ({source, title, number}) => {
    return (
        <div className="carousel-item">
            <div className="carousel-box">
              <div className="book-title">{title}</div>
              <div className="num">{number}</div>
              <img src={source} alt="" />
            </div>
        </div>
    );
}

export default CarlItem;