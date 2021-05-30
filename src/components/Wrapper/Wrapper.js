import React, { useState, useEffect } from 'react';
import Timer from '../Timer/Timer';
import axios from 'axios';

import './Wrapper.css';

function Wrapper() {
  const [timers, setTimers] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    getTimers();
  }, []);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const getTimers = () => {
    axios
      .get('http://localhost:3001/')
      .then((res) => {
        console.log(res.data);
        setTimers(res.data);
        console.log(timers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addTimer = () => {
    axios
      .post(`http://localhost:3001/${title}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getTimers();
    setTitle('');
  };

  return (
    <div className='wrapper'>
      <div className='timers-container'>
        {timers.map((timer) => {
          return <Timer title={timer.title} id={timer._id} time={0} />;
        })}
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
