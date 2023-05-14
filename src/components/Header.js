import React from 'react';
import { useNavigate } from 'react-router-dom';

import { colors } from '../styles';
import { Menu } from 'antd';

import Logo from './Logo';

const getItem = (label, key, icon) => ({
	key, icon, label
});

const items = [
	getItem('About Me', '/'),
	getItem('My Work', '/work'),
	//getItem('Contact', '/contact'),
];

const Header = () => {
  const navigate = useNavigate();
  const handleNavigation = ({ keyPath }) => {
		let navigationString = '';
		keyPath.forEach(key => {
			navigationString = key + navigationString;
		});
		navigate(navigationString);
	};

  return <Menu
    style={headerStyle}
    direction={'ltr'}
    mode='horizontal'
    items={items}
    selectedKeys={0}
    onSelect={(itemClicked) => handleNavigation(itemClicked)}
  />
};

export default Header;

const headerStyle = {
  justifyContent: 'center',
};