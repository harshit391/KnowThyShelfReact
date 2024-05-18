import React from "react";
import Book2 from './Book2'
import { random } from "fontawesome";

const Middle = ({books, set}) => {
    return (
        <div className="middle-section">
            <div className="updates">
                <div className="update-head">
                    <h4 className="updates-text">Updates</h4>
                    <div className="customize">
                       <p> <i className="fa-solid fa-gear"></i>
                        customize</p>
                    </div>
                </div>
                
                <div className="books-updates">
                    {set.map((book) => <Book2 id={book.id} key={book.id} {...book.data()}/>)}
                </div>
            </div>
        </div>
    )
}

export default Middle;