import React from 'react';

import { useHistory } from 'react-router-dom';

import Button from '../Button';
import sad from '../../assets/sad.svg';

function NoRetros () {
  const history = useHistory();

  return (
    <div className="no__retros__wrapper">
      <img src={sad} alt="" className="no__retros--img"/>
      <div className="no__retros--title">Uh oh! It looks like you haven't done a retro yet.</div>
      <div className="no__retros--cta">Explore techniques and start a retro!</div>
      <div className="flex--center">
        <Button text="Start Retro" color="orange" clickFn={() => history.push('/create')} />
        <Button text="Learn More" color="outline" clickFn={() => {}} />
      </div>
    </div>
  );
}

export default NoRetros;