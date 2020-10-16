import React from 'react';

import { useHistory } from 'react-router-dom';

import Button from '../Button';
import ActionItem from '../Retro/Discuss/ActionItem';

function HasRetros ({ actionItems, setActionItems }) {

  const history = useHistory();

  function updateActionItem (i, e) {
    let newActionItems = [...actionItems];
    newActionItems[i].value = e.target.value;
    setActionItems(newActionItems);
  }

  return (
    <div className="no__retros__wrapper">
      <div className="no__retros--cta">Start another retro</div>
      <div className="flex--center">
        <Button text="Start Retro" color="orange" clickFn={() => history.push('/create')} />
        <Button text="Learn More" color="outline" clickFn={() => {}} />
      </div>
      <div className="action__items__wrapper">
        <div className="heading">Current Action Items</div>
        {actionItems.map((item, i) => (
          <ActionItem action={item} i={i} updateItem={updateActionItem} newestItem={null} />
        ))}
      </div>
    </div>
  );
}

export default HasRetros;