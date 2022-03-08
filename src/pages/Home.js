import { Typography, Box, Button, Grid, Container, Card } from '@mui/material'
import React from 'react'
import ReactLogo from '../assets/ReactColor.png'
import Projects from './Projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faGit } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'

const bracketColor = { color: '#BC5980' }
const nameColor = { color: '#D75F76' }
const icon = { color: '#2c2c2c', padding: '0' }
const Home = (props) => {
  const handleClick = () => {
    props.projectsRef.current.scrollIntoView()
  }
  return (
    <Box sx={{ height: '95vh', backgroundColor: '' }}>
      <Box id='home' ref={props.refProp}></Box>
      <Grid
        container
        sx={{
          marginTop: { xs: '150px' },
        }}
        justifyContent='center'
        direction='row'
        alignItems='center'
      >
        <Grid item textAlign={'center'} mb={5}>
          <Typography
            variant='h1'
            sx={{
              marginTop: '2rem',
              fontSize: { xs: '3rem', sm: '4rem', lg: '4.5rem' },
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
            variant='h5'
            sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' } }}
          >
            A full stack web developer and designer.
          </Typography>
          <Button
            variant='outlined'
            color='secondary'
            sx={{ marginTop: '20px' }}
            onClick={handleClick}
          >
            View Projects
          </Button>
        </Grid>
        <Grid item xs={11} pt={3}>
          <Grid container justifyContent='space-evenly' spacing={3}>
            <Grid item>
              <FontAwesomeIcon icon={faGit} size='3x' style={icon} />
            </Grid>
            <Grid item>
              <FontAwesomeIcon icon={faReact} size='3x' style={icon} />
            </Grid>
            <Grid item>
              <FontAwesomeIcon icon={faJsSquare} size='3x' style={icon} />
            </Grid>
            <Grid item>
              <FontAwesomeIcon icon={faHtml5} size='3x' style={icon} />
            </Grid>
            <Grid item>
              <FontAwesomeIcon icon={faCss3Alt} size='3x' style={icon} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
