import React from 'react';
import ThinkColumn from './ThinkColumn';

function Think ({ retro, retroData, setRetroData }) {
  return (
    <div className="columns__wrapper">
      {
        retro.columns.map(column => (
          <ThinkColumn title={column.name} desc={column.shortDesc} retroData={retroData} setRetroData={setRetroData} />
        ))
      }
    </div>
  );
}

export default Think;