import React, { useState } from 'react';
import Timer from '../Timer/Timer';

import './Stopwatch.css';

function App() {
  const [timers, setTimers] = useState([<Timer />]);

  const addTimer = () => {
    const timer = <Timer />;
    let allTimers = timers.slice();
    allTimers.push(timer);
    setTimers(allTimers);
  };

  return (
    <div className='wrapper'>
      <div className='timers-container'>
        {timers}
        <button onClick={addTimer}>Add Timer</button>
      </div>
    </div>
  );
}

export default App;
