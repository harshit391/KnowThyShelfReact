import React from 'react'
import Carl from './carl'
import Main from './Main'
import ChooseYourPick from './ChooseYourPick'
import HowKnowThyShelfWorks from './HowKnowThyShelfWorks'
import '../App.css'


const Landing = () => {
  return (
    <div>
      <Main/>
      <Carl/>
      <ChooseYourPick />
      <HowKnowThyShelfWorks/>      
    </div>
  )
}

export default Landing
