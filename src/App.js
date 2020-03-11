import React from 'react';
import './style_sheets/App.css';
import Home from "./components/Home"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import {Switch, Route} from 'react-router-dom'

function App() {
   return (
      <div className="App">
         <Navbar />

         <Footer />
      </div>
   );
}

export default App;
