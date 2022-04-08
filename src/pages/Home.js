import React from 'react';
import '../styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import ReactTooltip from 'react-tooltip';

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
            <div className='home-icon-container'>
              <FontAwesomeIcon
                icon={faGit}
                size='3x'
                data-tip
                data-for='gitIcon'
              />
              <ReactTooltip id='gitIcon' place='top' type='dark' effect='float'>
                <p>git</p>
              </ReactTooltip>
            </div>
            <div className='home-icon-container'>
              <FontAwesomeIcon
                icon={faJava}
                size='3x'
                data-tip
                data-for='javaIcon'
              />
              <ReactTooltip
                id='javaIcon'
                place='top'
                type='dark'
                effect='float'
              >
                <p>Java</p>
              </ReactTooltip>
            </div>
            <div className='home-icon-container'>
              <FontAwesomeIcon
                icon={faReact}
                size='3x'
                data-tip
                data-for='reactIcon'
              />
              <ReactTooltip
                id='reactIcon'
                place='top'
                type='dark'
                effect='float'
              >
                <p>React</p>
              </ReactTooltip>
            </div>
            <div className='home-icon-container'>
              <FontAwesomeIcon
                icon={faNode}
                size='3x'
                data-tip
                data-for='nodeIcon'
              />
              <ReactTooltip
                id='nodeIcon'
                place='top'
                type='dark'
                effect='float'
              >
                <p>Node</p>
              </ReactTooltip>
            </div>
            <div className='home-icon-container'>
              <FontAwesomeIcon
                icon={faJsSquare}
                size='3x'
                data-tip
                data-for='jsIcon'
              />
              <ReactTooltip id='jsIcon' place='top' type='dark' effect='float'>
                <p>JavaScript</p>
              </ReactTooltip>
            </div>
            <div className='home-icon-container'>
              <FontAwesomeIcon
                icon={faHtml5}
                size='3x'
                data-tip
                data-for='htmlIcon'
              />
              <ReactTooltip
                id='htmlIcon'
                place='top'
                type='dark'
                effect='float'
              >
                <p>HTML</p>
              </ReactTooltip>
            </div>
            <div className='home-icon-container'>
              <FontAwesomeIcon
                icon={faCss3Alt}
                size='3x'
                data-tip
                data-for='cssIcon'
              />
              <ReactTooltip id='cssIcon' place='top' type='dark' effect='float'>
                <p>CSS</p>
              </ReactTooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
