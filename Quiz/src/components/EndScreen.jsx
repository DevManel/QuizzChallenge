import React from 'react';

const EndScreen = ({ score, onReset }) => {
  return (
    <div className="end-screen">
      <h2>Quiz terminé!</h2>
      <p>Votre score final est : {score}</p>
      <button onClick={onReset}>Redémarrer le quiz</button>
    </div>
  );
};

export default EndScreen;
