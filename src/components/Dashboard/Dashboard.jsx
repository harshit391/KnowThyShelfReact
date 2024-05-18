import React, { useState } from 'react'
import Header from '../Authentication/Header/Header';
import Search from "./Search";
import Home from "./Home";
import Genre from "./Genre";
import Reading from "./Reading";
import '../../assets/css/Dashboard.css'
import { useEffect } from 'react';
import Calender from './Calender/Calender';

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {app} from "../../assets/scripts/firebase"
import Authentication from '../Authentication';

import { useFirebase } from '../../context/Firebase';

const auth=getAuth(app);



const Dashboard = () => {
    const firebase = useFirebase();
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

    const [bookSet,setBookSet] = useState([]);
    

    useEffect(() => {

        firebase.listAllBooks().then(items => setBookSet(items.docs));

        const container = document.querySelector('.love-read-collection');

        if (container === null) return;

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

        let searchBarIcon = document.querySelector('.profile .fas');
        if (searchBarIcon === null) searchBarIcon = document.querySelector('.profilePic .fas');
        if (searchBarIcon === null) {
            return;
        }

        const searchBar = document.querySelector('.search-bar');

        searchBarIcon.addEventListener('click', () => {
            if (searchBar.style.visibility == 'hidden') {
                searchBar.style.visibility = 'visible';
            } else {
                searchBar.style.visibility = 'hidden';
            }
        });
    })

    
const [user,setUser]=useState(null);

useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
        setUser(user);
        
        }
        else{
        console.log("Your are logged out");
        setUser(null);
        }
    })
    },[])

    if (user) {

  return (
    
    <div>
        <Header prev="dashboard"/>
        <Search/>
        <Home books = {books} set={bookSet}/>
        <Genre/>
        <Reading/>
    </div> 
  ) 
} else {
    return <Authentication />
}
}

export default Dashboard
