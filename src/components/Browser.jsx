import React, { useEffect, useState } from 'react';
import '../assets/css/Browser.css'
import Header from './Authentication/Header/Header';


import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {app} from "../assets/scripts/firebase"
import Authentication from '../components/Authentication';
const auth=getAuth(app);


const Browser = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [showGenreGrid, setShowGenreGrid] = useState(true);

    const handleSearch = async (event) => {
        event.preventDefault();
        const searchInput = event.target.elements.searchInput.value;
        const books = await fetchBooks(searchInput);
        setSearchResults(books);
        setShowSearchResults(true);
        setShowGenreGrid(false);
    };

    const fetchBooks = async (search) => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
        const data = await response.json();
        return data.items || [];
    };

    const handleGenreClick = async (genre) => {
        const books = await fetchBooks(genre.toLowerCase());
        setSearchResults(books);
        setShowSearchResults(true);
        setShowGenreGrid(false);
    };

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
    return (
        <div className='browser-bg'>
            <Header prev = 'browser'/>

            <div className="browse-section">
                <div className="search-content">
                    <form onSubmit={handleSearch}>
                        <input type="text" id="searchInput" placeholder="Enter your Search" name="searchInput" />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>

            {showGenreGrid && (
                <div className="genre-grid">
                    <div className="gen pinkpastel" onClick={() => handleGenreClick("Romance")}>Romance</div>
                    <div className="gen darkgreenpastel" onClick={() => handleGenreClick("Fiction")}>Fiction</div>
                    <div className="gen purplepastel" onClick={() => handleGenreClick("Comics")}>Comics</div>
                    <div className="gen lightgreenpastel" onClick={() => handleGenreClick("Mangas")}>Mangas</div>
                    <div className="gen lightbeigepastel" onClick={() => handleGenreClick("Self-Help")}>Self-Help</div>
                    <div className="gen pinkpastel" onClick={() => handleGenreClick("Poetry")}>Poetry</div>
                    <div className="gen darkgreenpastel" onClick={() => handleGenreClick("Non-fiction")}>Non-fiction</div>
                    <div className="gen purplepastel" onClick={() => handleGenreClick("Educational")}>Educational</div>
                    <div className="gen darkgreenpastel" onClick={() => handleGenreClick("Classics")}>Classics</div>
                </div>
            )}

            {showSearchResults && (
                <div className="search-results">
                    <div className="bookList">
                        {searchResults.map(book => (
                            <div className="bookItem" key={book.id}>
                                <div className='left-sec'>
                                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                                </div>
                                <div className='right-sec'>
                                    <h2>{book.volumeInfo.title}</h2>
                                    <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
                                    <p>{book.volumeInfo.description ? book.volumeInfo.description.slice(0, 350) + '...' : 'No description available'}</p>
                                    <a href="">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
    } else {
        return (
            <Authentication />
        );
    }
};

export default Browser;
