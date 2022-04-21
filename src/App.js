import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import { useRef } from 'react';
import Project from './pages/Project';
import Resume from './pages/Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/mobile.css';
function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route
          element={
            <Navbar
              homeRefProp={homeRef}
              projectsRefProp={projectsRef}
              aboutRefProp={aboutRef}
            />
          }
        >
          <Route
            path=''
            element={
              <>
                <Home refProp={homeRef} projectsRef={projectsRef} />
                <Projects refProp={projectsRef} />
                <About refProp={aboutRef} />
              </>
            }
          />
        </Route>
        <Route path='/projects/:projectId' element={<Project />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
