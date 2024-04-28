import React, { useEffect, useState } from 'react';
import '../../src/assets/css/Library.css';
import Header from './Authentication/Header/Header'
import '../App.css'

function LibraryComponent() {
    // Create separate state objects for each genre
    const [horrorBooks, setHorrorBooks] = useState([]);
    const [romanceBooks, setRomanceBooks] = useState([]);
    const [comedyBooks, setComedyBooks] = useState([]);
    const [scifiBooks, setScifiBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async (genre) => {
            try {
                const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + genre);
                const data = await response.json();
                return data.items;
            } catch (error) {
                console.error('Error fetching books:', error);
                return [];
            }
        };

        const fetchAndSetBooks = async () => {
            const horror = await fetchBooks('horror');
            setHorrorBooks(horror);
            
            const romance = await fetchBooks('romance');
            setRomanceBooks(romance);
            
            const comedy = await fetchBooks('comedy');
            setComedyBooks(comedy);
            
            const scifi = await fetchBooks('scifi');
            setScifiBooks(scifi);
        };

        fetchAndSetBooks();
    }, []); // No dependencies needed here

    useEffect(() => {
        console.log('Horror Books:', horrorBooks);
    }, [horrorBooks]); 
    return (
        <div>
            {/* <header>
                <div className="logo">
                    <img src="./images/logo.png" alt="" />
                </div>

                <ul>
                    <li><a href="./main_dashboard">Home</a></li>
                    <li><a href="./profile">Profile</a></li>
                    <li><a href="./library">Library</a></li>
                    <li><a href="./browser">Browse</a></li>
                    <li><a href="">Forums</a></li>
                </ul>

                <div className="profile">
                    <i className="fas fa-search"></i>
                    <img src="./images/sungjinwoo.jpg" alt="" style={{ borderRadius: '50%' }} />
                </div>
            </header> */}
            <Header/>
            <div className="lib-main">
                <div className="circle">
                    <div className="lib-head">
                        <h1>KNOW THY SHELF</h1>
                        <h1>LIBRARY</h1>
                    </div>
                </div>
            </div>
            
            {/* Render books for each genre */}
            <div>
                <h3 className="genre-head">Explore more in Horror</h3>
                <div className="bookList">
                    {horrorBooks.map((book) => (
                        <div key={book.id} className="book">
                            {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                            )}
                            <h2>{book.volumeInfo.title || 'Untitled'}</h2>
                            <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
                            <p>{book.volumeInfo.description ? book.volumeInfo.description.slice(0, 100) + '...' : 'No description available'}</p>
                            <a href="#">Read More</a>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="genre-head">Explore more in Romance</h3>
                <div className="bookList">
                    {romanceBooks.map((book, idx) => (
                        <div key={idx} className="book">
                            {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                            )}
                            <h2>{book.volumeInfo.title || 'Untitled'}</h2>
                            <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
                            <p>{book.volumeInfo.description ? book.volumeInfo.description.slice(0, 100) + '...' : 'No description available'}</p>
                            <a href="#">Read More</a>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="genre-head">Explore more in Comedy</h3>
                <div className="bookList">
                    {comedyBooks.map((book, idx) => (
                        <div key={idx} className="book">
                            {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                            )}
                            <h2>{book.volumeInfo.title || 'Untitled'}</h2>
                            <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
                            <p>{book.volumeInfo.description ? book.volumeInfo.description.slice(0, 100) + '...' : 'No description available'}</p>
                            <a href="#">Read More</a>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="genre-head">Explore more in Sci-Fi</h3>
                <div className="bookList">
                    {scifiBooks.map((book, idx) => (
                        <div key={idx} className="book">
                            {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                            )}
                            <h2>{book.volumeInfo.title || 'Untitled'}</h2>
                            <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
                            <p>{book.volumeInfo.description ? book.volumeInfo.description.slice(0, 100) + '...' : 'No description available'}</p>
                            <a href="#">Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LibraryComponent;
