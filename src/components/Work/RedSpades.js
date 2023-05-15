import React from 'react';
import { Button } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import video from '../../assets/Spades.mp4';

const RedSpades = ({
  selectedSrc,
  setSelectedSrc
}) => {
  return (
    <div className='selected-work-main'>
      <div className='selected-work-para'>
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
        <h1 style={{fontSize: '60px'}}>RedSpades Website</h1>
        <p style={{fontSize: '21px'}}>
          This project was for RedSpades digital agency, the idea was to have a looped video, the video contains six buildings each building represent a department in the agency also a building in the middle with the main logo on top.
        </p>
      </div>
      <div className='parent-element-to-selected-video'>
        <video
          className='selected-video'
          autoPlay
          muted
        >
          <source
            src={video}
          />
        </video>
      </div>
    </div>
  );
};

export default RedSpades;