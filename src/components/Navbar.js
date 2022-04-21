import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/navbar.css';
import NavItem from './NavItem';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
const Navbar = (props) => {
  const [value, setValue] = useState('1');

  const socialNavLinks = [
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

  return (
    <>
      <nav className='projects-nav'>
        <ul className='nav-items' style={{ width: props.width }}>
          <div className='nav-links-main'>
            <NavItem
              title='Home'
              value='1'
              linkTo={'home'}
              classname={value === '1' ? 'active' : ''}
            />
            <NavItem
              title='Projects'
              value='2'
              linkTo={'projects'}
              classname={value === '2' ? 'active' : ''}
            />
            <NavItem
              title='About'
              value='3'
              linkTo={'about'}
              classname={value === '3' ? 'active' : ''}
            />
          </div>
          <div className='nav-links-social'>
            {socialNavLinks.map((link, index) => (
              <li key={link + index}>
                <a
                  href={link.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='social-nav-item'
                >
                  <FontAwesomeIcon icon={link.icon} size='2x' />
                </a>
              </li>
            ))}
          </div>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
