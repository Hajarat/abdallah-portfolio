import React from 'react';
import { Button } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

const Dental = ({
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
        <h1 style={{fontSize: '60px'}}>Logo Design</h1>
        <p style={{fontSize: '21px'}}>
          This project was for a dental clinic that was looking for a logo that can communicate with the age group of 7-10 years old, to encourage them to have early orthodontic care and to be seen as friendly as possible.
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
            transform: 'translate(-18%, -2%)',
          }}
        />

      </div>
    </div>
  );
};

export default Dental;