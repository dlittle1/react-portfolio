import React, {useState} from 'react'
import projectArray from "../projectArray"
import Project from "./Project"
import "../style_sheets/Home.css"
import styles from "../style_sheets/design.css.js"
import { useHistory} from 'react-router-dom'

export default function Home(){
   const [projectsClicked, setProjectsClicked] = useState(false)
   const history = useHistory()

   function handleClick(event){
      history.push('/projects/1')
   }
   const {red, purpRed, whiteSmoke} = styles
   const projects = projectArray.map(project => (<Project title={project.title} subtitle={project.subtitle} author={project.author}/>))
   return (
      <div className="home">
         <div>
            <header className='header'>
               <a href="https://github.com/dlittle1" target="_blank" className='links'><img src={require("../assets/home-full-screen/external-links/github-white.png")}/></a>
               <a href="https://www.linkedin.com/in/dylanlittle/" target="_blank" className='links'><img className='linkedin' src={require("../assets/home-full-screen/external-links/linkedin-white.png")}/></a>
            </header>
            <main>
               <div className="main">
                  <span className="hero-text">
                     <h1 style={purpRed}>{'{'}</h1>
                     <h1 style={whiteSmoke}>"Hello World. I'm</h1>
                     <h1 style={red}>&nbsp;Dylan</h1>
                     <h1 style={whiteSmoke}>"</h1>
                     <h1 style={purpRed}>{'}'}</h1>
                     <br/>
                     <h2 style={whiteSmoke}>Full Stack Web Developer in SLC, UT</h2>
                  </span>
               </div>
               <div className="projects-button-container">
                  <a className="projects-button">
                     <button onClick={handleClick}>
                        <h2>View Projects</h2>
                     </button>
                  </a>
               </div>
            </main>
         </div>

         {projectsClicked ? projects : ""}
      </div>
   )
}
