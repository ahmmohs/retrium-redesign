import React from 'react';

import GroupNote from './GroupNote';

import { Draggable, Droppable } from 'react-beautiful-dnd';

function Group ({ colId, id, items, index, setGroupName, name }) {
  console.log(items);

  return (
    <div className="notes__group">
      <input
        className="group__input"
        value={name}
        onChange={e => setGroupName(colId, id, e.target.value)}
      />
      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {
                items.map((item, index) => (
                  <GroupNote id={item.id} index={index} note={item} key={item.id} />
                ))
              }
              {provided.placeholder}
            </div>
          )
        }}
      </Droppable>
    </div>
  );

  /*
  return (
    <Draggable draggableId={id} index={index} key={id}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            className="notes__group"
            style={{
              ...provided.dragHandleProps.style
            }}
          >
            <h3 {...provided.dragHandleProps}>Group 1</h3>
            <Droppable id={id}>
              {(provided, snapshot) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    style={{height: '200px', backgroundColor: snapshot.isDraggingOver ? 'blue' : '#f2f2f2'}}
                  >
                    {
                      items.map((item, index) => (
                        <GroupNote id={item.id} index={index} note={item} key={item.id} />
                      ))
                    }
                  </div>
                )
              }}
            </Droppable>
          </div>
        )
      }}
    </Draggable> 
  );*/
}

export default Group;