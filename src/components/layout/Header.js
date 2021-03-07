import React from 'react';

import logo from '../../images/header/logo.png';

import '../../stylesheets/layout/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Rick and Morty character list</h1>
      <img className="header__img" src={logo} alt="" />
    </header>
  );
};

export default Header;
