import React from 'react';
import { Button } from 'antd';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import { colors } from '../../styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

const breakpointHeight = 800;

const QalebNoSidePhotos = ({
  selectedSrc,
  setSelectedSrc,
  title,
  content,
  number,
}) => {
  const { width, height } = useWindowDimensions();

  return (
    <div
      style={{
        justifyContent: 'center',
        display: 'flex',
        flexDirection: (height > breakpointHeight) ? 'column' : 'row',
        alignItems: (height < breakpointHeight) && 'flex-start',
        gap: '0.6rem',
        margin: '2.6rem',
        maxWidth: '860px'
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
            objectFit: 'cover',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: (height > breakpointHeight) ? 'row' : 'column',
          maxHeight: (height < breakpointHeight) && '60vh',
          justifyContent: 'space-between'
        }}
      >
        <div style={{maxWidth: '480px'}}>
          <h2
            style={{
              fontSize: (height > breakpointHeight) ? '50px' : '30px',
              margin: (height < breakpointHeight) && 0,
              marginTop: (height > breakpointHeight) && '1rem',
              marginBottom: (height > breakpointHeight) && '1rem',
              textAlign: (height < breakpointHeight) && 'right'
            }}
          >
              {title}
          </h2>
          <p
            style={{
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

export default QalebNoSidePhotos;

const card = {
  width: 'auto',
  height: 'calc(20vh - 0.4rem)',
  objectFit: 'cover',
  border: '0',
}