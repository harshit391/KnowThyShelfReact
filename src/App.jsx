import React from 'react';
// import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Authentication from './components/Authentication';
import Profile from './components/Authentication/Profile';
import Browser from './components/Browser';
import LibraryComponent from './components/Library';
import Dashboard from './components/Dashboard/Dashboard';
import Premium from './components/Premium';
import Write from './components/Writing/Write';
// import PremiumPage from './components/Premium/PremiumSubscription';


const KnowThyShelf = () => {

  return (
    <>
     <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/library" element={<LibraryComponent />} />
        <Route path="/browser" element={<Browser />} />
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        {/* <Route path='/premium' element={<PremiumPage/>}></Route> */}
        <Route path='/authentication' element={<Authentication/>}></Route>  
        <Route path='/profile' element={<Profile/>}></Route>
        {/* Add more routes here if needed */}
        <Route path="/premium" element={<Premium/>}/>
        <Route path="/write" element={<Write/>}/>
      </Routes>
    </>
  );
};
  export default KnowThyShelf;