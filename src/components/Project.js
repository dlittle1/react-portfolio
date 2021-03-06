import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import "../style_sheets/Project.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import projectArray from '../projectArray.js';


export default function Project(props){
   let { id } = useParams()
   const history = useHistory();
   const {title, website, github, featuresArr, imgArr, published} = projectArray[id - 1]
   let maxWidthImage = "800px";
   if (id === "4"){
      maxWidthImage = "300px";
   }
   if (!published)
   {
      return (
         <div>
            <h1 style={{marginTop: 75, color: "white", marginLeft: 20}}>Coming soon...</h1>
         </div>
      )
   }
   else {
      const features = featuresArr.map((feature) => {
         return (
            <>
               <img className="title-arrow" src={require("../assets/arrow.png")}/><h3 className="title">{feature.title}</h3>
               <p className="title">{feature.text}</p>
            </>
         )
      })
      const images = imgArr.map((image) => {
         return (
            <div>
               <img style={{maxWidth: maxWidthImage}} src={image.imgSrc} />
               {image.subtitle === undefined ? "" : <p className="legend">{image.imgSubtitle}</p>}

            </div>
         )
      } )
      function handleNext()
      {
         history.push(`/projects/${Number(id) + 1}`)
      }
      return (
         <div className="project">
            <div className="img-carousel" style={{maxWidth: maxWidthImage}}>
               <Carousel dynamicHeight={true} autoPlay={true} infiniteLoop={true} interval={4000}>
                  {images}
               </Carousel>
            </div>
            <div className="body-text">
               <h1 className="title project-title">{title}

                  <hr />
                  {website === undefined ? "" : <><a target="_blank" href={website}>site: {website}</a><br/></>}
                  {github === undefined ? "" : <><a target="_blank" href={github}>github: {github}</a><br/></>}
               </h1>

               {features}
               <a className="projects-button title" style={{marginTop: '10px', display: "inline-block"}}>
                     {Number(id) === projectArray.length ? "" : <button onClick={handleNext} style={{float: "left"}}><h2>Next Project</h2></button>}
               </a>

            </div>

         </div>
      )
   }

}
