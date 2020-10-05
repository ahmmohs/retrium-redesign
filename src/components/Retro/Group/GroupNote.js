import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import dragIcon from '../../../assets/drag.svg';

function GroupNote ({id, index, note}) {
	return (
		<Draggable draggableId={id} index={index}>
			{(provided, snapshot) => (
					<div
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
						className="note__wrapper"
						style={{
							marginBottom: "8px",
							...provided.draggableProps.style
						}}
					>
						<div className={`note__container note__container--${note.color} note__container--group`}>
							<img src={dragIcon} alt="" className="drag__icon" />
							{note.value}
						</div>
					</div>
				)
			}
		</Draggable>
	)
}

export default GroupNote;