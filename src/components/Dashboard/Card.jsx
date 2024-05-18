import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useFirebase } from "../../context/Firebase";

const Card = (book) => {
    
    const [url, setUrl] = useState(null);
    const firebase = useFirebase();

    useEffect(() => {
        firebase.getImageURL(book.cover).then((url) => {
            setUrl(url);
        });
    },[])


    return (
        <div className="love-read-card">
            <img src={url} alt={book.title}/>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>{book.info}</p>
            <Link to={"/bookread?type=" + book.id}><button>Read Here</button></Link>
        </div>
    )
}

export default Card;