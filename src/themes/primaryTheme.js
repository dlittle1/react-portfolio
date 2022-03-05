import { createTheme } from '@mui/material'

export default createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#BC5980',
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
