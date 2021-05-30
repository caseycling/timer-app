import React, { useState } from 'react';

import './Timer.css';

const Timer = ({ title, id }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerId, setTimerId] = useState();

  const handleStart = () => {
    const startTime = Date.now();
    if (timerId === undefined) {
      // make sure that a timer is not already running
      setTimerId(
        setInterval(() => {
          const et = Math.floor((Date.now() - startTime) / 1000);
          const tt = et + elapsedTime;
          setElapsedTime(tt);
        }, 1000)
      );
    }
  };

  const handleStop = () => {
    if (timerId) {
      console.log(timerId);
      clearInterval(timerId);
      setTimerId(undefined);
    }
  };

  const toHHMMSS = (secs) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs / 60) % 60);
    const seconds = secs - hours * 3600 - minutes * 60;

    const hDisplay = hours < 10 ? `0${hours}` : hours;
    const mDisplay = minutes < 10 ? `0${minutes}` : minutes;
    const sDisplay = seconds < 10 ? `0${seconds}` : seconds;

    return `${hDisplay}:${mDisplay}:${sDisplay}`;
  };

  return (
    <div className='timer' id={id}>
      <div className='title'>{title}</div>
      <div className='time'>{toHHMMSS(elapsedTime)}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Timer;
