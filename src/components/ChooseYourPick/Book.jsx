import React from "react";

const Book = ({bookClass}) => {
    const a = `book ${bookClass}`
    return (
        <div className={a}>
            <div className="book-grad"></div>
        </div>
    );
}

export default Book;
