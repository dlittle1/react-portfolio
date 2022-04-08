import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/navbar.css';
const Navbar = (props) => {
  const [value, setValue] = useState('1');

  const handleChange = (e, newValue) => {
    setValue(newValue);

    if (newValue === '1') {
      props.homeRefProp.current.scrollIntoView({ block: 'center' });
    } else if (newValue === '2') {
      const projectsElem = props.projectsRefProp.current;
      const yOffset = -60;
      const y =
        projectsElem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      props.aboutRefProp.current.scrollIntoView();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkViewport);

    return () => {
      window.removeEventListener('scroll', checkViewport);
    };
  });

  function checkViewport(e) {
    const homePage = document.querySelector('#home');
    const projectsPage = document.querySelector('#projects');
    const aboutPage = document.querySelector('#about');
    const rectHome = homePage.getBoundingClientRect();
    const rectProjects = projectsPage.getBoundingClientRect();
    const rectAbout = aboutPage.getBoundingClientRect();

    if (isInViewport(rectHome)) {
      setValue('1');
    } else if (isInViewport(rectProjects)) {
      setValue('2');
    } else if (isInViewport(rectAbout)) {
      setValue('3');
    }
  }

  function isInViewport(rect) {
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  return (
    <>
      <nav className='nav'>
        <ul className='nav-items'>
          <li className='nav-item'>Home</li>
          <li className='nav-item' onClick={(e) => handleChange(e, '2')}>
            Projects
          </li>
          <li className='nav-item'>About Me</li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
