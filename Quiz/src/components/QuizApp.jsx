import React, { useReducer, useEffect } from 'react';
import { quizReducer, initialState } from '../reducers/reducer';
import Question from './Question';
import Timer from './Timer';
import EndScreen from './EndScreen';

const QuizApp = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  // Logique pour gérer le chronomètre
  useEffect(() => {
    if (state.timeLeft > 0 && state.currentQuestion < state.questions.length) {
      const timer = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);

      return () => clearInterval(timer); // Nettoyage de l'effet
    } else if (state.timeLeft === 0) {
      dispatch({ type: 'NEXT_QUESTION' }); // Passer à la question suivante
    }
  }, [state.timeLeft, state.currentQuestion]);

  const handleAnswer = (answer) => {
    dispatch({ type: 'ANSWER_QUESTION', payload: answer });
  };

  const handleNextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  if (state.currentQuestion >= state.questions.length) {
    return <EndScreen score={state.score} onReset={handleReset} />;
  }

  return (
    <div className="quiz-app">
      <h1>Quiz du savoir</h1>
      <Question
        question={state.questions[state.currentQuestion]}
        onAnswer={handleAnswer}
      />
      <Timer timeLeft={state.timeLeft} />
      <button onClick={handleNextQuestion}>Passer à la question suivante</button>
    </div>
  );
};

export default QuizApp;
