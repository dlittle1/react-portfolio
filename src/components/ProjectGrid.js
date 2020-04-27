import React from 'react'
import "../style_sheets/ProjectGrid.css"
import ProjectThumbnail from "./ProjectThumbnail"
import projectArray from "../projectArray.js"
export default function ProjectGrid(){

   const images = projectArray.map((project, i)=> {
      if (project.published)
      {
         return (
            <ProjectThumbnail imgSrc={project.featuredImage} index={i + 1}/>
         )
      }
   })
   return (
      <div className="projectGrid">
         {images}
      </div>
   )
}
