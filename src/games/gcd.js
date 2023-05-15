import gameLogic from '../index.js';
import randomInteger from '../utils.js';

const gcdFinder = (a, b) => (b === 0 ? Math.abs(a) : gcdFinder(b, a % b));

const makeRound = () => {
  const firstNumber = randomInteger(1, 50);
  const secondNumber = randomInteger(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = gcdFinder(firstNumber, secondNumber).toString();
  return [question, correctAnswer];
};

const task = 'Find the greatest common divisor of given numbers.';

export default () => {
  gameLogic(task, makeRound);
};
