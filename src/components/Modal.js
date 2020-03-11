import React from 'react'
import styles from "../style_sheets/design.css.js"
import Home from "./Home"
import Project from "./Project"
import {BrowserRouter as Router, Link, useHistory} from 'react-router-dom'
export default function Modal(props){
   const {whiteSmoke, darkGrey, purpRed} = styles
   const history = useHistory()
   function handleChange(str){
      props.handleModal()
      history.push(str)
   }
   return (
      <div>
         <Router>
               <ul className="modal" style={{backgroundColor: darkGrey.color}}>
                  <Link onClick={() => handleChange("/")} to="/"><h3><span style={purpRed}>{'{ '}</span>Home<span style={purpRed}>{' }'}</span></h3></Link>
                  <Link onClick={() => handleChange("/projects/1")} to="/projects/1"><h3><span style={purpRed}>{'{ '}</span>Project 1<span style={purpRed}>{' }'}</span></h3></Link>
                  <Link onClick={() => handleChange("/projects/2")} to="/projects/2"><h3><span style={purpRed}>{'{ '}</span>Project 2<span style={purpRed}>{' }'}</span></h3></Link>
                  <Link onClick={() => handleChange("/projects/3")} to="/projects/3"><h3><span style={purpRed}>{'{ '}</span>Project 3<span style={purpRed}>{' }'}</span></h3></Link>
                  <Link onClick={() => handleChange("/projects/4")} to="/projects/4"><h3><span style={purpRed}>{'{ '}</span>Project 4<span style={purpRed}>{' }'}</span></h3></Link>
               </ul>
         </Router>
      </div>
   )
}
