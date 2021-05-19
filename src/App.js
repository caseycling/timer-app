import React, { useState } from 'react';
import Timer from './components/Timer';

function App() {
  const [timers, setTimers] = useState([<Timer />]);

  const addTimer = () => {
    const timer = <Timer />;
    let allTimers = timers.slice();
    allTimers.push(timer);
    setTimers(allTimers);
  };

  return (
    <div className='App'>
      <div className='container'>{timers}</div>
      <button onClick={addTimer}>Add Timer</button>
    </div>
  );
}

export default App;
