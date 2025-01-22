import React from 'react';

const Question = ({ question, onAnswer }) => {
  return (
    <div className="question">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option) => (
          <button key={option} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
