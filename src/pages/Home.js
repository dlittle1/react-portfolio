import React from 'react';
import '../styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import { HashLink } from 'react-router-hash-link';

const Home = (props) => {
  const buttonLinks = [
    {
      name: 'Github',
      link: 'https://github.com/dlittle1',
      icon: faGithub,
      tooltip: 'Github',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/dylanlittle/',
      icon: faLinkedin,
      tooltip: 'LinkedIn',
    },
    {
      name: 'Stack Overflow',
      link: 'https://stackoverflow.com/users/4192210/dylan-little',
      icon: faStackOverflow,
      tooltip: 'Stack Overflow',
    },
    {
      name: 'Resume',
      link: 'https://github.com/dlittle1/resume/raw/main/Dylan%20Resume%20v3%20.pdf',
      icon: faFileAlt,
      tooltip: 'Resume',
    },
  ];

  const homeIcons = [
    {
      name: 'CSS3',
      icon: faCss3Alt,
      tooltip: 'CSS3',
    },
    {
      name: 'HTML5',
      icon: faHtml5,
      tooltip: 'HTML5',
    },
    {
      name: 'JavaScript',
      icon: faJsSquare,
      tooltip: 'JavaScript',
    },
    {
      name: 'React',
      icon: faReact,
      tooltip: 'React',
    },
    {
      name: 'Node',
      icon: faNode,
      tooltip: 'Node.js',
    },
    {
      name: 'Git',
      icon: faGit,
      tooltip: 'Git',
    },
    {
      name: 'Java',
      icon: faJava,
      tooltip: 'Java',
    },
  ];

  const handleClick = () => {
    props.projectsRef.current.scrollIntoView();
  };

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
              <span className='home-title-name'>Dylan Little</span>."
              <span>&#125;</span>
            </h1>
          </div>
          <div className='home-title-mobile'>
            <h1 className='home-title-hello'>Hello World. I'm</h1>
            <h1>
              <span className='home-title-name'>Dylan Little</span>
            </h1>
          </div>
          <h2>A developer and designer.</h2>
          <div className='home-button-container'>
            <HashLink
              smooth
              to={`/#projects`}
              scroll={(el) => scrollWithOffset(el)}
              className='home-button'
            >
              View Projects
            </HashLink>

            <div className='home-button-links'>
              {buttonLinks.map((button, index) => (
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
          <div className='home-icons'>
            {homeIcons.map((icon, index) => (
              <div key={icon.name + index} className='home-icon-container'>
                <FontAwesomeIcon
                  icon={icon.icon}
                  data-tip
                  data-for={icon.tooltip}
                  size='3x'
                />
                <ReactTooltip
                  id={icon.tooltip}
                  place='top'
                  type='dark'
                  effect='float'
                >
                  {icon.tooltip}
                </ReactTooltip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
