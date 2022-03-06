import React, { useRef } from 'react'
import RickAndMorty from '../assets/projectScreenshots/RickAndMortyHome.PNG'
import QuizApp from '../assets/projectScreenshots/QuizApp.PNG'
import { Box, Typography, Grid, Card } from '@mui/material'
const Projects = (props) => {
  const bracketColor = { color: '#BC5980' }
  return (
    <Box sx={{ height: '100vh' }}>
      <Box id='projects' ref={props.refProp}></Box>
      <Grid container spacing={4} padding={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <Typography variant='h5' sx={{ padding: '20px' }}>
              Rick and Morty Universe
            </Typography>
            <img
              src={RickAndMorty}
              style={{ maxWidth: '100%', float: 'right' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <Typography variant='h5' sx={{ padding: '20px' }}>
              Quiz App
            </Typography>
            <img src={QuizApp} style={{ maxWidth: '100%', float: 'right' }} />
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Projects
