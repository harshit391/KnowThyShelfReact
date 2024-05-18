import React, { useEffect, useState } from "react";

import { useFirebase } from "../../context/Firebase";

const Details = ({book}) => {


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
            <h4>Uploaded On :- {book.time}</h4>
        </div>
    )
}

export default Details;