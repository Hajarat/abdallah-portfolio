import React, { Suspense } from 'react';
import { colors } from '../styles';

import video from '../assets/david.mp4';

const AboutMe = () => {
  return (
    <div className='aboutme'>
      <div className='aboutme-content'>
        <h1 style={{fontSize: 72}}>Abdallah Hajarat</h1>
        <p>
          I'm a 6th year student at German Jordanian University. I have a passion for design and visual communication, and I've been lucky enough to have the opportunity to study and develop my skills in these areas throughout my time at university. I love experimenting with different styles and techniques, and I'm always looking for new ways to challenge myself and push my creativity to the limit. When I'm not working on design projects, you can usually find me exploring new coffee shops, watching movies, or spending time with friends. I'm excited to see where my design journey will take me in the future, and I can't wait to see what opportunities and challenges lie ahead!
        </p>
      </div>
      <div className='parent-element-to-david-video'>
        <video
          className='david-video'
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

export default AboutMe;

{/* <Canvas>
  <ambientLight />
  <OrbitControls />
  <Suspense fallback={null}>
    <David />
  </Suspense>
</Canvas> */}