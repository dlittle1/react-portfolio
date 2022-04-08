import Navbar from './components/Navbar';
import { ThemeProvider } from '@mui/material';
import theme from './themes/primaryTheme';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import { useRef } from 'react';
import Project from './pages/Project';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <BrowserRouter>
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
            path='/'
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
