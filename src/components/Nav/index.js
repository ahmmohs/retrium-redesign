import React from 'react';

import logo from '../../assets/logo.svg';
import addIcon from '../../assets/add.svg';

import NavRoom from './NavRoom';

function Nav ({orgName, roomName}) {
  return (
    <div className="nav">
      <img src={logo} alt="" className="nav__logo"/>
      <div className="nav__section">
        <div className="nav__item">
          <div className="nav__item--title">My Organization</div>
          <div className="nav__item--text">Retrium</div>
        </div>
        <div className="nav__item">
          <div className="nav__item--title">
            Team Rooms
            <div className="nav__add">
              <img src={addIcon} alt="" className="nav__add--img"/>
            </div>
          </div>
          <NavRoom name="Product Design" active={true} />
          <NavRoom name="Frontend Devs" active={false} />
          <NavRoom name="Backend Devs" active={false} />
        </div>
      </div>
      <div className="nav__section">
        
      </div>
    </div>
  );
}

export default Nav;
