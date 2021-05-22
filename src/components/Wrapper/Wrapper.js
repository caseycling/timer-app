import React, { useState } from 'react';
import Timer from '../Timer/Timer';

import './Wrapper.css';

function Wrapper() {
  const [timers, setTimers] = useState([]);
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const addTimer = () => {
    const timer = <Timer title={title} key={timers.length} />;
    let allTimers = timers.slice();
    allTimers.push(timer);
    setTimers(allTimers);
  };

  return (
    <div className='wrapper'>
      <div className='timers-container'>
        {timers}
        <div>
          <br />
          <input
            className='title-input'
            type='text'
            value={title}
            onChange={handleChange}
          />
          <button className='add-button' onClick={addTimer}>
            Add Timer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
