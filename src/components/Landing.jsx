import React from 'react'
import Carl from './carl'
import Main from './Main'
import ChooseYourPick from './ChooseYourPick'
import HowKnowThyShelfWorks from './HowKnowThyShelfWorks'
import '../App.css'
import Test from './Testimonials'

const Landing = () => {
  return (
    <div>
        <Main toshow={true}/>
      <Carl/>
      <ChooseYourPick />
      <HowKnowThyShelfWorks/>
      <Test/>      
    </div>
  )
}

export default Landing
