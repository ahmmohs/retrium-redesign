import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import GroupNote from './GroupNote';
import { useState } from 'react';

function GroupColumn ({ id, column }) {
	return (
		<Droppable droppableId={id} isCombineEnabled>
			{(provided, snapshot) => {
				return (
					<div
						className={snapshot.isDraggingOver ? 'column column--over' : 'column'}
					>
						<div className="column__header">
							<div>
								<div className="select__heading">{column.shortDesc}</div>
								<div className="heading">{column.name}</div>
							</div>
						</div>
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{column.items.map((item, index) => {
								return (
									<GroupNote id={item.id} index={index} note={item.content} key={index} />
								)
							})}
						</div>
						{provided.placeholder}
					</div>
				)
			}}
		</Droppable>
	);
}

export default GroupColumn;