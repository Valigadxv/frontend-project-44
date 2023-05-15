import gameLogic from '../index.js';
import randomInteger from '../utils.js';

const makeRound = () => {
  const initialTerm = randomInteger(1, 20);
  const commonDifference = randomInteger(1, 7);
  const arr = [initialTerm];
  let lastNumber = initialTerm;
  const hiddenIndex = randomInteger(0, 9);

  for (let i = 0; i < 9; i++) {
    arr.push(lastNumber + commonDifference);
    lastNumber += commonDifference;
  }
  const arrClone = arr.slice(0);
  arrClone[hiddenIndex] = '..';
  const question = arrClone.join(' ');
  const correctAnswer = arr[hiddenIndex].toString();
  return [question, correctAnswer];
};

const task = 'What number is missing in the progression ?';

export default () => {
  gameLogic(task, makeRound);
};