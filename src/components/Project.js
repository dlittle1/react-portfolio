import React from 'react'

export default function Project(props){
   return (
      <div>
         <h1>{props.title}</h1>
         <h1>{props.subtitle}</h1>
         <h1>{props.author}</h1>
      </div>
   )
}
