import React from 'react';
import data from '../projectData.js';
import { Link } from 'react-router-dom';
import '../styles/projects.css';
const Projects = (props) => {
  console.log(data);
  return (
    <div className='projects'>
      <div id='projects' ref={props.refProp}>
        <h1>Projects</h1>
      </div>
      <div className='projects-container'>
        {data.map((project, index) => (
          <Link to={`/projects/${index}`}>
            <div className='projects-project-container'>
              <div key={project.title + index}>
                <h5>{project.title}</h5>
                <img
                  src={project.imgs[0]}
                  style={{ maxWidth: '100%', float: 'right' }}
                  alt={project.title}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
