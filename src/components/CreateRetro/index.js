import React, { useState } from 'react';

import RetroTypeSelect from './RetroTypeSelect';

import '../../styles/createRetro.css';
import RetroTemplateSelect from './RetroTemplateSelect';
import RetroDetails from './RetroDetails';

const retros = [
  {
    type: 'Start, Stop, Continue',
    shortDesc: 'Come up with practical ideas for team based improvement.',
    description: 'When you want to get down to the fundamentals, Start Stop Continue is a simple technique for an action-oriented retrospective meeting that encourages participants to come up with practical ideas for team-based improvement and action items you implement right away.',
    columns: [
      {
        name: 'Start',
        description: "Things that the team thinks would have a positive impact on the team if they were started."
      },
      {
        name: 'Stop',
        description: 'Things within the team’s workflow or process that aren’t helping the team to achieve their goals and should be stopped.'
      },
      {
        name: 'Continue',
        description: 'Things that are already worked well in the previous iteration and should stay in the workflow.'
      },
    ]
  },
  {
    type: "Went Well, Didn't go Well",
    shortDesc: "Focus on your team's strengths and weaknesses.",
    description: "The what went well, what didn't go well retrospective technique keeps teams focused on their activities over the prior iteration and how they can boost their efficiency and productivity to drive continuous improvement. The exercise helps focus the discussion and is a great tool for new and developing teams to improve performance and quality the next iteration of a project.",
    columns: [
      {
        name: 'What Went Well',
        description: 'Things that the team thinks went well over the prior iteration.'
      },
      {
        name: "What Didn't go Well",
        description: "Things that the team thinks didn't go well over the prior iteration."
      }
    ]
  }
]

function CreateRetro () {
  const [selectedRetro, setSelectedRetro] = useState(0);

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
              <RetroTemplateSelect name={retro.type} img={null} description={retro.shortDesc} active={i === selectedRetro} clickFn={() => setSelectedRetro(i)} />
            ))
          }
        </div>
      </div>
      <RetroDetails retro={retros[selectedRetro]} />
    </div>
  );
}

export default CreateRetro;