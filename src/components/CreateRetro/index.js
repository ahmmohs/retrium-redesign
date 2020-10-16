import React, { useState } from 'react';

import RetroTypeSelect from './RetroTypeSelect';

import '../../styles/createRetro.css';
import RetroTemplateSelect from './RetroTemplateSelect';
import RetroDetails from './RetroDetails';

function CreateRetro ({ retros, setSelectedRetro, selectedRetro }) {

  return (
    <div className="content__wrapper flex--between">
      <div>
        <div className="heading">
          Start a new retro
        </div>
        <div className="select__heading" style={{marginTop: '16px', marginBottom: '8px'}}>
          Select retro type
        </div>
        <div className="flex--right">
          <RetroTypeSelect type="Team" isActive={true} />
          <RetroTypeSelect type="Organization" isActive={false} />
          <RetroTypeSelect type="Users" isActive={false} />
        </div>
        <div className="select__heading" style={{marginTop: '16px', marginBottom: '8px'}}>
          Select retro template
        </div>
        <div className="retro__select__wrapper">
          {
            retros.map((retro, i) => (
              <RetroTemplateSelect name={retro.type} img={null} description={retro.shortDesc} active={i === selectedRetro} clickFn={() => setSelectedRetro(i)} key={i} />
            ))
          }
        </div>
      </div>
      <RetroDetails retro={retros[selectedRetro]} />
    </div>
  );
}

export default CreateRetro;