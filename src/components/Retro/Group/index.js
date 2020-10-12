import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { onDragEnd } from './useGroup';
import { v4 } from 'uuid';

import GroupColumn from './GroupColumn';

const items = [
	{
		id: 'item1',
		type: 'note',
		column: 'Start',
		value: 'hi',
		group: null,
		color: 'pink'
	},
	{
		id: 'item2',
		type: 'note',
		column: 'Start',
		value: 'bye',
		group: null,
		color: 'pink'
	},
	{
		id: 'item3', 
		type: 'note',
		column: 'Stop',
		value: 'lie',
		group: null,
		color: 'pink'
	},
	{
		id: 'item4', 
		type: 'note',
		column: 'Stop',
		value: 'push',
		group: null,
		color: 'pink'
	},
	{
		id: 'item5', 
		type: 'note',
		column: 'Continue',
		value: 'pull',
		group: null,
		color: 'pink'
	},
	{
		id: 'item6',
		type: 'note',
		column: 'Continue',
		value: 'acdsfa',
		group: null,
		color: 'pink'
	}
];

const columnsFromBackend = {
	'col1': {
		name: 'Start',
		shortDesc: 'We should...',
		items: items.filter(item => item.column === 'Start'),
		groups: [],
	},
	'col2': {
		name: 'Stop',
		shortDesc: 'We should...',
		items: items.filter(item => item.column === 'Stop'),
		groups: [],
	},
	'col3': {
		name: 'Continue',
		shortDesc: 'We should...',
		items: items.filter(item => item.column === 'Continue'),
		groups: [],
	}
}

function Group ({ retro, retroData }) {

	const [columns, setColumns] = useState(columnsFromBackend);

	return (
		<div className="columns__wrapper">
			<DragDropContext onDragEnd={result => setColumns(onDragEnd(columns, result))}>
				{Object.entries(columns).map(([id, column], index) => {
					return (
						<GroupColumn id={id} column={column} key={index} />
					)
				})}
			</DragDropContext>
		</div>
	);
}

export default Group;