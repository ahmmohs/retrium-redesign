import React, { useState } from 'react';

import addIcon from '../../../assets/add.svg';

function ThinkColumn ({ title, desc, contents }) {
  const [notes, setNotes] = useState([]);


  return (
    <div className="column">
      <div className="column__header">
        <div>
          <div className="select__heading">{desc}</div>
          <div className="heading">{title}</div>
        </div>
        <div className="add__note__button">
          Add note
          <img src={addIcon} alt="" className="add__button--img"/>
        </div>
      </div>
      {
        /*
          <div className="new__note__wrapper">
            <TextareaAutosize className="new__note" placeholder="Type your note here..." />
          </div>
        */
      }
    </div>
  );
}

export default ThinkColumn;