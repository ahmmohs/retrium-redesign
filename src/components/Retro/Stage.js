import React, { useState } from 'react';
import Think from './Think';
import Group from './Group';

import Timer from './Timer';
import Toolbar from './Toolbar';

const stages = ['Think', 'Group', 'Vote', 'Discuss'];
let breadcrumbStages = [];

function Stage ({ retro, stage, setStage }) {

	const [retroData, setRetroData] = useState([]);
	const stageDigits = ['One', 'Two', 'Three', 'Four'];
	breadcrumbStages = stages.slice(0, stage);
	
	const stageDisplay = [
		<Think retro={retro} retroData={retroData} setRetroData={setRetroData} />,
		<Group retro={retro} retroData={retroData} />
	]

  return (
    <div className="stage__wrapper">
      <div className="flex--right">
      {
        stage > 0 && (
          <div className="stage__breadcrumbs">
            {breadcrumbStages.map(breadcrumb => (
              <div className="stage__breadcrumb">
                {breadcrumb}
                <div className="breadcrumb__arrow" />
              </div>
            ))}
          </div>
        )
      }
      <div className="heading">Stage {stageDigits[stage]}: {stages[stage]}</div>
        <Timer startTime={180} />
      </div>
      {stageDisplay[1]}
      <Toolbar stage={stage} setStage={setStage} />
    </div>
  );
}

export default Stage;