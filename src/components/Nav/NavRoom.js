import React from 'react';

import optionsIcon from '../../assets/options.svg';

function NavRoom ({name, active}) {
  return (
    <div className={`nav__item--room ${active && 'nav__item--room--active'}`}>
      {name}
      <div className={`room__options ${active && 'room__options--show'}`}>
        <img src={optionsIcon} alt="" className="room__options--img"/>
      </div>
    </div>
  )
}

export default NavRoom;