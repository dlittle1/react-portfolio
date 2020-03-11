import React from 'react'
import '../style_sheets/Navbar.css'
import styles from "../style_sheets/design.css.js"
import Home from "./Home"
import Project from "./Project"
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'

export default function Navbar(){

   const {darkGrey, purpRed} = styles
   return (
      <Router>
         <div style={{backgroundColor: darkGrey.color}} className="navbar">
            <ul className="nav-top">
               <Link to="/"><h3 style={{marginLeft: "-20px"}}><span style={purpRed}>{'{ '}</span>Home<span style={purpRed}>{' }'}</span></h3></Link>
               <Link to="/projects/1"><h3><span style={purpRed}>{'{ '}</span>Project 1<span style={purpRed}>{' }'}</span></h3></Link>
               <Link to="/projects/2"><h3><span style={purpRed}>{'{ '}</span>Project 2<span style={purpRed}>{' }'}</span></h3></Link>
               <Link to="/projects/3"><h3><span style={purpRed}>{'{ '}</span>Project 3<span style={purpRed}>{' }'}</span></h3></Link>
               <Link to="/projects/4"><h3><span style={purpRed}>{'{ '}</span>Project 4<span style={purpRed}>{' }'}</span></h3></Link>
            </ul>
         </div>
         <Switch>
            <Route exact path='/'>
               <Home />
            </Route>
            <Route path='/react-portfolio'>
               <Home />
            </Route>
            <Route path='/projects/:id' children={<Project />} />
         </Switch>
      </Router>

   )
}
