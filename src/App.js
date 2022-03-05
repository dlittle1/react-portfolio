import Navbar from './components/Navbar'
import { ThemeProvider } from '@mui/material'
import theme from './themes/primaryTheme'
import Home from './pages/Home'
import Projects from './pages/Projects'
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Home />
        <Projects />
      </ThemeProvider>
    </>
  )
}

export default App
