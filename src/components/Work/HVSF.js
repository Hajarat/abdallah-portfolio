import React, { useRef } from 'react';
import { Button } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import video from '../../assets/Tomato.mp4';

const HVSF = ({
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
        <h1 style={{fontSize: '60px'}}>HVSF</h1>
        <p style={{fontSize: '21px'}}>
          This project I designed the logo which is referring to having a technological farm logo, modeling the cup and the packaging.
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
          src={'/HVSFLogo.jpeg'}
          style={card}
        />
        <img
          src={'/HVSFQR.jpeg'}
          style={{
            ...card,
          }}
        />
        <img
          src={'/Tomato.jpeg'}
          style={card}
        />
      </div>
    </div>
  );
};

export default HVSF;

const card = {
  width: '340px',
  height: '220px',
  objectFit: 'cover',
  borderRadius: '5px',
  border: '3px solid white',
}