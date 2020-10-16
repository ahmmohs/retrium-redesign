import React from 'react';

import { useHistory } from 'react-router-dom';

import settingsIcon from '../../assets/settings.svg';
import bellIcon from '../../assets/bell.svg';
import timerIcon from '../../assets/timer.svg';
import infoIcon from '../../assets/info.svg';
import nextIcon from '../../assets/carot.svg';

function Toolbar ({ stage, setStage }) {

  const history = useHistory();

  return (
    <div className="toolbar">
      <div className="flex--right">
        <div className="toolbar__button">
          <img src={settingsIcon} alt="" className="toolbar__button--img"/>
        </div>
        <div className="toolbar__button">
          <img src={bellIcon} alt="" className="toolbar__button--img"/>
        </div>
        <div className="toolbar__button">
          <img src={timerIcon} alt="" className="toolbar__button--img"/>
        </div>
        <div className="toolbar__button">
          <img src={infoIcon} alt="" className="toolbar__button--img"/>
        </div>
      </div>
      <div className="flex--left">
        <div className="next__button" onClick={() => stage !== 3 ? setStage(stage + 1) : history.replace('/')}>
          {stage === 3 ? 'End Retro' : 'Next Stage'}
          <img src={nextIcon} alt="" className="toolbar__button--img"/>
        </div>
      </div>
    </div>
  );
}

export default Toolbar;