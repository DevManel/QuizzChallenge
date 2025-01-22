import React from 'react';

const Timer = ({ timeLeft }) => {
  return (
    <div className="timer">
      <p>Temps restant: {timeLeft}s</p>
    </div>
  );
};

export default Timer;
