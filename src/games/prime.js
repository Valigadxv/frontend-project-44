import gameLogic from '../index.js';
import randomInteger from '../utils.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const makeRound = () => {
  const number = randomInteger(2, 100);
  const question = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  gameLogic(task, makeRound);
};
