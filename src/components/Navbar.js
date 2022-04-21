import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/navbar.css';
import NavItem from './NavItem';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import socialNavLinks from '../data/socialLinks';
const Navbar = (props) => {
  const [value, setValue] = useState('1');

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
                  <FontAwesomeIcon
                    data-tip
                    data-for={link.tooltip}
                    icon={link.icon}
                    size='2x'
                  />
                  <ReactTooltip
                    id={link.tooltip}
                    place='bottom'
                    type='dark'
                    effect='solid'
                  >
                    {link.tooltip}
                  </ReactTooltip>
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
