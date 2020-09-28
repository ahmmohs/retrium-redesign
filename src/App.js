import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';
import CreateRetro from './components/CreateRetro';

import './styles/styles.css';

function App () {
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
                {/* Create retro */}
                <CreateRetro />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
