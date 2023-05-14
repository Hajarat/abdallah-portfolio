import React from 'react';

import {default as LogoSVG} from '../assets/logo.svg';

const Logo = (props) => {
  return <img src={LogoSVG}
    width={props.width || 240}
    height={props.height || 160}
    style={props.style}
  />
};

export default Logo;