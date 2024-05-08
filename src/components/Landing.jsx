import React from 'react'
import Carl from './carl'
import Main from './Main'
import ChooseYourPick from './ChooseYourPick'
import HowKnowThyShelfWorks from './HowKnowThyShelfWorks'
import '../App.css'
import Magazine from './Magazine'

const Landing = () => {
  return (
    <div>
      <Main showOrNot={true}/>
      <Carl/>
      <ChooseYourPick />
      <HowKnowThyShelfWorks/>
      <Magazine />
    </div>
  )
}

export default Landing
