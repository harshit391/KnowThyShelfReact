import React from 'react'
import Carl from './carl'
import Main from './Main'
import ChooseYourPick from './ChooseYourPick'
import HowKnowThyShelfWorks from './HowKnowThyShelfWorks'
import MyBook from "./FlipBook"
import '../App.css'


const Landing = () => {
  return (
    <div>
      <Main/>
      <Carl/>
      <ChooseYourPick />
      <HowKnowThyShelfWorks/>  
      <MyBook/>    
    </div>
  )
}

export default Landing
