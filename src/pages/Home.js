import { Typography, Box, Button, Grid } from '@mui/material'
import React from 'react'
import ReactLogo from '../assets/ReactColor.png'

const bracketColor = { color: '#BC5980' }
const nameColor = { color: '#D75F76' }
const Home = () => {
  return (
    <div style={{ height: '90vh', margin: 0, padding: 0 }}>
      <Box
        textAlign='center'
        sx={{
          overflow: 'hidden',
          position: 'relative',
          height: '100%',
        }}
      >
        <Grid container justifyContent='space-evenly' direction={'column'}>
          <Grid item md={9} xs={12} sx={{ marginTop: { xs: '0', md: '3rem' } }}>
            <Typography
              variant='h1'
              sx={{
                marginTop: '2rem',
                fontSize: { xs: '2rem', md: '3rem', lg: '4.5rem' },
              }}
            >
              <span style={bracketColor}>&#123;</span>"Hello World. I'm{' '}
              <span style={nameColor}>Dylan Little</span>."
              <span style={bracketColor}>&#125;</span>
            </Typography>
            <Typography
              variant='h2'
              sx={{ fontSize: { xs: '2rem', md: '3rem', lg: '4.5rem' } }}
            >
              A React Developer.
            </Typography>
            <Button
              variant='contained'
              color='secondary'
              sx={{ marginTop: '20px' }}
            >
              View Projects
            </Button>
          </Grid>
          <Grid item md={3}>
            <img
              src={ReactLogo}
              style={{ maxWidth: '70%', marginTop: '50px' }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Home
