import { Typography, Box, Button, Grid, Container, Card } from '@mui/material'
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
    <Box sx={{ height: '95vh', margin: 0, padding: 0, backgroundColor: '' }}>
      <Box id='home' ref={props.refProp}></Box>
      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          height: '100%',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            marginTop: { xs: '150px' },
          }}
        >
          <Typography
            variant='h1'
            sx={{
              marginTop: '2rem',
              fontSize: { xs: '4rem', sm: '4rem', lg: '4.5rem' },
              marginBottom: '10px',
              marginLeft: '10px',
              marginRight: '10px',
            }}
          >
            <span style={bracketColor}>&#123;</span>"Hello World. I'm{' '}
            <span style={nameColor}>Dylan Little</span>."
            <span style={bracketColor}>&#125;</span>
          </Typography>
          <Typography
            variant='h1'
            sx={{ fontSize: { xs: '3rem', sm: '4rem' } }}
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
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '400px', sm: '450px', md: '100px', lg: '0' },
            width: '100%',
            zIndex: -10,
          }}
        >
          <img
            src={ReactLogo}
            style={{ maxHeight: '60%', maxWidth: '60%', opacity: '0.1' }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Home
