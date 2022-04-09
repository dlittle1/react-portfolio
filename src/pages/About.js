import React, { useRef } from 'react';
import aboutMePhoto from '../assets/me.jpg';
import '../styles/about.css';

const About = (props) => {
  return (
    <>
      <div id='about' className='about'>
        <div className='about-container'>
          <div className='about-description'>
            <h2>
              Something about{' '}
              <span className='home-title-name'>Dylan Little</span>
            </h2>
            <p>
              I really do love to code, not only is it something that I can do
              professionaly but it's something that I'm truly passionate about.
              I enjoy taking complex problems and turning them into solutions.
            </p>

            <p>
              I've been coding off and on for years, life has it's twists and
              turns which have thrown me through some loops, but I'm back and
              here to stay. I started in Ruby on Rails, some c++, and c#, but
              have since learned React, which is where my focus is now.
            </p>

            <p>
              Born and raised in Utah, so I guess I'm your typical Utahn when I
              say that I LOVE the outdoors, I love to ski, hike, bike, climb,
              fish, really anything outside, I love to do it!
            </p>
            <div id='about'></div>
          </div>
          <div className='about-image'>
            <img
              src={aboutMePhoto}
              style={{ maxWidth: '100%', borderRadius: '1rem' }}
              alt={'Dylan Little'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
