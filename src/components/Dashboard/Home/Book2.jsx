import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useFirebase } from "../../../context/Firebase";

const Book2 = (item2) => {

    const [url, setUrl] = useState(null);
    const firebase = useFirebase();


    useEffect(() => {
        firebase.getImageURL(item2.cover).then((url) => {
            setUrl(url);
        });
    },[])

    const title = item2.title;  
    const author = item2.author;
    const bookInfo = item2.time;
    const bookImg = item2.cover;

    return (
        <div>
            <div className="book-sections">
                <div className="left-image">
                    <img src={url} alt=""/>   
                </div>
                <div className="books-right-section">
                    <div className="book-info">
                        <div className="book-name">
                            <h3>{title}</h3>
                        </div>
                        <div className="author-name">
                            <h6>
                                {author}
                            </h6>

                        </div>
                        <div className="want-to-read-btn">
                            <Link to={"/bookread?type=" + item2.id}><button>Want to read</button></Link>
                        </div>
                        <div className="info-par">
                            {bookInfo}
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Book2;