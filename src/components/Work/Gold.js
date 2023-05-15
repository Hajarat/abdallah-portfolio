import React, { useRef } from 'react';
import { Button } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

const Gold = ({
  selectedSrc,
  setSelectedSrc,
}) => {
  const [lowerDivHeight, setLowerDivHeight] = React.useState();
  const lowerDivRef = useRef();

  React.useEffect(() => {
    if (lowerDivRef.current) setLowerDivHeight(() => lowerDivRef.current.clientHeight);
  }, [lowerDivRef.current]);

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
        <h1 style={{fontSize: '60px'}}>Redbull Fifa Trophy</h1>
        <p style={{fontSize: '21px'}}>
          The model is a concept for a trophy from Redbull for a FIFA tournament, I participated in doing the lighting and texturing for the model.
        </p>
      </div>
      <div
        style={{
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <img
          src={selectedSrc}
          style={{
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            transform: 'translate(-28%, 0)',
          }}
        />

      </div>
      <div
        ref={lowerDivRef}
        style={{
          position: 'absolute',
          bottom: `6rem`,
          left: '3rem',
          display: 'flex',
          flexDirection: 'row',
          gap: '0.6rem',
        }}
      >
        <img
          src={'Gold-white.jpeg'}
          style={card}
        />
        <img
          src={'/Gold-blue.jpeg'}
          style={card}
        />
        <img
          src={'/Gold-alt.jpeg'}
          style={card}
        />
      </div>
    </div>
  );
};

export default Gold;

const card = {
  width: '340px',
  height: '220px',
  objectFit: 'cover',
  borderRadius: '5px',
  border: '3px solid white',
}