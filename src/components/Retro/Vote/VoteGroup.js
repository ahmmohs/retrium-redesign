import React from 'react';

import voteUp from '../../../assets/upvote.svg';
import voteDown from '../../../assets/votedown.svg';

function VoteGroup ({ name, items, votes, setVotes, id }) {
  
  return (
    <div style={{marginBottom: '16px'}}>
      <div className="notes__group">
        <div className="group__heading">{name}</div>
        <div>
          {
            items.map((item, index) => {
              console.log(item);
              return (
                <div className="note__wrapper" style={{marginBottom: '8px'}}>
                  <div className={`note__container note__container--${item.color}`}>
                    {item.value}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="votes__wrapper">
        <div className="vote__buttons">
          <div className="vote__button" onClick={() => setVotes('add', id)}>
            <img src={voteUp} alt="" className="vote__button--img"/>
          </div>
          <div className={votes > 0 ? 'vote__button' : 'vote__button--disabled'} onClick={() => setVotes('rem', id)}>
            <img src={voteDown} alt="" className="vote__button--img"/>
          </div>
        </div>
        <div className="votes">
          {votes} votes
        </div>
      </div>
    </div>
  )
}

export default VoteGroup;