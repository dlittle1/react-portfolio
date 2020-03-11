import React from 'react'
import '../style_sheets/Navbar.css'
import styles from "../style_sheets/design.css.js"

export default function Navbar(){
   const {darkGrey, whiteSmoke, purpRed} = styles
   return (
      <div style={{backgroundColor: darkGrey.color}} className="navbar">
         <ul className="nav-top">
            <a><h3 style={{marginLeft: "-20px"}}><span style={purpRed}>{'{ '}</span>Home<span style={purpRed}>{' }'}</span></h3></a>

            <a><h3><span style={purpRed}>{'{ '}</span>Project 1<span style={purpRed}>{' }'}</span></h3></a>
            <a><h3><span style={purpRed}>{'{ '}</span>Project 2<span style={purpRed}>{' }'}</span></h3></a>
            <a><h3><span style={purpRed}>{'{ '}</span>Project 3<span style={purpRed}>{' }'}</span></h3></a>
            <a><h3><span style={purpRed}>{'{ '}</span>Project4<span style={purpRed}>{' }'}</span></h3></a>
         </ul>
      </div>
   )
}
