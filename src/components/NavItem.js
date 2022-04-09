import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavItem = ({ handleUserClick, title, linkTo, value, classname }) => {
  const params = useParams();

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -90;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  if (params.projectId) {
    return (
      <NavLink to={linkTo}>
        <li className='projects-nav-item'>{title}</li>
      </NavLink>
    );
  } else {
    return (
      <HashLink
        smooth
        to={`/#${linkTo}`}
        className={classname}
        scroll={(el) => scrollWithOffset(el)}
      >
        <li
          className='projects-nav-item'
          onClick={(e) => handleUserClick(e, value)}
        >
          {title}
        </li>
      </HashLink>
    );
  }
};

export default NavItem;
