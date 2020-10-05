import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import dragIcon from '../../../assets/drag.svg';

function GroupNote ({note}) {
	return (
		<Draggable>
			<div draggable className="note__wrapper" style={{marginBottom: "8px"}}>
				<div className={`note__container note__container--${note.color} note__container--group`}>
					<img src={dragIcon} alt="" className="drag__icon" />
				{note.value}
				</div>
			</div>
		</Draggable>
	)
}

export default GroupNote;