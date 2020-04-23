import React, {useState} from 'react'
import '../style_sheets/Navbar.css'
import styles from "../style_sheets/design.css.js"
import Home from "./Home"
import Project from "./Project"
import Modal from "./Modal"
import {Switch, Route, Link, useLocation} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'

export default function Navbar(){
   const [modalOn, setModalOn] = useState(false)
   const location = useLocation()
   const {darkGrey, purpRed, whiteSmoke} = styles
   const locationArr = location.pathname.split("/")
   let projectLocation = locationArr.includes("projects") ? true : false
   let navColor = darkGrey
   let linkColor = whiteSmoke
   let iconChange = false

   function handleModal(){
      console.log("clicked", modalOn);
      setModalOn(() => !modalOn)
   }

   return (
      <>
         {modalOn ? <Modal handleModal={handleModal} navColor={navColor} linkColor={linkColor} projectLocation={projectLocation}/> : ""}
            <div style={{backgroundColor: navColor.color}} className="navbar">
               <ul className="nav-top">
                  <Link to="/">
                     <h3 style={{marginLeft: "-20px"}}>
                        <span style={linkColor} className="nav-item">Home</span>
                     </h3>
                  </Link>
                  <Link to="/projects/1">
                     <h3>
                        <span style={linkColor}>Trivia App</span>
                     </h3>
                  </Link>
                  <Link to="/projects/2">
                     <h3>
                        <span style={linkColor}>Project 2</span>
                     </h3>
                  </Link>
                  <Link to="/projects/3">
                     <h3>
                        <span style={linkColor}>Project 3</span>
                     </h3>
                  </Link>
                  <Link to="/projects/4">
                     <h3>
                        <span style={linkColor}>Project 4</span>
                     </h3>
                  </Link>
                  <button onClick={handleModal} style={{backgroundColor: navColor.color}}>{iconChange ? <img src={require("../assets/nav-icon-dark.png")} /> : <img src={require("../assets/nav-icon.png")} />}</button>
               </ul>
            </div>
         </>
   )
}
