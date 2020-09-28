import React from 'react';
import Button from '../Button';

function RetroDetails ({ retro }) {
  const { type, description, columns } = retro;
  
  return (
    <div className="retro__details">
      <div className="select__heading" style={{marginTop: '55px', marginBottom: '8px'}}>Retro Details</div>
      <div className="retro__title">{type}</div>
      <div className="template__description">{description}</div>
      <div className="mini__heading" style={{marginTop: '32px', marginBottom: '8px'}}>How to Run</div>
      <div className="retrocd__wrapper">
        {columns.map((column, i) => (
          <div className="retrocd">
            <img src={null} alt="" className="retrocd--img"/>
            <div>
              <div className="template__name">{column.name}</div>
              <div className="template__description">{column.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex--right" style={{marginTop: '16px'}}>
        <Button text="Start this Retro!" color="orange" clickFn={() => {}} />
        <Button text="Learn more" color="outline" clickFn={() => {}} />
      </div>
    </div>
  );
}

export default RetroDetails;