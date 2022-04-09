import React, { useState } from 'react';
import NavItem from './NavItem';
import projectsData from '../data/projectData';
import './component-styles/projectsNavbar.css';

const ProjectsNavbar = (props) => {
  return (
    <nav className='projects-nav'>
      <ul className='projects-nav-items' style={{ width: props.width }}>
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
    </nav>
  );
};

export default ProjectsNavbar;
