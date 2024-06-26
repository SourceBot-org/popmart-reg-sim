import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './Stopwatch.css';

import Ads from './Ads';

function App() {
  const [bookingTime, setBookingTime] = useState("10:30-11:00");
  const [idType, setIdType] = useState("National ID Card Number");
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const hasStarted = useRef(false);

  

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => {
    if (!hasStarted.current) {
      setIsRunning(true);
      hasStarted.current = true;
    }
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
    hasStarted.current = false;

    // Clear all input fields
    const inputFields = document.querySelectorAll('input');
    inputFields.forEach(input => {
      input.value = '';
    });
  }

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 60000) % 60);
    const hours = Math.floor((time / 3600000) % 24);
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}.${getMilliseconds}`;
  };

  

  return (
    <div className="App">
      <Ads />
      <header className="header">
        <h1>ฝึกซ้อมลงทะเบียน</h1>
      </header>
      <div className="stopwatch">
        <div className="numbers">{formatTime(time)}</div>
      </div>
      <div className="input-data-form">
        <label>First Name</label>
        <input type="text" className="first-name-input" onFocus={startStopwatch} onChange={startStopwatch} />

        <label>Last Name</label>
        <input type="text" className="last-name-input" onFocus={startStopwatch} onChange={startStopwatch} />

        <label>Phone</label>
        <input type="text" className="phone-input" onFocus={startStopwatch} onChange={startStopwatch} />

        <label>Select Booking Time</label>
        <select value={bookingTime} onChange={(e) => { setBookingTime(e.target.value); startStopwatch(); }}>
          <option value="10:30-11:00">10:30-11:00</option>
          <option value="11:00-11:30">11:00-11:30</option>
          <option value="11:30-12:00">11:30-12:00</option>
        </select>

        <div className='id-selection'>
          <div>
            <input
              type="radio"
              value="National ID Card Number"
              checked={idType === "National ID Card Number"}
              onChange={(e) => { setIdType(e.target.value); startStopwatch(); }}
            />
            <label>National ID Card Number</label>
          </div>
          <div>
            <input
              type="radio"
              value="Passport Number"
              checked={idType === "Passport Number"}
              onChange={(e) => { setIdType(e.target.value); startStopwatch(); }}
            />
            <label>Passport Number</label>
          </div>
        </div>

        <label>{idType}</label>
        <input type="text" className="id-number-input" onFocus={startStopwatch} onChange={startStopwatch} />

        <button type="button" onClick={stopStopwatch}>Next</button>

        <button type="button" className='reset' onClick={reset}>Reset</button>
      </div>

      

      <footer className='footer'>
      <p>&copy; 2024 Sourcebot. All rights reserved.</p>
      <p>
        This application is the result of the hard work and dedication of the Sourcebot team.
        We're offering it for free to the community commercially use of this application is strictly prohibited.
      </p>
      </footer> 
 
    </div>
  );
}

export default App;
