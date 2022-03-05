import React from 'react'
import RickAndMorty from '../assets/projectScreenshots/RickAndMortyHome.PNG'
import QuizApp from '../assets/projectScreenshots/QuizApp.PNG'
import { Box, Typography, Grid, Card } from '@mui/material'
const Projects = () => {
  const bracketColor = { color: '#BC5980' }
  return (
    <Box>
      <Typography variant='h2' sx={{ marginLeft: '20px' }}>
        <span style={bracketColor}>&#123;</span>Projects
        <span style={bracketColor}>&#125;</span>
      </Typography>
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
