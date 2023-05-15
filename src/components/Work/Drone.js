import React, { useRef } from 'react';
import { Button } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

const Drone = ({
  selectedSrc,
  setSelectedSrc
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
        <h1 style={{fontSize: '60px'}}>Drone Concept</h1>
        <p style={{fontSize: '21px'}}>
          This was a challenge for myself to make a drone concept drawing, modeling, texturing, rendering the model but after all it was a nice experience to have.
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
            transform: 'translate(-30%, 0)',
          }}
        />

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
          src={'/Drone.jpeg'}
          style={card}
        />
        <img
          src={'/Drone2.jpeg'}
          style={card}
        />
        <img
          src={'/Drone3.jpeg'}
          style={card}
        />
      </div>
    </div>
  );
};

export default Drone;

const card = {
  width: '340px',
  height: '220px',
  objectFit: 'cover',
  borderRadius: '5px',
  border: '3px solid white',
}