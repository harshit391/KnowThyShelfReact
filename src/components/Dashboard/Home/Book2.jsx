import React from "react";
import { Link } from "react-router-dom";

const Book2 = ({item}) => {
    const title = item["title"];
    const author = item["author"];
    const bookInfo = item["info"];
    const bookImg = item["image"];
    return (
        <div>
            <div className="book-sections">
                <div className="left-image">
                    <img src={bookImg} alt=""/>   
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
                            <Link to={"/" + title}><button>Want to read</button></Link>
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