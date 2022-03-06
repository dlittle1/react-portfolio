import Navbar from './components/Navbar'
import { ThemeProvider } from '@mui/material'
import theme from './themes/primaryTheme'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Home />
        <Projects />
        <About />
      </ThemeProvider>
    </>
  )
}

export default App
