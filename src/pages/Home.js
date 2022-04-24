import React from 'react';
import '../styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import { HashLink } from 'react-router-hash-link';
import socialLinks from '../data/socialLinks';
import DevIcons from '../components/DevIcons';

const Home = (props) => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -90;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <div className='home'>
      <div id='home' ref={props.refProp}></div>
      <div>
        <div className='home-title-container'>
          <div className='home-title'>
            <h1>
              <span>&#123;</span>"Hello World. I'm{' '}
              <div className='home-title-name'>
                <h1>Dylan Little</h1>
              </div>
              ."
              <span>&#125;</span>
            </h1>
          </div>
          <div className='home-title-mobile'>
            <h1 className='home-title-hello'>Hello World. I'm</h1>

            <div className='home-title-name'>
              <h1>Dylan Little</h1>
            </div>
          </div>
          <h2 className='home-title-subtitle'>
            /* A developer and designer. */
          </h2>
          <div className='home-button-container'>
            <HashLink
              smooth
              to={`/#projects`}
              scroll={(el) => scrollWithOffset(el)}
              className='home-button'
            >
              View Projects
            </HashLink>
            <DevIcons />
            <div className='home-button-links'>
              {socialLinks.map((button, index) => (
                <a
                  key={button.name + index}
                  href={button.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='home-button-link'>
                    <FontAwesomeIcon
                      icon={button.icon}
                      data-tip
                      data-for={button.tooltip}
                      size='3x'
                    />
                    <ReactTooltip
                      id={button.tooltip}
                      place='bottom'
                      type='dark'
                      effect='float'
                    >
                      {button.tooltip}
                    </ReactTooltip>
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
