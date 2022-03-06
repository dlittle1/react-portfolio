import React from 'react'
import aboutMePhoto from '../assets/me.jpg'
import { Box, Card, Grid, Typography } from '@mui/material'

const About = () => {
  return (
    <>
      <Grid container marginTop={40}>
        <Grid item xs={7}>
          <Box textAlign={'center'}>
            <Typography variant='h1'>something about</Typography>
            <Typography variant='h1' color='secondary.main'>
              Dylan Little
            </Typography>
            <Box mt={5}>
              <Typography variant='h5'>🍟 + 😴 + 💻 </Typography>
            </Box>
          </Box>
          <Box mt={5} px={20}>
            <Typography>
              I really do love to code, not only is it something that I can do
              professionaly but it's something that I'm truly passionate about.
              I enjoy taking complex problems and turning them into solutions.
            </Typography>
            <br />
            <Typography>
              I've been coding off and on for years, life has it's twists and
              turns which have thrown me through some loops, but I'm back and
              here to stay. I started in Ruby on Rails, some c++, and c#, but
              have since learned React, which is where my focus is now.
            </Typography>
            <br />
            <Typography>
              Born and raised in Utah, so I guess I'm your typical Utahn when I
              say that I LOVE the outdoors, I love to ski, hike, bike, climb,
              fish, really anything outside, I love to do it!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <img
              src={aboutMePhoto}
              style={{ width: '100%', borderRadius: '1rem' }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default About
