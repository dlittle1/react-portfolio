import Navbar from './components/Navbar'
import { ThemeProvider } from '@mui/material'
import theme from './themes/primaryTheme'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import { useRef } from 'react'
import Project from './pages/Project'
import { HashRouter, Routes, Route } from 'react-router-dom'
function App() {
  const homeRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  return (
    <>
      <ThemeProvider theme={theme}>
        <HashRouter basename='/'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Navbar
                    homeRefProp={homeRef}
                    projectsRefProp={projectsRef}
                    aboutRefProp={aboutRef}
                  />
                  <Home refProp={homeRef} projectsRef={projectsRef} />
                  <Projects refProp={projectsRef} />
                  <About refProp={aboutRef} />
                </>
              }
            />
            <Route path='/Projects/:projectId' element={<Project />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  )
}

export default App
