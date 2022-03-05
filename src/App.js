import Navbar from './components/Navbar'
import { ThemeProvider } from '@mui/material'
import theme from './themes/primaryTheme'
import Home from './pages/Home'
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
