import React from 'react';
import logo from '../../assets/logo.png';

/*
 * Creates the horizontal header
 * @returns { HTMLElement }
 */

const Header = () => {
  return (
    <header className="header">
      <nav className="header__horizontal">
        <img src={logo} className="header__logo" alt="logo" />
        <ul className="header__list">
          <li className="header__list_name">Accueil</li>
          <li className="header__list_name">Profil</li>
          <li className="header__list_name">Réglages</li>
          <li className="header__list_name">Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
