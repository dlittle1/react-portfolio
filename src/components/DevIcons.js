import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import devIconsData from '../data/devIconsData';
import ReactTooltip from 'react-tooltip';

const DevIcons = () => {
  return (
    <div className='home-icons'>
      {devIconsData.map((icon, index) => (
        <div key={icon.name + index} className='home-icon-container'>
          {icon.name === 'Redux' ? (
            <div className='home-icon-redux' data-tip data-for={icon.tooltip}>
              <i className='fak fa-redux fa-3x' />
            </div>
          ) : (
            <div className='home-icon' data-tip data-for={icon.tooltip}>
              <FontAwesomeIcon icon={icon.icon} size='3x' />
            </div>
          )}

          <ReactTooltip
            id={icon.tooltip}
            place='top'
            type='dark'
            effect='float'
          >
            {icon.tooltip}
          </ReactTooltip>
        </div>
      ))}
    </div>
  );
};

export default DevIcons;
