import React, { useRef } from 'react';
import RickAndMorty from '../assets/projectScreenshots/RickAndMortyHome.PNG';
import QuizApp from '../assets/projectScreenshots/QuizApp.PNG';
import { Box, Typography, Grid, Card } from '@mui/material';
import data from '../projectData.js';
import { Link } from 'react-router-dom';
const Projects = (props) => {
  const bracketColor = { color: '#BC5980' };
  console.log(data);
  return (
    <Box sx={{ marginBottom: { xs: '1rem', md: '20rem' } }}>
      <Box id='projects' ref={props.refProp}>
        <Typography
          textAlign='center'
          variant='h1'
          mb={3}
          xs={{ fontSize: { xs: '2rem', sm: '3rem', lg: '4.5rem' } }}
        >
          Projects
        </Typography>
      </Box>
      <Grid container spacing={4} padding={3}>
        {data.map((project, index) => (
          <Grid
            component={Link}
            to={`/projects/${index}`}
            item
            xs={12}
            md={6}
            key={index}
            sx={{ textDecoration: 'none' }}
          >
            <Card>
              <Typography variant='h5' sx={{ padding: '20px' }}>
                {project.title}
              </Typography>
              <img
                src={project.imgs[0]}
                style={{ maxWidth: '100%', float: 'right' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
