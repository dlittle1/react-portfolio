import React from 'react'

export default function Header(){
   return (
      <header className='header'>
         <a href="https://github.com/dlittle1" target="_blank" className='links'><img src={require("../assets/home-full-screen/external-links/github-white.png")}/></a>
         <a href="https://www.linkedin.com/in/dylanlittle/" target="_blank" className='links'><img className='linkedin' src={require("../assets/home-full-screen/external-links/linkedin-white.png")}/></a>
      </header>
   )
}
