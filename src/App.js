import React from 'react';
import './style_sheets/App.css';
import Home from "./components/Home"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import {Switch, Route} from 'react-router-dom'

function App() {
   return (
      <>
         <Switch>
            <Route exact path='/'>
               <Navbar />
               <Home />
               <Footer />
            </Route>

            <Route exact path='#'>
               <Navbar />
               <Home />
               <Footer />
            </Route>

            <Route path='/react-portfolio'>
               <Navbar />
               <Home />
               <Footer />
            </Route>

            <Route path='/projects/:id' children={<><Navbar /><Project /><Footer /></>} />
         </Switch>
      </>
   );
}

export default App;
