import React, { useEffect, useRef } from 'react';
import './component-styles/drawer.css';
import NavItem from './NavItem';
import projectData from '../data/projectData';

const Drawer = ({ drawerIsOpen, handleDrawer, drawerButtonRef }) => {
  const drawerRef = useRef(null);

  function handleClickOutside(event) {
    if (drawerRef.current.contains(event.target)) {
    } else {
      console.log(handleDrawer);
      handleDrawer();
    }

    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target) &&
      drawerButtonRef.current &&
      !drawerButtonRef.current.contains(event.target)
    ) {
      handleDrawer();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
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
