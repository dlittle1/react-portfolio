import { Typography, Box, Button, Container } from '@mui/material'
import React from 'react'
import ReactLogo from '../assets/ReactColor.png'

const bracketColor = { color: '#BC5980' }
const nameColor = { color: '#D75F76' }
const Home = () => {
  return (
    <div style={{ height: '90vh', margin: 0, padding: 0 }}>
      <Box
        textAlign='center'
        pt={5}
        sx={{ overflow: 'hidden', position: 'relative', height: '100%' }}
      >
        <img
          src={ReactLogo}
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '-400px',
            marginLeft: '-450px',
            maxWidth: '900px',
            zIndex: -10,
          }}
        />
        <Container
          sx={{
            backgroundColor: 'rgba(44,44,44,0.5)',
            padding: '3rem',
            width: '700px',
          }}
        >
          <Typography variant='h1'>
            <span style={bracketColor}>&#123;</span>"Hello World. I'm{' '}
            <span style={nameColor}>Dylan Little</span>."
            <span style={bracketColor}>&#125;</span>
          </Typography>
          <Typography variant='h2'>A React Developer.</Typography>
          <Button
            variant='contained'
            color='secondary'
            sx={{ marginTop: '20px' }}
          >
            View Projects
          </Button>
        </Container>
      </Box>
    </div>
  )
}

export default Home
