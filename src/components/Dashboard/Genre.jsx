import React, { useEffect, useState } from "react";
import Card from "./Card";

const Genre = ({set}) => {
    console.log("GenreSet: " , set)
    return (
        <div className="love-read-container">
            <h5>Based on genres you love</h5>
            <div className="love-read-collection">
                {set.map((item) => <Card id={item.id} key={item.id} {...item.data()}/>)}
            </div>
        </div>
    )
}

export default Genre;