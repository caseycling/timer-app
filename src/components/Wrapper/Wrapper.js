import React, { useState, useEffect } from 'react';
import Timer from '../Timer/Timer';
import axios from 'axios';

import './Wrapper.css';

function Wrapper() {
  const [timers, setTimers] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/')
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const addTimer = () => {
    const timer = <Timer title={title} key={timers.length} />;
    let allTimers = timers.slice();
    allTimers.push(timer);
    setTimers(allTimers);
    setTitle('');
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
