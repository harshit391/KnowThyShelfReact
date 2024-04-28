import React from "react";
import Holes from "./Holes";
import '../../App.css'

const Paper = ({head, para, paperClass}) => {
    const a = `paper ${paperClass}`;

    return (
    <div className={a}>
        <div className="lines">
            <div className="paper-text">
                {head}<br /><br />
                {para}
            </div>
        </div>
        <Holes/>
    </div>
    );
}

export default Paper;