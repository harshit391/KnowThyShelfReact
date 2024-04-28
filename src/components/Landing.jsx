import React from 'react'
import Carl from './carl'
import Main from './Main'
import ChooseYourPick from './ChooseYourPick'
import HowKnowThyShelfWorks from './HowKnowThyShelfWorks'
import Test from './Testimonials'
import '../App.css'

const Landing = () => {
  return (
    <div>
        <Main/>
      <Carl/>
      <ChooseYourPick />
      <HowKnowThyShelfWorks/>
      <Test/>
      
    </div>
  )
}

export default Landing
