import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../data/projectData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ProjectsNavbar from '../components/ProjectsNavbar';
import '../styles/project.css';
import Drawer from '../components/Drawer';

const Project = () => {
  const params = useParams();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const { title, description, importantPoints, imgs, github, website } =
    projectData[params.projectId];

  const handleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <>
      <ProjectsNavbar handleDrawer={handleDrawer} />
      <Drawer drawerIsOpen={drawerIsOpen} handleDrawer={handleDrawer} />
      <div className='project'>
        <div>
          <h1>{title}</h1>
        </div>
        <div className='project-links'>
          <a
            href={github}
            target={'_blank'}
            rel='noreferrer'
            style={{ textDecoration: 'none' }}
          >
            <h2>
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: 'white' }}
                size='xl'
              />{' '}
            </h2>
          </a>
          <a
            href={website}
            target={'_blank'}
            rel='noreferrer'
            style={{ textDecoration: 'none' }}
          >
            <button>Website</button>
          </a>
        </div>
        <div className='project-container'>
          <div className='project-description'>
            <h2>Description</h2>
            <p>{description}</p> <br />
            <h2>Key Points</h2>
            {importantPoints.map((point, index) => {
              return (
                <div key={index}>
                  <p> - {point}</p>
                </div>
              );
            })}
          </div>

          <div className='project-images'>
            {imgs.map((image, index) => (
              <img key={index} src={image} style={{ width: '100%' }} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
