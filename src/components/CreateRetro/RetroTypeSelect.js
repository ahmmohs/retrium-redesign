import React from 'react';

function RetroTypeSelect ({ isActive, type }) {
  return (
    <div className={`retro__type__select ${isActive && 'retro__type__select--active'} flex--center`}>
      {type}
    </div>
  );
}

export default RetroTypeSelect;