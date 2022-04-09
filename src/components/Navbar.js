import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/navbar.css';
import NavItem from './NavItem';
const Navbar = (props) => {
  const [value, setValue] = useState('1');

  // const handleChange = (e, newValue) => {
  //   setValue(newValue);

  //   if (newValue === '1') {
  //     props.homeRefProp.current.scrollIntoView({ block: 'center' });
  //   } else if (newValue === '2') {
  //     const projectsElem = props.projectsRefProp.current;
  //     const yOffset = -60;
  //     const y =
  //       projectsElem.getBoundingClientRect().top + window.pageYOffset + yOffset;
  //     window.scrollTo({ top: y, behavior: 'smooth' });
  //   } else {
  //     props.aboutRefProp.current.scrollIntoView();
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', checkViewport);

  //   return () => {
  //     window.removeEventListener('scroll', checkViewport);
  //   };
  // });

  // function checkViewport(e) {
  //   const homePage = props.homeRefProp.current;
  //   const projectsPage = props.projectsRefProp.current;
  //   const aboutPage = props.aboutRefProp.current;
  //   const rectHome = homePage.getBoundingClientRect();
  //   const rectProjects = projectsPage.getBoundingClientRect();
  //   const rectAbout = aboutPage.getBoundingClientRect();

  //   if (isInViewport(rectHome)) {
  //     setValue('1');
  //   } else if (isInViewport(rectProjects)) {
  //     setValue('2');
  //   } else if (isInViewport(rectAbout)) {
  //     setValue('3');
  //   }
  // }

  // function isInViewport(rect) {
  //   return (
  //     console.log(rect.top, rect.bottom, rect.left, rect.right),
  //     rect.top >= 0 &&
  //       rect.left >= -1 &&
  //       rect.bottom <=
  //         (window.innerHeight || document.documentElement.clientHeight) &&
  //       rect.right <=
  //         (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }

  return (
    <>
      <nav className='projects-nav'>
        <ul className='nav-items' style={{ width: props.width }}>
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
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
