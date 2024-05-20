import React, { useEffect, useState } from "react";
import { useFirebase } from "../../../../context/Firebase";
import { Link } from "react-router-dom";
import "./Published.css"

const Published = (book) => {

    const [url, setUrl] = useState(null);
    const firebase = useFirebase();

    useEffect(() => {
        firebase.getImageURL(book.cover).then((url) => {
            setUrl(url);
        });
    },[])

    const handleDelete = (e) => {
        e.preventDefault();
        const result = confirm("Are you sure you want to unpublish this book?");
        if (!result) {
            console.log("Unpublish Cancelled");
            return;
        }
        firebase.deleteBook(book.id);
        alert("Book Unpublished Successfully");
    }


    return (
        <div className="booksContinued">
            <Link to={`/bookread?type=${book.id}&prev=profile`}><img src={url} alt={book.title} /></Link>
            <h4>{book.title}</h4>
            <h5>Published :- {book.time}</h5>
            <button onClick={(e) => handleDelete(e)}>UnPublish</button>
        </div>
    )
}

export default Published;