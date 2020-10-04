import React from 'react';
import GroupNote from './GroupNote';
import { useState } from 'react';

function GroupColumn ({ title, desc, groupData, setGroupData }) {
	const [dragging, setDragging] = useState(false);
	const [currentDrag, setCurrentDrag]= useState(null);

	function handleDragStart (e) {

	}

	return (
		<div className="column">
			<div className="column__header">
				<div>
					<div className="select__heading">{desc}</div>
					<div className="heading">{title}</div>
				</div>
			</div>
			{
				groupData.length > 0 && groupData.filter(group => group.column === title)[0].items.map(item => (
					<GroupNote handleDragStart={handleDragStart} note={item} dragging={dragging} currentDrag={currentDrag} />
				))
			}
		</div>
	)
}

export default GroupColumn;