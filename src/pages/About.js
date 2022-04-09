import React, { useRef } from 'react';
import aboutMePhoto from '../assets/me.jpg';
import { Box, Grid, Typography } from '@mui/material';

const About = (props) => {
  return (
    <>
      <div id='about'>
        <Grid item xs={12} md={7} p={1} sx={{ color: 'white' }}>
          <div>
            <h1 ref={props.refProp}>something about</h1>
            <h1>Dylan Little</h1>

            <Box mt={5}>
              <Typography variant='h5'>🍟 + 😴 + 💻 </Typography>
            </Box>
          </div>
          <div mt={5} px={{ xs: 5, md: 10, lg: 20 }}>
            <p>
              I really do love to code, not only is it something that I can do
              professionaly but it's something that I'm truly passionate about.
              I enjoy taking complex problems and turning them into solutions.
            </p>
            <br />
            <p>
              I've been coding off and on for years, life has it's twists and
              turns which have thrown me through some loops, but I'm back and
              here to stay. I started in Ruby on Rails, some c++, and c#, but
              have since learned React, which is where my focus is now.
            </p>

            <br />
            <p>
              Born and raised in Utah, so I guess I'm your typical Utahn when I
              say that I LOVE the outdoors, I love to ski, hike, bike, climb,
              fish, really anything outside, I love to do it!
            </p>
            <div id='about'></div>
          </div>
        </Grid>
        <Grid item xs={5} md={3} mt={5}>
          <Box>
            <img
              src={aboutMePhoto}
              style={{ maxWidth: '100%', borderRadius: '1rem' }}
            />
          </Box>
        </Grid>
      </div>
    </>
  );
};

export default About;
