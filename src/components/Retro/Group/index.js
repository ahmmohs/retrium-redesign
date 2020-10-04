import React, { useState } from 'react';
import GroupColumn from './GroupColumn';

function Group ({ retro, retroData }) {

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
		]);

	return (
		<div className="columns__wrapper">
			{
				groupData.map(column => (
					<GroupColumn title={column.column} desc={column.desc} groupData={groupData} />
				))
			}
		</div>
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