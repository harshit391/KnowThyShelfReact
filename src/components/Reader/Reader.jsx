import React, { useEffect } from "react";
import MainBook from "./Mainbook";
import "./Reader.css";
import Details from "./Details";

import { useSearchParams } from 'react-router-dom';

import { useFirebase } from "../../context/Firebase";

const Reader = () => {


    const firebase = useFirebase();
    
    const [book, setBook] = React.useState(null);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const id = searchParams.get('type');

        firebase.getBookById(id).then((item) => {
            setBook(item.data());
        });
    },[])

    if (book) {
    return (
        <div className="book-reader-container">
            <Details book={book}/>
            <MainBook bookpath={book} />
        </div>
    )
    } else {
        return (
            <div>
                Loading...
            </div>
        )   
    }
}

export default Reader;