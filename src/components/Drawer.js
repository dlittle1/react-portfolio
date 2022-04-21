import React, { useEffect, useRef } from 'react';
import './component-styles/drawer.css';
import NavItem from './NavItem';
import projectData from '../data/projectData';

const Drawer = ({ drawerIsOpen, handleDrawer }) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        handleDrawer();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (drawerIsOpen) {
    return (
      <div className='drawer' ref={drawerRef}>
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