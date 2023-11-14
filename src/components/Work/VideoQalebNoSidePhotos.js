import React from 'react';
import { Button } from 'antd';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import { colors } from '../../styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import spades from '../../assets/Spades.mp4';
import poop from '../../assets/poop.mp4';

const breakpointHeight = 800;

const VideoQalebNoSidePhotos = ({
  selectedSrc,
  setSelectedSrc,
  img1src,
  img2src,
  img3src,
  title,
  content,
  number,
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
        maxWidth: '1060px'
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
        <div className='parent-element-to-selected-video'>
          <video
            style={{
              height: '60vh'
            }}
            autoPlay
            muted
          >
            <source
              src={selectedSrc === '/Cyberpunk.jpeg' ? spades
                : poop
              }
            />
          </video>
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
        <div div style={{maxWidth: '520px'}}>
          <h1
            style={{
              fontSize: (height > breakpointHeight) ? '50px' : '30px',
              margin: (height < breakpointHeight) && 0,
              marginTop: (height > breakpointHeight) && '1rem',
              marginBottom: (height > breakpointHeight) && '1rem',
              textAlign: (height < breakpointHeight) && 'right'
            }}
          >
              {title}
          </h1>
          <p
            style={{
              marginTop: 0,
              fontSize: (height > breakpointHeight) ? '24px' : '12px',
              textAlign: (height < breakpointHeight) && 'right',
            }}
          >
            {content}
          </p>
        </div>
        <div>
          <h1
            style={{
              margin: 0,
              color: colors.black,
              fontSize: (height > breakpointHeight) ? 200 : 120,
              textAlign: (height < breakpointHeight) && 'right',
            }}
          >
            {number}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default VideoQalebNoSidePhotos;

const card = {
  width: 'auto',
  height: 'calc(20vh - 0.4rem)',
  objectFit: 'cover',
  border: '0',
}