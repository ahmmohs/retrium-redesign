import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import dragIcon from '../../../assets/drag.svg';

function GroupNote ({id, index, note }) {
	return (
		<Draggable draggableId={id} index={index} key={id}>
			{(provided, snapshot) => {
				return (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						className={snapshot.combineTargetFor ? "note__wrapper note__wrapper--combining" : "note__wrapper"}
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
				)}
			}
		</Draggable>
	)
}

export default GroupNote;