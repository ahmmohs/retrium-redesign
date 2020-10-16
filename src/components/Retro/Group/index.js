import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { onDragEnd } from './useGroup';

import GroupColumn from './GroupColumn';

function Group ({ retro, retroData, setGroups }) {

	console.log(retro);
	const [columns, setColumns] = useState(() => {
		let newCols = {};
		retro.columns.forEach((col) => {
			newCols[col.name] = {
				name: col.name,
				shortDesc: col.shortDesc,
				items: retroData.filter(item => item.column === col.name),
				groups: [],
			}
		});
		setGroups(newCols);
		return newCols;
	});

	function setGroupName (colId, groupId, newName) {
		const col = columns[colId];
		const colGroups = [...col.groups];
		let group = {};
		let groupIndex = 0;
		colGroups.forEach((g, index) => {
			if (g.id === groupId) {
				group = g;
				groupIndex = index;
				return;
			}
		});
		group.name = newName;
		colGroups[groupIndex] = group;
		setColumns({
			...columns,
			[colId]: {
				...col,
				groups: colGroups
			}
		});
	}

	return (
		<div className="columns__wrapper">
			<DragDropContext
				onDragEnd={result => {
					let newColumns = onDragEnd(columns, result);
					setColumns(newColumns);
					setGroups(newColumns);
				}}
			>
				{Object.entries(columns).map(([id, column], index) => {
					return (
						<GroupColumn id={id} column={column} key={index} setGroupName={setGroupName} />
					)
				})}
			</DragDropContext>
		</div>
	);
}

export default Group;