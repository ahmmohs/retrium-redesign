import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import uuid from 'uuidv4';

import GroupColumn from './GroupColumn';

const items = [
	{
		id: uuid(), 
		content: {
			type: 'note',
			column: 'Start',
			value: 'hi',
			color: 'pink'
		}
	},
	{
		id: uuid(), 
		content: {
			type: 'note',
			column: 'Start',
			value: 'bye',
			color: 'pink'
		}
	},
	{
		id: uuid(), 
		content: {
			type: 'note',
			column: 'Stop',
			value: 'lie',
			color: 'pink'
		}
	},
	{
		id: uuid(), 
		content: {
			type: 'note',
			column: 'Stop',
			value: 'push',
			color: 'pink'
		}
	},
	{
		id: uuid(), 
		content: {
			type: 'note',
			column: 'Continue',
			value: 'pull',
			color: 'pink'
		}
	},
	{
		id: uuid(), 
		content: {
			type: 'note',
			column: 'Continue',
			value: 'acdsfa',
			color: 'pink'
		}
	}
];

const columnsFromBackend = [
	{
		[uuid()]: {
			name: 'Start',
			items: items.filter(item => item.content.column === 'Start')
		}
	},
	{
		[uuid()]: {
			name: 'Stop',
			items: items.filter(item => item.content.column === 'Stop')
		}
	},
	{
		[uuid()]: {
			name: 'Continue',
			items: items.filter(item => item.content.column === 'Continue')
		}
	}
]

function Group ({ retro, retroData }) {

	const [columns, setColumns] = useState(columnsFromBackend);

	return (
	<DragDropContext onDragEnd={() => {}}>
		<div className="columns__wrapper">
			{
				Object.entries(columns).map(([id, column]) => {
					return (
						<GroupColumn id={id} />
					)
				})
			}
		</div>
	</DragDropContext>
	);
}

export default Group;


		/* () => {
		const newGroupData = [];
		retro.columns.forEach(column => {
			newGroupData.push({
				column: column.name,
				desc: column.shortDesc,
				items: retroData.filter(item => item.column === column.name),
				groups: [
					{
						name: 'ungrouped',
						items: retroData.filter(item => item.column === column.name),
					}
				]})
		});
		console.log(newGroupData);
		return newGroupData;
	}*/

	/* 
	const [groupData, setGroupData] = useState(
		[
			{
				column: 'Start',
				desc: 'We should...',
				items: [
					{
						type: 'note',
						column: 'Start',
						value: 'hi',
						color: 'pink'
					},
					{
						type: 'note',
						column: 'Start',
						value: 'bye',
						color: 'blue'
					},
					{
						type: 'note',
						column: 'Start',
						value: 'die',
						color: 'yellow'
					}
				]
			},
			{
				column: 'Stop',
				desc: 'We should...',
				items: [
					{
						type: 'note',
						column: 'Start',
						value: 'sly',
						color: 'pink'
					},
					{
						type: 'note',
						column: 'Start',
						value: 'fly',
						color: 'blue'
					},
					{
						type: 'note',
						column: 'Start',
						value: 'guy',
						color: 'yellow'
					}
				]
			},
			{
				column: 'Continue',
				desc: 'We should...',
				items: [
					{
						type: 'note',
						column: 'Start',
						value: 'shy',
						color: 'pink'
					},
					{
						type: 'note',
						column: 'Start',
						value: 'high',
						color: 'blue'
					},
					{
						type: 'note',
						column: 'Start',
						value: 'sigh',
						color: 'yellow'
					}
				]
			}
		]); */