import React from 'react';
import ThinkColumn from './ThinkColumn';

function Think ({ retro, setRetroData }) {
  return (
    <div className="columns__wrapper">
      {
        retro.columns.map(column => (
          <ThinkColumn title={column.name} desc={column.shortDesc} setRetroData={setRetroData} />
        ))
      }
    </div>
  );
}

export default Think;