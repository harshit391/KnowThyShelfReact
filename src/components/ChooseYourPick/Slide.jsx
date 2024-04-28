import React from "react";

const Slide = ({name, slideClass}) => {
    const a = `swiper-slide ${slideClass}`;
    return (
        <div className={a}>
            <div className="swiper-grad">
                <h1>{name}</h1>
            </div>
        </div>
    );
}

export default Slide;