import React, { useRef } from 'react';
import { Button } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import video from '../../assets/poop.mp4';

const Poop = ({
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
      gridTemplateColumns: '1fr 2fr',
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
        <h1 style={{fontSize: '60px'}}>Stop Motion</h1>
        <p style={{fontSize: '21px'}}>
          The project was to see how much creative we can be in terms of story telling and background design.
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

export default Poop;

const card = {
  width: '340px',
  height: '220px',
  objectFit: 'cover',
  borderRadius: '5px',
  border: '3px solid white',
}