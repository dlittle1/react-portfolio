import React from 'react'
import {Link} from 'react-router-dom'

import "../style_sheets/ProjectGrid.css"

export default function ProjectThumbnail(props){
   return (
      <div className="projectImage">
         <Link to={`projects/${props.index}`}><img src={props.imgSrc} style={{maxWidth: "100%", borderRadius: "10px"}}/></Link>
      </div>
   )
}
