import gameLogic from '../index.js';
import randomInteger from '../utils.js';

const task = 'What is the result of the expression?';

const makeRound = () => {
  const firstNumber = randomInteger(0, 50);
  const secondNumber = randomInteger(0, 50);

  const mathSymbols = ['+', '-', '*'];
  const randomSymbol = mathSymbols[randomInteger(0, 2)];
  const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;

  let result;
  
  switch (randomSymbol) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
  }
  const correctAnswer = result.toString();
  return [question, correctAnswer];
};

export default () => {
  gameLogic(task, makeRound);
};

