import Navbar from './components/Navbar'
import { ThemeProvider } from '@mui/material'
import theme from './themes/primaryTheme'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import { useRef } from 'react'
function App() {
  const homeRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar
          homeRefProp={homeRef}
          projectsRefProp={projectsRef}
          aboutRefProp={aboutRef}
        />
        <Home refProp={homeRef} />
        <Projects refProp={projectsRef} />
        <About refProp={aboutRef} />
      </ThemeProvider>
    </>
  )
}

export default App
