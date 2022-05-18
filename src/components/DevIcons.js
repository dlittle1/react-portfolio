import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import devIconsData from '../data/devIconsData';
import ReactTooltip from 'react-tooltip';

const DevIcons = () => {
  const [tooltip, showTooltip] = React.useState(true);

  return (
    <div className='home-icons'>
      {devIconsData.map((icon, index) => (
        <div key={icon.name + index} className='home-icon-container'>
          {icon.name === 'Redux' ? (
            <div
              className='home-icon-redux'
              data-tip
              data-for={icon.tooltip}
              onMouseEnter={() => showTooltip(true)}
              onMouseLeave={() => {
                showTooltip(false);
                setTimeout(() => {
                  showTooltip(true);
                }, 50);
              }}
            >
              <i className='fak fa-redux fa-3x' />
            </div>
          ) : (
            <>
              <div
                className='home-icon'
                data-tip
                data-for={icon.tooltip}
                onMouseEnter={() => showTooltip(true)}
                onMouseLeave={() => {
                  showTooltip(false);
                  setTimeout(() => {
                    showTooltip(true);
                  }, 50);
                }}
              >
                <FontAwesomeIcon icon={icon.icon} size='3x' />
              </div>
            </>
          )}
          {tooltip && (
            <ReactTooltip id={icon.tooltip} type='dark' effect='float'>
              {icon.tooltip}
            </ReactTooltip>
          )}
        </div>
      ))}
    </div>
  );
};

export default DevIcons;
