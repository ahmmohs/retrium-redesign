import React, { useState } from 'react';

import addIcon from '../../../assets/add.svg';
import ThinkNote from './ThinkNote';

function ThinkColumn ({ title, desc, retroData, setRetroData }) {
	const [newestNote, setNewestNote] = useState(0);
  const colors = ['pink', 'blue', 'yellow'];
	
	function createNote () {
		const newRetroData = [...retroData];
		newRetroData.push({column: title, value: '', color: colors[Math.floor(colors.length * Math.random())]});
		setNewestNote(newRetroData.length - 1);
		setRetroData(newRetroData);
	}

	function updateNote (i, e) {
		let newRetroData = [...retroData];
		newRetroData[i].value = e.target.value;
		setRetroData(newRetroData);
	}

	function deleteNote (i) {
		let newRetroData = [...retroData];
		newRetroData.splice(i, 1);
		setRetroData(newRetroData);
	}

  return (
    <div className="column">
      <div className="column__header">
        <div>
          <div className="select__heading">{desc}</div>
          <div className="heading">{title}</div>
        </div>
        <div
					className="add__note__button"
					onClick={() => createNote()}
				>
          Add note
          <img src={addIcon} alt="" className="add__button--img"/>
        </div>
      </div>
			{
				retroData.filter(item => item.column === title).map((note) => (
					<ThinkNote note={note} i={retroData.indexOf(note)} updateNote={updateNote} deleteNote={deleteNote} newestNote={newestNote} />
				))
			}
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