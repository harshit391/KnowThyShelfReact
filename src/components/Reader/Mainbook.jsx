import React, { useEffect, useState } from "react";

import { useFirebase } from "../../context/Firebase";

const MainBook = ({bookpath}) => {

    const firebase = useFirebase();
    const [pdfUrl, setPdfUrl] = useState('');


    useEffect(() => {
        firebase.getBookDocByUrl(bookpath.file).then((url) => {
            setPdfUrl(url);
        });
      }, []);

      if (pdfUrl !== '') {
    return (
        <iframe className="book-reader-frame" src={`${pdfUrl}`} width="100%" title="book"></iframe>
    )} else {
        return (
            <div>
                Loading...
            </div>
        )
    }
}

export default MainBook;