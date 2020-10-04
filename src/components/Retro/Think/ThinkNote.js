import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

function ThinkNote ({note, i, updateNote, deleteNote}) {
  return (
    <div className="note__wrapper">
      <div className={`note__container note__container--${note.color}`}>
        <TextareaAutosize
					placeholder="Type your note here..."
					className="note__textarea"
					value={note.value}
					onChange={e => updateNote(i, e)}
				/>
      </div>
      <div
				className="delete__note"
				onClick={() => deleteNote(i)}
			>
				Delete
			</div>
    </div>
  );
}

export default ThinkNote;