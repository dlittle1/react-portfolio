import React from 'react'
import {useParams} from 'react-router-dom'
import projectArray from '../projectArray.js'
export default function Project(props){
   let { id } = useParams()
   const {title, subtitle, author} = projectArray[id - 1]
   return (
      <div>
         <h1>{title}</h1>
         <h1>{subtitle}</h1>
         <h1>{author}</h1>
      </div>
   )
}
