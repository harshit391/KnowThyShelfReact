import React, { useEffect, useState } from "react";

import { useFirebase } from "../../context/Firebase";
import { Link } from "react-router-dom";

const Details = ({book, prev}) => {


    const [url, setUrl] = useState(null);
    const firebase = useFirebase();


    useEffect(() => {
        firebase.getImageURL(book.cover).then((url) => {
            setUrl(url);
        });
    },[])
    return (
        <div className="details-section">

            <h1>{book.title}</h1>
            <img src={url} alt="" />
            <h2>Author :- {book.author}</h2>
            <h3>Genre :- {book.genre}</h3>
            <h4>Uploaded On :- {book.time}</h4>
            <Link to={"/authentication?type=" + prev} className="joinbtn"><button type="button">Go Back</button></Link>
        </div>
    )
}

export default Details;