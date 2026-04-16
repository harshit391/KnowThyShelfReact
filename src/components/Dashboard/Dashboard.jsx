import React, { useState } from 'react'
import Header from '../Authentication/Header/Header';
import Search from "./Search";
import Home from "./Home";
import Genre from "./Genre";
import Reading from "./Reading";
import '../../assets/css/Dashboard.css'
import { useEffect } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {app} from "../../context/Firebase"
import Authentication from '../Authentication';

import { useFirebase } from '../../context/Firebase';

const auth=getAuth(app);



const Dashboard = () => {
    const firebase = useFirebase();

    const [bookSet,setBookSet] = useState([]);
    

    useEffect(() => {

        firebase.listAllBooks().then(items => setBookSet(items.docs));


    },[])

    
const [user,setUser]=useState(null);

useEffect(()=>{
    const unsub = onAuthStateChanged(auth,(user)=>{
        if(user){
        setUser(user);
        }
        else{
        setUser(null);
        }
    });
    return unsub;
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
