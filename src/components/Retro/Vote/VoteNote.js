import React from 'react';

import voteUp from '../../../assets/upvote.svg';
import voteDown from '../../../assets/votedown.svg';

function VoteNote ({ note, setVotes }) {
  return (
    <div className="note__wrapper" style={{marginBottom: '16px'}}>
      <div className={`note__container note__container--${note.color}`}>
        {note.value}
      </div>
      <div className="votes__wrapper" style={{marginTop: '8px'}}>
        <div className="vote__buttons">
          <div className="vote__button" onClick={() => setVotes('add', note.id)}>
            <img src={voteUp} alt="" className="vote__button--img"/>
          </div>
          <div className={note.votes > 0 ? 'vote__button' : 'vote__button--disabled'} onClick={() => setVotes('rem', note.id)}>
            <img src={voteDown} alt="" className="vote__button--img"/>
          </div>
        </div>
        <div className="votes">
          {note.votes} votes
        </div>
      </div>
    </div>
  )
}

export default VoteNote;