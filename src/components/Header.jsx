import React from 'react';
import { HeaderStyles } from './component-styles/AppStyles';
import trollFace from '../images/troll-face.png';
const Header = () => {
  return (
    <HeaderStyles>
      <img className="header-img" src={trollFace} alt="troll-face-icon" />
      <h2 className="header-title">Meme Generator</h2>
      <h4 className="header-project">React Course - Project 3</h4>
    </HeaderStyles>
  );
};

export default Header;
