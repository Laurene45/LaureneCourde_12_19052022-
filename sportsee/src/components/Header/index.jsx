import React from 'react';
import logo from '../../assets/SportSeeLogo.svg';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="nav-bar">
      <div>
        <img src={logo} alt="" />
      </div>
      
      <Link className="nav-link" to="/">
        Accueil
      </Link>
      <Link className="nav-link" to="/profil">
        Profil
      </Link>
      <Link className="nav-link" to="/reglage">
        Réglage
      </Link>
      <Link className="nav-link" to="/communite">
        Communauté
      </Link>
      
    </div>
  );
};

export default Header;
