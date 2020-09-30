import React from 'react';

import Stage from './Stage';

import '../../styles/retro.css';
import '../../styles/stage.css';

const defaultIcon = 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png';

const participants = [
  {
    name: 'Alex',
    icon: 'https://pbs.twimg.com/profile_images/1258389717671870465/D_KLr6J5_400x400.jpg',
  },
  {
    name: 'John',
    icon: 'https://pbs.twimg.com/profile_images/1207482905653579779/_sHDNQ8p_400x400.jpg',
  },
  {
    name: 'Marry',
    icon: 'https://i.pinimg.com/originals/ce/b7/a5/ceb7a5390590fc8c341a2a46de5ca311.jpg',
  },
  {
    name: 'Heather',
    icon: 'https://pbs.twimg.com/profile_images/1145910160004534272/u1FHf0PP.png',
  },
  {
    name: 'Bonnie',
    icon: 'https://pm1.narvii.com/7421/b56dac6187efddbf5bc127d2883b0793975e9a57r1-512-512v2_00.jpg',
  },
  {
    name: 'Mark',
    icon: 'https://media.wired.com/photos/5ed6891ed9fb171733fd7840/master/pass/Ideas-Zuckerberg-1200875675.jpg',
  },
]

function Retro ({ retro, stage }) {

  return (
    <>
      <div className="retro__header">
        <div className="header__section">
          <div className="header__title">Participants</div>
          <div className="participants__list">
            {
              participants.map((participant) => (
                <div className="participant" style={{backgroundImage: `url(${participant.icon})`}}></div>
              ))
            }
          </div>
        </div>
      </div>
      <Stage retro={retro} stage={stage} />
    </>
  );
}

export default Retro;