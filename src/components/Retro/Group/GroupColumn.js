import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import GroupNote from './GroupNote';
import { useState } from 'react';
import Group from './Group';

function GroupColumn ({ id, column }) {

	return (
		<div className="column">
			<div className="column__header">
				<div>
					<div className="select__heading">{column.shortDesc}</div>
					<div className="heading">{column.name}</div>
				</div>
			</div>
			{
				column.groups.map((group, index) => (
					<Group id={group.id} index={index} items={group.items} key={group.id} />
				))
			}
			<Droppable droppableId={id} isCombineEnabled>
				{(provided, snapshot) => {
					return (
						<div
							ref={provided.innerRef}
							{...provided.droppableProps}
							style={{height: '100%'}}
						>
							{
								column.items.map((item, index) => (
									<GroupNote id={item.id} index={index} note={item} key={item.id} />
								))
							}
							{provided.placeholder}
						</div>
					)
				}}
			</Droppable>
		</div>
	)
	
	/*
	return (
		<Droppable droppableId={id} isCombineEnabled>
			{(provided, snapshot) => {
				return (
					<div
						className='column'
					>
						<div className="column__header">
							<div>
								<div className="select__heading">{column.shortDesc}</div>
								<div className="heading">{column.name}</div>
							</div>
						</div>
						<div
							ref={provided.innerRef}
							{...provided.droppableProps}
							style={{height: '100%'}}
						>
							{column.items.map((item, index) => (
								item.type === 'note' ? (
									<GroupNote id={item.id} index={index} note={item} key={item.id} />
								) : (
									<Group id={item.id} index={index} items={item.items} key={item.id} />
								)
							))}
						</div>
						{provided.placeholder}
					</div>
				)
			}}
		</Droppable>
	); */
}

export default GroupColumn;