import React from 'react'
import styles from "../style_sheets/design.css.js"

export default function HeroText(){
   const {red, purpRed, whiteSmoke} = styles
   return (
      <div className="hero-text-block">
         <span className="hero-text">
            <h1 style={purpRed}>{'{'}</h1>
            <h1 style={whiteSmoke}>"Hello World. I'm</h1>
            <h1 style={red}>&nbsp;Dylan</h1>
            <h1 style={whiteSmoke}>"</h1>
            <h1 style={purpRed}>{'}'}</h1>
            <br/>
            <h2 style={whiteSmoke}>Full Stack Web Developer in SLC, UT</h2><br/>
         </span>
      </div>
   )
}
