import { createTheme } from '@mui/material'

export default createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#BC5980',
    },
  },
  typography: {
    h1: {
      fontSize: '4.5rem',
      fontWeight: 700,
      color: 'white',
    },
    h2: {
      fontSize: '4.5rem',
      color: 'white',
      fontWeight: 700,
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
