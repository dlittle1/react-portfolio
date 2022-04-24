import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../data/projectData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ProjectsNavbar from '../components/ProjectsNavbar';
import '../styles/project.css';
import Drawer from '../components/Drawer';
import ImgsViewer from 'react-images-viewer';

const Project = () => {
  const params = useParams();
  const drawerButtonRef = useRef(null);
  const imagesRef = useRef(null);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const { title, description, importantPoints, imgs, github, website } =
    projectData[params.projectId];

  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const goToPrev = () => {
    setCurrentImage(currentImage - 1);
  };

  const goToNext = () => {
    setCurrentImage(currentImage + 1);
  };

  const toggleLightbox = () => {
    setIsOpen(!isOpen);
  };

  const handleDrawer = () => {
    setDrawerIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <ProjectsNavbar
        handleDrawer={handleDrawer}
        drawerButtonRef={drawerButtonRef}
      />
      <Drawer
        drawerIsOpen={drawerIsOpen}
        handleDrawer={handleDrawer}
        drawerButtonRef={drawerButtonRef}
      />
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
            <div
              dangerouslySetInnerHTML={{ __html: `<p>${description}</p>` }}
            ></div>{' '}
            <br />
            <h2>Key Points</h2>
            <div className='project-key-points'>
              {importantPoints.map((point, index) => {
                return (
                  <ul key={index}>
                    <li>{point}</li>
                  </ul>
                );
              })}
            </div>
          </div>
          <ImgsViewer
            imgs={imgs}
            currImg={currentImage}
            isOpen={isOpen}
            onClickPrev={goToPrev}
            onClickNext={goToNext}
            onClose={toggleLightbox}
            backdropCloseable={true}
          />
          <div className='project-images' ref={imagesRef}>
            {imgs.map((image, index) => (
              <img
                alt={`${title} screenshot #${index + 1} `}
                key={index}
                src={image.src}
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={() => {
                  toggleLightbox();
                  setCurrentImage(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
