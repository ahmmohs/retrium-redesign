import React from 'react';
import { useState } from 'react';
import DiscussGroup from './DiscussGroup';
import DiscussNote from './DiscussNote';
import lastItem from '../../../assets/lastItem.svg';
import nextItem from '../../../assets/nextItem.svg';
import Button from '../../Button';
import ActionItem from './ActionItem';

function Discuss ({ retro, items, actionItems, setActionItems }) {

  const [index, setIndex] = useState(0);
  const [newestItem, setNewestItem] = useState(0);

  function addActionItem () {
    const newActionItems = [...actionItems];
    newActionItems.push({
      value: ''
    });
    setNewestItem(newActionItems.length - 1);
    setActionItems(newActionItems);
  }

  function updateActionItem (i, e) {
    let newActionItems = [...actionItems];
    newActionItems[i].value = e.target.value;
    setActionItems(newActionItems);
  }

  return (
    <div className="discuss__container">
      <div className="discuss__wrapper">
        <div className="discussion__item">
          <div className="heading">{retro.colShortDesc} {items[index].column}</div>
          {
            items[index].id.includes('group') ? (
              <DiscussGroup group={items[index]} />
            ) : (
              <DiscussNote note={items[index]} />
            )
          }
        </div>
        <div className="discussion__buttons">
          <div className="vote__button" onClick={() => (index !== items.length - 1) && setIndex(index+1)}>
            <img src={nextItem} alt="" className="vote__button--img"/>
          </div>
          <div className="vote__button" onClick={() => (index !== 0) && setIndex(index-1)} >
            <img src={lastItem} alt="" className="vote__button--img"/>
          </div>
        </div>
      </div>
      <div className="actions__wrapper">
        <div className="heading">Action plan</div>
        <div className="flex--right" style={{marginTop: '8px'}}>
          <Button text="New action item" color="outline" clickFn={addActionItem} />
        </div>
        <div className="action__items">
          {
            actionItems.map((item, i) => (
              <ActionItem action={item} i={i} updateItem={updateActionItem} newestItem={newestItem} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Discuss;