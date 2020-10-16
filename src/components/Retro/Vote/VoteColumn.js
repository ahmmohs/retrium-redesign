import React from 'react';
import VoteGroup from './VoteGroup';
import VoteNote from './VoteNote';

function VoteColumn({ title, desc, items, setVotes }) {
  console.log(items);
  return (
    <div className="column">
      <div className="column__header">
        <div>
          <div className="select__heading">{desc}</div>
          <div className="heading">{title}</div>
        </div>
      </div>
      {
        items.filter(item => item.column === title).map((item) => (
          item.id.includes('group') ? (
            <VoteGroup name={item.name} items={item.items} votes={item.votes} setVotes={setVotes} id={item.id} />
          ) : (
            <VoteNote note={item} setVotes={setVotes} />
          )
        ))
      }
    </div>
  )
}

export default VoteColumn;