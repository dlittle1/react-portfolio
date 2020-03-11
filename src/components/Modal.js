import React from 'react'
import styles from "../style_sheets/design.css.js"
import Home from "./Home"
import Project from "./Project"
import {BrowserRouter as Router, Link, useHistory} from 'react-router-dom'
export default function Modal(props){
   const {whiteSmoke, darkGrey, purpRed} = styles
   const {navColor, linkColor, projectLocation } = props
   const history = useHistory()
   function handleChange(str){
      props.handleModal()
      history.push(str)
   }
   return (
      <Router>
            <ul className="modal" style={projectLocation ? {backgroundColor: navColor.color, marginTop: "30px"} : {backgroundColor: navColor.color, marginTop: "-2px"}}>
               <Link to="/" onClick={() => handleChange("/")}>
                  <h3 style={{marginLeft: "-20px"}}>
                     <span style={purpRed}>{'{ '}</span>
                        <span style={linkColor} className="nav-item">Home</span>
                     <span style={purpRed}>{' }'}</span>
                  </h3>
               </Link>
               <Link to="/projects/1" onClick={() => handleChange("/projects/1")}>
                  <h3>
                     <span style={purpRed}>{'{ '}</span>
                        <span style={linkColor}>Project 1</span>
                     <span style={purpRed}>{' }'}</span>
                  </h3>
               </Link>
               <Link to="/projects/2" onClick={() => handleChange("/projects/2")}>
                  <h3>
                     <span style={purpRed}>{'{ '}</span>
                        <span style={linkColor}>Project 2</span>
                     <span style={purpRed}>{' }'}</span>
                  </h3>
               </Link>
               <Link to="/projects/3" onClick={() => handleChange("/projects/3")}>
                  <h3>
                     <span style={purpRed}>{'{ '}</span>
                        <span style={linkColor}>Project 3</span>
                     <span style={purpRed}>{' }'}</span>
                  </h3>
               </Link>
               <Link to="/projects/4" onClick={() => handleChange("/projects/4")}>
                  <h3>
                     <span style={purpRed}>{'{ '}</span>
                        <span style={linkColor}>Project 4</span>
                     <span style={purpRed}>{' }'}</span>
                  </h3>
               </Link>
            </ul>
      </Router>
   )
}
