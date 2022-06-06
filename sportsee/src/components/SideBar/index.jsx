import React from 'react';

import { ReactComponent as YogaIcon } from '../../assets/YogaIcon.svg';
import { ReactComponent as SwimIcon } from '../../assets/SwimIcon.svg';
import { ReactComponent as BodyBuildIcon } from '../../assets/BodyBuildIcon.svg';
import { ReactComponent as BycIcon } from '../../assets/BycIcon.svg';
import { Link } from 'react-router-dom';



const SideBar = () => {
  return (
    <aside className="side-bar">
      <nav>
        <Link to="/yoga">
          <YogaIcon className="icons" />
        </Link>
        <Link to="/swimming">
          <SwimIcon className="icons" />
        </Link>
        <Link to="/bodyBuilding">
          <BodyBuildIcon className="icons" />
        </Link>
        <Link to="/biking">
          <BycIcon className="icons" />
        </Link>
      </nav>
      <footer>Copyright, SportSee 2020</footer>
    </aside>
  );
};

export default SideBar;
