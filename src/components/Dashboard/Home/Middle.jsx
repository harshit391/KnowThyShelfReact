import React from "react";
import Book2 from './Book2'

const Middle = ({books}) => {
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
                    <Book2 item={books[0]}/>
                    <Book2 item={books[1]}/>
                    <Book2 item={books[2]}/>
                </div>
            </div>
        </div>
    )
}

export default Middle;