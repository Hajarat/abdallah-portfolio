import React from 'react';
import { Button } from 'antd';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import { colors } from '../../styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

const breakpointHeight = 800;

const Overwatch = ({
  selectedSrc,
  setSelectedSrc,
}) => {
  const { width, height } = useWindowDimensions();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: (height > breakpointHeight) ? 'column' : 'row',
        alignItems: (height < breakpointHeight) && 'flex-start',
        gap: '0.6rem',
        margin: '2.6rem',
        maxWidth: '1000px'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
        }}
      >
        <FontAwesomeIcon
          onMouseEnter={(event) => {
            document.body.style.cursor = 'pointer';
          }}
          onMouseLeave={(event) => {
            document.body.style.cursor = 'default';
          }}
          style={{
            padding: '2rem'
          }}
          onClick={() => setSelectedSrc(() => null)}
          icon={faChevronLeft}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          gap: '0.6rem'
        }}
      >
        <img
          src={selectedSrc}
          style={{
            height: '60vh',
            // position: 'absolute',
            // objectFit: 'cover',
            // transform: 'translate(-15%, 0)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
          }}
        >
          <img
            src={'/overwatch/xbox.jpeg'}
            style={card}
          />
          <img
            src={'/overwatch/console.jpeg'}
            style={card}
          />
          <img
            src={'/overwatch/console2.jpeg'}
            style={card}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: (height > breakpointHeight) ? 'row' : 'column',
          maxHeight: (height < breakpointHeight) && '60vh',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <h1
            style={{
              fontSize: (height > breakpointHeight) ? '60px' : '40px',
              margin: (height < breakpointHeight) && 0,
              textAlign: (height < breakpointHeight) && 'right'
            }}
          >
              Event Design
          </h1>
          <p
            style={{
              fontSize: (height > breakpointHeight) ? '21px' : '9px',
              textAlign: (height < breakpointHeight) && 'right',
            }}
          >
            This project was for event designing, which included designing tickets, website, poster, crowd monitors, staff clothing to booth design.
          </p>
        </div>
        <div>
          <h1
            style={{
              margin: 0,
              color: colors.black,
              fontSize: (height > breakpointHeight) ? 180 : 120,
              textAlign: (height < breakpointHeight) && 'right',
            }}
          >
            01
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Overwatch;

const card = {
  width: 'auto',
  height: 'calc(20vh - 0.4rem)',
  objectFit: 'cover',
  border: '0',
}