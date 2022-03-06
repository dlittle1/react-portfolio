import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../projectData'
import { Toolbar, Tabs, Tab, Box, Typography, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Project = () => {
  const params = useParams()
  const [value, setValue] = useState('2')
  const { title, description, importantPoints, imgs, github, website } =
    data[params.projectId]

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    const path = window.location.pathname
    if (path === '/projects/0') {
      if (value !== '2') {
        setValue('2')
      }
    } else if (path === '/projects/1') {
      if (value !== '3') {
        setValue('3')
      }
    }
  })

  return (
    <>
      <Toolbar sx={{ zIndex: 105 }}>
        <Tabs
          value={value}
          textColor='secondary'
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              display: 'none',
            },
          }}
          aria-label='tabs'
        >
          <Tab component={Link} to={'/'} label='Home' value='1' />
          <Tab
            component={Link}
            to={'/projects/0'}
            label='Rick And Morty'
            value='2'
          />
          <Tab component={Link} to={'/projects/1'} label='Quiz App' value='3' />
        </Tabs>
      </Toolbar>

      <Box>
        <Box textAlign={'center'}>
          <Typography variant='h1'>{title} </Typography>
        </Box>
        <Box textAlign={'center'}>
          <Typography variant={'h2'} sx={{ textDecoration: 'none' }}>
            <a
              href={github}
              target={'_blank'}
              style={{ textDecoration: 'none' }}
            >
              <FontAwesomeIcon icon={faGithub} style={{ color: 'white' }} />{' '}
            </a>
            <a
              href={website}
              target={'_blank'}
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
              )
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
  )
}

export default Project
