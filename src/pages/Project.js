import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../data/projectData';
import { Toolbar, Tabs, Tab, Box, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ProjectsNavbar from '../components/ProjectsNavbar';

const Project = () => {
  const params = useParams();

  const { title, description, importantPoints, imgs, github, website } =
    projectData[params.projectId];

  return (
    <>
      <ProjectsNavbar width='70%' />

      <Box>
        <Box textAlign={'center'}>
          <Typography variant='h1'>{title} </Typography>
        </Box>
        <Box textAlign={'center'}>
          <Typography variant={'h2'} sx={{ textDecoration: 'none' }}>
            <a
              href={github}
              target={'_blank'}
              rel='noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <FontAwesomeIcon icon={faGithub} style={{ color: '#2c2c2c' }} />{' '}
            </a>
            <a
              href={website}
              target={'_blank'}
              rel='noreferrer'
              style={{ textDecoration: 'none' }}
            >
              <Typography>Website: {website}</Typography>
            </a>
          </Typography>
        </Box>
        <Grid
          container
          justifyContent={'space-evenly'}
          sx={{ marginTop: '2rem' }}
          padding={5}
        >
          <Grid item xs={12} md={5}>
            <Typography variant='h4' sx={{ marginBottom: '5px' }}>
              Description
            </Typography>
            <Typography>{description}</Typography> <br />
            <Typography variant='h4' sx={{ marginBottom: '5px' }}>
              Key Points
            </Typography>
            {importantPoints.map((point, index) => {
              return (
                <Box key={index}>
                  <Typography>{point}</Typography>
                  <br />
                </Box>
              );
            })}
          </Grid>

          <Grid item xs={12} md={5}>
            {imgs.map((image, index) => (
              <img key={index} src={image} style={{ width: '100%' }} />
            ))}
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Project;
