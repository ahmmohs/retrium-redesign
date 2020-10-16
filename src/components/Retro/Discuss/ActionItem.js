import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

function ActionItem ({ action, i, updateItem, newestItem }) {
  return (
    <div className="action__item">
      <TextareaAutosize
        placeholder="New action item..."
        className="note__textarea"
        value={action.value}
        onChange={e => updateItem(i, e)}
        autoFocus={i === newestItem}
      />
      <div className="action__functions">
        <div style={{cursor: 'pointer'}}>Assign to...</div>
        <div className="mark">Mark as complete</div>
      </div>
    </div>
  )
}

export default ActionItem;