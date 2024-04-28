import React from 'react'
import Header from "./Header";
// import Header from '../Authentication/Header/Header';
import Search from "./Search";
import Home from "./Home";
import Genre from "./Genre";
import Reading from "./Reading";
import '../../assets/css/Dashboard.css'
import { useEffect } from 'react';
import Calender from './Calender/Calender';


const Dashboard = () => {
  const books = [
        {
            title: "Book Title 1",
            author: "Author Name 1",
            image: "images/comic.jpg",
            info: "Description of Book 1. Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            title: "Book Title 2",
            author: "Author Name 2",
            image: "images/thriller.jpg",
            info: "Description of Book 2. Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            title: "Book Title 3",
            author: "Author Name 3",
            image: "images/fiction.jpg",
            info: "Description of Book 3. Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            title: "Book Title 1",
            author: "Author Name 1",
            image: "images/comic.jpg",
            info: "Description of Book 1. Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            title: "Book Title 2",
            author: "Author Name 2",
            image: "images/thriller.jpg",
            info: "Description of Book 2. Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            title: "Book Title 3",
            author: "Author Name 3",
            image: "images/fiction.jpg",
            info: "Description of Book 3. Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            title: "Book Title 1",
            author: "Author Name 1",
            image: "images/comic.jpg",
            info: "Description of Book 1. Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            title: "Book Title 2",
            author: "Author Name 2",
            image: "images/thriller.jpg",
            info: "Description of Book 2. Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            title: "Book Title 3",
            author: "Author Name 3",
            image: "images/fiction.jpg",
            info: "Description of Book 3. Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
    ];
    useEffect(() => {
    const searchBarIcon = document.querySelector('.profile .fas');
    const searchBar = document.querySelector('.search-bar');

    if (searchBarIcon && searchBar) {
        searchBarIcon.addEventListener('click', () => {
            if (searchBar.style.visibility === 'hidden') {
                searchBar.style.visibility = 'visible';
            } else {
                searchBar.style.visibility = 'hidden';
            }
        });
    }
}, []); 

    useEffect(() => {
    const container = document.querySelector('.love-read-collection');

    books.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('love-read-card');

        const img = document.createElement('img');
        img.src = book.image;
        img.alt = book.title;

        const title = document.createElement('h2');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;

        const info = document.createElement('p');
        info.textContent = book.info;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(info);
        container.appendChild(card);
    });

    const searchBarIcon = document.querySelector('.profile .fas');
    const searchBar = document.querySelector('.search-bar');

    searchBarIcon.addEventListener('click', () => {
        if (searchBar.style.visibility == 'hidden') {
            searchBar.style.visibility = 'visible';
        } else {
            searchBar.style.visibility = 'hidden';
        }
    });

})

  return (
    <div>
        <Header/>
        <Search/>
        <Home books = {books}/>
        <Genre/>
        <Reading/>
    </div>
  )
}

export default Dashboard
