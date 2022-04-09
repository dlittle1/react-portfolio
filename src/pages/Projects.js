import React from 'react';
import projectData from '../data/projectData.js';
import { Link } from 'react-router-dom';
import '../styles/projects.css';
import Masonry from 'react-masonry-css';

const Projects = (props) => {
  const breakpoints = {
    default: 4,
    1700: 3,
    1500: 3,
    1250: 2,
    890: 2,
    592: 1,
  };

  return (
    <div className='projects'>
      <div id='projects' ref={props.refProp}>
        <h1>Projects</h1>
      </div>
      <Masonry
        breakpointCols={breakpoints}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {projectData.map((project, index) => (
          <div
            className='projects-project-container'
            key={project.title + index}
          >
            <Link to={`/projects/${index}`}>
              <div key={project.title + index}>
                <h5>{project.title}</h5>
              </div>
              <img
                src={project.imgs[0]}
                style={{ maxWidth: '100%', float: 'right' }}
                alt={project.title}
              />
            </Link>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Projects;
