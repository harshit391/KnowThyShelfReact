import React, { useEffect, useState } from "react";
import { useFirebase } from "../../../../context/Firebase";

const Published = (book) => {

    const [url, setUrl] = useState(null);
    const firebase = useFirebase();

    useEffect(() => {
        firebase.getImageURL(book.cover).then((url) => {
            setUrl(url);
        });
    },[])


    return (
        <div className="booksContinued">
            <img src={url} alt={book.title} />
            <h4>{book.title}</h4>
            <h5>Published :- {book.time}</h5>
        </div>
    )
}

export default Published;