import React, {useState, useRef} from 'react'
import projectArray from "../projectArray"
import Project from "./Project"
import "../style_sheets/Home.css"
import "../style_sheets/Header.css"
import "../style_sheets/HeroText.css"
import { useHistory} from 'react-router-dom'
import Header from "./Header"
import HeroText from "./HeroText"
import ProjectGrid from "./ProjectGrid"

export default function Home(){
   const [projectsClicked, setProjectsClicked] = useState(false)
   const history = useHistory()
   const projectRef = useRef();
   function handleClick(event){
      projectRef.current.scrollIntoView({behavior: "smooth"});
   }

   const projects = projectArray.map(project => (<Project title={project.title} subtitle={project.subtitle} author={project.author}/>))
   return (
      <div className="home">
         <div>
            <Header />
            <main className="scroller ">
               <HeroText />
               <div className="projects-button-container">
                  <a className="projects-button">
                     <button onClick={handleClick}>
                        <h2>View Projects</h2>
                     </button>
                  </a>
               </div>
               <div ref={projectRef} style={{height: "800px"}}>
                  <img className="languagesFrameworks" src={require("../assets/home-full-screen/LanguagesAndFrameworks.png")} />
                  <ProjectGrid />
               </div>
            </main>
         </div>

         {projectsClicked ? projects : ""}
      </div>
   )
}
