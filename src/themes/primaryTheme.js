import { createTheme } from '@mui/material'

const textColor = '#2c2c2c'
const redColor = '#BC5980'
export default createTheme({
  palette: {
    secondary: {
      main: redColor,
    },
  },
  typography: {
    h1: {
      fontSize: '4.5rem',
      fontWeight: 700,
      color: textColor,
      '@media (max-width:500px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '3rem',
      color: textColor,
      fontWeight: 700,
    },
    h4: {
      color: textColor,
      fontWeight: 500,
    },
    h5: {
      color: textColor,
    },
    body1: {
      color: textColor,
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: textColor,
          indicatorColor: 'white',
        },
      },
    },
  },
})
