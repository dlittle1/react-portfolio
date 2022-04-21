import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import devIconsData from '../data/devIconsData';
import ReactTooltip from 'react-tooltip';

const DevIcons = () => {
  return (
    <div className='home-icons'>
      {devIconsData.map((icon, index) => (
        <div key={icon.name + index} className='home-icon-container'>
          <FontAwesomeIcon
            icon={icon.icon}
            data-tip
            data-for={icon.tooltip}
            size='3x'
          />
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
