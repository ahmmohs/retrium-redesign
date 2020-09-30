import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';
import CreateRetro from './components/CreateRetro';
import Retro from './components/Retro';
import './styles/styles.css';

const retros = [
  {
    type: 'Start, Stop, Continue',
    shortDesc: 'Come up with practical ideas for team based improvement.',
    description: 'When you want to get down to the fundamentals, Start Stop Continue is a simple technique for an action-oriented retrospective meeting that encourages participants to come up with practical ideas for team-based improvement and action items you implement right away.',
    columns: [
      {
        name: 'Start',
        description: "Things that the team thinks would have a positive impact on the team if they were started.",
        shortDesc: "We should..."
      },
      {
        name: 'Stop',
        description: 'Things within the team’s workflow or process that aren’t helping the team to achieve their goals and should be stopped.',
        shortDesc: "We should..."
      },
      {
        name: 'Continue',
        description: 'Things that are already worked well in the previous iteration and should stay in the workflow.',
        shortDesc: "We should..."
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


function App () {
  const [selectedRetro, setSelectedRetro] = useState(0);
  const [retroStage, setRetroStage] = useState(0);

  return (
    <Router>
      <div>
        <div className="trial__reminder">
          Your free trial expires in 30 days!<div className="trial__link">Add billing info</div>
        </div>
        <div className="main">
          <Nav />
          <div className="main__wrapper">
            <Switch>
              <Route path="/" exact>
                <Landing hasRetros={true} />
              </Route>
              <Route path="/create" >
                <CreateRetro retros={retros} setSelectedRetro={setSelectedRetro} selectedRetro={selectedRetro} />
              </Route>
              <Route path="/retro" >
                <Retro retro={retros[selectedRetro]} stage={retroStage} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
