import React from 'react';
import '../styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';

const Home = (props) => {
  const handleClick = () => {
    props.projectsRef.current.scrollIntoView();
  };
  return (
    <div className='home'>
      <div id='home' ref={props.refProp}></div>
      <div>
        <div className='home-title-container'>
          <div>
            <h1>
              <span>&#123;</span>"Hello World. I'm{' '}
              <span className='home-title-name'>Dylan Little</span>."
              <span>&#125;</span>
            </h1>
          </div>
          <h2>A full stack web developer and designer.</h2>

          <button className='home-button' onClick={handleClick}>
            View Projects
          </button>
          <div className='home-icons'>
            <FontAwesomeIcon icon={faGit} size='3x' />

            <FontAwesomeIcon icon={faReact} size='3x' />

            <FontAwesomeIcon icon={faJsSquare} size='3x' />

            <FontAwesomeIcon icon={faHtml5} size='3x' />

            <FontAwesomeIcon icon={faCss3Alt} size='3x' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
