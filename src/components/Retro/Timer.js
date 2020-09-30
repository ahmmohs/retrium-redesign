import React, { useEffect, useState } from 'react';

function Timer ({ startTime }) {
  const [time, setTime] = useState(startTime);
  const [color, setColor] = useState('green');

  function formatTime(toFormat) {
    let seconds = toFormat % 60;
    let minutes = Math.floor(toFormat / 60);
    minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
    seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
  }

  useEffect (() => {
    const timer = setInterval(() => {
      if (time >= 1) {
        setTime(time - 1);
        formatTime(time);
        if (time <= 45 && color === 'green') setColor('yellow');
        if (time <= 15 && color === 'yellow') setColor('red');
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return (() => {
      clearInterval(timer);
    });
  });

  return (
    <div className={`timer timer--${color}`}>
      {formatTime(time)}
    </div>
  );
}

export default Timer;