import React from "react";
import Paper from "./HowKnowTheyShelfWorks/Paper";
import '../App.css'

const HowKnowThyShelfWorks = () => {

    return (
      <section className="section-inmiddleHowitworks">
        <div className="cont-paper-text">
          <h1 className="center-paper-text" style={{ fontSize: '35px', letterSpacing: '6px' }}>How KnowThyShelf Works</h1>
        </div>
        <div className="cont-papers">
          <Paper head="1. Create" para="Share your unique voice and original story on KnowThyShelf. Find the writing resources you need to craft a story only you can tell." paperClass = "p1"/>
          <Paper head="2. Build" para="Establish a global fan base as your story gains readership and momentum. Connect with other like-minded writers through storytelling." paperClass = "p2"/>
          <Paper head="3. Collaborate" para="Join writing communities, participate in forums, and collaborate with fellow authors to enhance your storytelling skills and broaden your audience reach." paperClass = "p3"/>
        </div>
      </section>
    )
}

export default HowKnowThyShelfWorks;