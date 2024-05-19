import React, { useState } from 'react'
import Header from '../Authentication/Header/Header';
import Search from "./Search";
import Home from "./Home";
import Genre from "./Genre";
import Reading from "./Reading";
import '../../assets/css/Dashboard.css'
import { useEffect } from 'react';

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {app} from "../../assets/scripts/firebase"
import Authentication from '../Authentication';

import { useFirebase } from '../../context/Firebase';

const auth=getAuth(app);



const Dashboard = () => {
    const firebase = useFirebase();

    const [bookSet,setBookSet] = useState([]);
    

    useEffect(() => {

        firebase.listAllBooks().then(items => setBookSet(items.docs));


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
    },[])

    
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
        <Home set={bookSet}/>
        <Genre set={bookSet}/>
        <Reading/>
    </div> 
  ) 
} else {
    return <Authentication />
}
}

export default Dashboard
