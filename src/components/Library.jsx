import React, { useEffect, useState } from 'react';
import '../../src/assets/css/Library.css';
import Header from './Authentication/Header/Header'
import '../App.css'

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {app} from "../assets/scripts/firebase"
import Authentication from '../components/Authentication';
const auth=getAuth(app);


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

    const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

    if (user) {
        console.log("Horror :-", horrorBooks);
    return (
        <div>
            <Header prev='library'/>
            <div className="lib-main">
                <div className="circle">
                    <div className="lib-head">
                        <h1>KNOW THY SHELF</h1>
                        <h1>LIBRARY</h1>
                    </div>
                </div>
            </div>
            
            {/* Render books for each genre */}
            <div className='lib-child'>
                <h3 className="genre-head">Explore more in Horror</h3>
                <div className="bookList12">
                    {horrorBooks.map((book) => (
                        <div key={book.id} className="book">
                            {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                            )}
                            <h2>{book.volumeInfo.title || 'Untitled'}</h2>
                            <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
                            <p>{book.volumeInfo.description ? book.volumeInfo.description.slice(0, 100) + '...' : 'No description available'}</p>
                            <a href={book.volumeInfo.canonicalVolumeLink}>Read More</a>
                        </div>
                    ))}
                </div>
            </div>

            <div className='lib-child'>
                <h3 className="genre-head">Explore more in Romance</h3>
                <div className="bookList12">
                    {romanceBooks.map((book, idx) => (
                        <div key={idx} className="book">
                            {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                            )}
                            <h2>{book.volumeInfo.title || 'Untitled'}</h2>
                            <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
                            <p>{book.volumeInfo.description ? book.volumeInfo.description.slice(0, 100) + '...' : 'No description available'}</p>
                            <a href={book.volumeInfo.canonicalVolumeLink}>Read More</a>
                        </div>
                    ))}
                </div>
            </div>

            <div className='lib-child'>
                <h3 className="genre-head">Explore more in Comedy</h3>
                <div className="bookList12">
                    {comedyBooks.map((book, idx) => (
                        <div key={idx} className="book">
                            {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                            )}
                            <h2>{book.volumeInfo.title || 'Untitled'}</h2>
                            <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
                            <p>{book.volumeInfo.description ? book.volumeInfo.description.slice(0, 100) + '...' : 'No description available'}</p>
                            <a href={book.volumeInfo.canonicalVolumeLink}>Read More</a>
                        </div>
                    ))}
                </div>
            </div>

            <div className='lib-child'>
                <h3 className="genre-head">Explore more in Sci-Fi</h3>
                <div className="bookList12">
                    {scifiBooks.map((book, idx) => (
                        <div key={idx} className="book">
                            {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                            )}
                            <h2>{book.volumeInfo.title || 'Untitled'}</h2>
                            <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
                            <p>{book.volumeInfo.description ? book.volumeInfo.description.slice(0, 100) + '...' : 'No description available'}</p>
                            <a href={book.volumeInfo.canonicalVolumeLink}>Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} else {
    return <Authentication />;
}
}

export default LibraryComponent;
