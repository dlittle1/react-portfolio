import React, { useState } from 'react';
import NavItem from './NavItem';
import projectsData from '../data/projectData';
import './component-styles/projectsNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const ProjectsNavbar = ({ handleDrawer, drawerButtonRef }) => {
  return (
    <nav className='projects-nav'>
      <ul className='projects-nav-items'>
        <NavItem title='Home' linkTo={'/'} />
        {projectsData.map((project, index) => (
          <NavItem
            key={project.title + index}
            title={project.title}
            index={index}
            linkTo={`/projects/${index}`}
          />
        ))}
      </ul>
      <ul className='projects-nav-drawer'>
        <li
          className='projects-nav-drawer-button'
          ref={drawerButtonRef}
          onClick={handleDrawer}
        >
          <FontAwesomeIcon icon={faBars} size='xl' />
        </li>
      </ul>
    </nav>
  );
};

export default ProjectsNavbar;
