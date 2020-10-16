import React from 'react';

function DiscussNote ({ note }) {
  return (
    <div className="note__wrapper">
      <div className={`note__container note__container--${note.color}`}>
        {note.value}
      </div>
    </div>
  )
}

export default DiscussNote;