import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { v4 } from 'uuid';

import GroupColumn from './GroupColumn';

const items = [
	{
		id: v4(), 
		content: {
			type: 'note',
			column: 'Start',
			value: 'hi',
			group: null,
			color: 'pink'
		}
	},
	{
		id: v4(), 
		content: {
			type: 'note',
			column: 'Start',
			value: 'bye',
			group: null,
			color: 'pink'
		}
	},
	{
		id: v4(), 
		content: {
			type: 'note',
			column: 'Stop',
			value: 'lie',
			group: null,
			color: 'pink'
		}
	},
	{
		id: v4(), 
		content: {
			type: 'note',
			column: 'Stop',
			value: 'push',
			group: null,
			color: 'pink'
		}
	},
	{
		id: v4(), 
		content: {
			type: 'note',
			column: 'Continue',
			value: 'pull',
			group: null,
			color: 'pink'
		}
	},
	{
		id: v4(), 
		content: {
			type: 'note',
			column: 'Continue',
			value: 'acdsfa',
			group: null,
			color: 'pink'
		}
	}
];

const columnsFromBackend = [
	{
		[v4()]: {
			name: 'Start',
			shortDesc: 'We should...',
			items: items.filter(item => item.content.column === 'Start')
		}
	},
	{
		[v4()]: {
			name: 'Stop',
			shortDesc: 'We should...',
			items: items.filter(item => item.content.column === 'Stop')
		}
	},
	{
		[v4()]: {
			name: 'Continue',
			shortDesc: 'We should...',
			items: items.filter(item => item.content.column === 'Continue')
		}
	}
]

function Group ({ retro, retroData }) {

	const [columns, setColumns] = useState(columnsFromBackend);

	return (
		<div className="columns__wrapper">
			<DragDropContext onDragEnd={(result) => {console.log(result)}}>
				{columns.map((column, index) => {
					const id = Object.keys(column)[0];
					return (
						<GroupColumn id={id} column={column[id]} key={index} />
					)
				})}
			</DragDropContext>
		</div>
	);
}

export default Group;

	/*
						*/

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
					{columns.map((column, i) => {
						const id = Object.keys(column)[0];
						return (
							<Droppable droppableId={id} key={i}>
								{(provided, snapshot) => (
									<div
										{...provided.droppableProps}
										ref={provided.innerRef}
										style={{
											background: snapshot.isDraggingOver ? '#f2f2f2' : '#fff',
											padding: '8px',
											width: '440px'
										}}
									>
										{column[id].items.map((item, index) => (
											<Draggable key={item.id} draggableId={item.id} index={index}>
												{(provided) => (
													<div
														ref={provided.innerRef}
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														style={{
															userSelect: 'none',
															padding: '8px',
															marginBottom: '8px',
															color: '#333333',
														}}
													>
														{item.content.value}
													</div>
												)}
											</Draggable>
										))}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						)
					})}*/