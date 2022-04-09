import React from 'react';
import './component-styles/drawer.css';
import NavItem from './NavItem';
import projectData from '../data/projectData';

const Drawer = ({ drawerIsOpen }) => {
  if (drawerIsOpen) {
    return (
      <div className='drawer'>
        <ul>
          <NavItem title='Home' linkTo={'/'} />
          {projectData.map((project, index) => (
            <NavItem
              key={project.title + index}
              title={project.title}
              index={index}
              linkTo={`/projects/${index}`}
            />
          ))}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Drawer;
