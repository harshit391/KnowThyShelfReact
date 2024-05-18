import React from "react";
import Book2 from './Book2'

const Middle = ({set}) => {
    set.sort((a, b) => b.data().timestamp - a.data().timestamp);
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
                    {set.slice(0, 3).map((book) => <Book2 id={book.id} key={book.id} {...book.data()}/>)}
                </div>
            </div>
        </div>
    )
}

export default Middle;