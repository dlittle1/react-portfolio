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
              It all started when I was a college student studying
              communications of all things, I love marketing, and I love design,
              so I thought I could make a career of mixing the two with a
              communications degree. While in a design class we had to make an
              html 'portfolio' which was just a couple of paragraphs about what
              we are interested in. After writing just a few lines of code I was
              hooked!
            </p>
            <p>
              Then came code academy, and youtube videos, and constant stack
              overflow, but by the end of the semester I had a fully functioning
              'tinder for groups' app, where groups could find other groups to
              hang out with. Not only that but users could friend other users,
              create posts, like posts, etc. I was blown away by what I could do
              with just a little bit of code.
            </p>
            <p>
              Coding is who I am at my core, I love solving puzzles, I love
              design, and I love creating things for other people to enjoy.
            </p>

            <p>
              Full stack for me is where it's at, I can get into the meat of the
              app by designing the who, what, and how of backend design, then I
              get to move into the creative design aspects of frontend
              development. Seeing a page flourish from backend to frontend, and
              eventually become a published application that other users can
              access, excites me to no end.
            </p>
            <p>
              Right now I'm in find all, eat all mode. I can research and play
              with development technologies for hours and hours. I've recently
              been focusing on React, MongoDB, Express, Node.js, Redux,
              TypeScript, JavaScript, HTML, CSS. In the past I have used Ruby,
              Ruby on Rails, Bootstrap, C#, and Java, although It's been quite
              some time.
            </p>
            <p>
              Born and raised in Utah, so I guess I'm your typical Utahn when I
              say that I LOVE the outdoors, I love to ski, hike, bike, climb,
              fish, really anything outside. I love to travel, I love to see the
              world, and I love to meet new people.
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
