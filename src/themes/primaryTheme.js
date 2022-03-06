import { createTheme } from '@mui/material'

const redColor = '#BC5980'
export default createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: redColor,
    },
  },
  typography: {
    h1: {
      fontSize: '4.5rem',
      fontWeight: 700,
      color: 'white',
      '@media (max-width:500px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '3rem',
      color: 'white',
      fontWeight: 700,
    },
    h4: {
      color: redColor,
    },
    h5: {
      color: 'white',
    },
    body1: {
      color: 'white',
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'white',
          indicatorColor: 'white',
        },
      },
    },
  },
})
