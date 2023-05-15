import React, { useRef } from 'react';
import { Button } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import video from '../../assets/Fashion.mp4';

const Fashion = ({
  selectedSrc,
  setSelectedSrc,
}) => {
  const [lowerDivHeight, setLowerDivHeight] = React.useState();
  const lowerDivRef = useRef();

  React.useEffect(() => {
    if (lowerDivRef.current) setLowerDivHeight(() => lowerDivRef.current.clientHeight);
  }, [lowerDivRef.current]);

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      display: 'grid',
      gridTemplateColumns: '3fr 4fr',
      columnGap: 0,
    }}>
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
        <h1 style={{fontSize: '60px'}}>Fashion Design</h1>
        <p style={{fontSize: '21px'}}>
          This project where we had to figure out the approach for designing the clothings then we had to make cloth simulation for the 3d model.
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
      <div
        ref={lowerDivRef}
        style={{
          position: 'absolute',
          bottom: `${lowerDivHeight ? lowerDivHeight : '8rem'}`,
          left: '3rem',
          display: 'flex',
          flexDirection: 'row',
          gap: '0.6rem',
        }}
      >
        <img
          src={selectedSrc}
          style={card}
        />
        <img
          src={'/Fashion2.jpeg'}
          style={{
            ...card,
          }}
        />
      </div>
    </div>
  );
};

export default Fashion;

const card = {
  width: '340px',
  height: '220px',
  objectFit: 'cover',
  borderRadius: '5px',
  border: '3px solid white',
}