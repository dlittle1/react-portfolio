import React from 'react'
import {useParams} from 'react-router-dom'
import projectArray from '../projectArray.js'
import "../style_sheets/Project.css"
export default function Project(props){
   let { id } = useParams()
   const {title, subtitle, author, imgSrc} = projectArray[id - 1]
   return (
      <div className="project">
         <div className="img-carousel">
            <img src={imgSrc} />
         </div>
         <div className="body-text">
            <h1 className="title project-title">{title}<hr /></h1>
            <img className="title-arrow" src={require("../assets/arrow.png")}/><h3 className="title">feature 1</h3>
            <p className="title">{subtitle}</p>

            <img className="title-arrow" src={require("../assets/arrow.png")}/><h3 className="title">feature 2</h3>
            <p className="title">{author}</p>

            <img className="title-arrow" src={require("../assets/arrow.png")}/><h3 className="title">feature 3</h3>
            <p className="title">{author}</p>
         </div>
      </div>
   )
}
