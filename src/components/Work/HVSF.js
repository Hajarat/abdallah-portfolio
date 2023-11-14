import React, { useRef } from 'react';
import { Button } from 'antd';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import { colors } from '../../styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import video from '../../assets/Tomato.mp4';

const breakpointHeight = 800;

const HVSF = ({
  selectedSrc,
  setSelectedSrc,
}) => {
  const { width, height } = useWindowDimensions();
  const [lowerDivHeight, setLowerDivHeight] = React.useState();
  const lowerDivRef = useRef();

  React.useEffect(() => {
    if (lowerDivRef.current) setLowerDivHeight(() => lowerDivRef.current.clientHeight);
  }, [lowerDivRef.current]);

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
        <div className='parent-element-to-selected-video'>
          <video
            style={{
              height: '60vh'
            }}
            autoPlay
            muted
          >
            <source
              src={video}
            />
          </video>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
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
        
        <div
          style={{
            display: 'flex',
            flexDirection: (height > breakpointHeight) ? 'row' : 'column',
            maxHeight: (height < breakpointHeight) && '60vh',
            justifyContent: 'space-between'
          }}
        >
          <h1 style={{fontSize: '60px'}}>HVSF</h1>
          <p style={{fontSize: '21px'}}>
            This project I designed the logo which is referring to having a technological farm logo, modeling the cup and the packaging.
          </p>
        </div>
    </div>
  );
};

export default HVSF;

const card = {
  height: 'calc(20vh-0.4rem)',
  objectFit: 'cover',
  border: 0,
}