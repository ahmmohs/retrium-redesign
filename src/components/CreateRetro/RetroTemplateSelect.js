import React from 'react';
import RetroTypeSelect from './RetroTypeSelect';

function RetroTemplateSelect ({name, img, description, active, clickFn}) {
  return (
    <div className={`retro__template__select ${active && 'retro__template__select--active'}`} onClick={clickFn}>
      <div className="retro__select--img__wrapper">
        <img src={img} alt="" className="retro__select--img" />
      </div>
      <div className="retro__select__bottom">
        <div className="template__name">{name}</div>
        <div className="template__description">{description}</div>
      </div>
    </div>
  );
}

export default RetroTemplateSelect;