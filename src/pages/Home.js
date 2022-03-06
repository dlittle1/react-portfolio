import { Typography, Box, Button, Grid } from '@mui/material'
import React from 'react'
import ReactLogo from '../assets/ReactColor.png'
import Projects from './Projects'

const bracketColor = { color: '#BC5980' }
const nameColor = { color: '#D75F76' }
const Home = (props) => {
  const handleClick = () => {
    props.projectsRef.current.scrollIntoView()
  }
  return (
    <Box sx={{ height: { xs: '50vh', md: '100vh' }, margin: 0, padding: 0 }}>
      <Box id='home' ref={props.refProp}></Box>
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
              onClick={handleClick}
            >
              View Projects
            </Button>
          </Grid>
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '20px', sm: '0' },
              width: '100%',
              zIndex: -10,
            }}
          >
            <img
              src={ReactLogo}
              style={{ maxHeight: '60%', maxWidth: '60%', opacity: '0.1' }}
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default Home
