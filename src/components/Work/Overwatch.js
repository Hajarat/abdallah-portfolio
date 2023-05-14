import React from 'react';
import { Button } from 'antd';

const Overwatch = ({
  selectedSrc
}) => {
  return (
    <div className='selected-work-main'>
      <div className='selected-work-para'>
        <h1>Overwatch</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
          }}
        />

      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '12rem',
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