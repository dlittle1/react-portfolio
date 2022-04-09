import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavItem = ({ handleUserClick, title, linkTo, value, classname }) => {
  const params = useParams();

  if (params.projectId) {
    return (
      <NavLink to={linkTo}>
        <li className='projects-nav-item'>{title}</li>
      </NavLink>
    );
  } else {
    return (
      <HashLink smooth to={`/#${linkTo}`} className={classname}>
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
