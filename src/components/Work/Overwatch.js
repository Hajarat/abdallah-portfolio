import React, { useRef } from 'react';
import { Button } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

const Overwatch = ({
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
        <h1 style={{fontSize: '60px'}}>Event Design</h1>
        <p style={{fontSize: '21px'}}>
          This project was for event designing, which included designing tickets, website, poster, crowd monitors, staff clothing to booth design.
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
            transform: 'translate(-15%, 0)',
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
  );
};

export default Overwatch;

const card = {
  width: '340px',
  height: '220px',
  objectFit: 'cover',
  borderRadius: '5px',
  border: '3px solid white',
}