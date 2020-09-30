import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

function ThinkNote () {
  const colors = ['pink', 'blue', 'yellow'];
  return (
    <div className="note__wrapper">
      <div className={`note__container note__container--${colors[Math.floor(colors.length * Math.random())]}`}>
        <TextareaAutosize placeholder="Type your note here..." className="note__textarea" />
      </div>
      <div className="delete__note">Delete</div>
    </div>
  );
}

export default ThinkNote;