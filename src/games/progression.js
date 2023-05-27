import gameLogic from '../index.js';
import randomInteger from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const makeRound = () => {
  const start = randomInteger(1, 3);
  const step = randomInteger(1, 3);
  const length = randomInteger(5, 10);
  const progression = generateProgression(start, step, length);
  const hiddenIndex = randomInteger(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const task = 'What number is missing in the progression ?';

export default () => {
  gameLogic(task, makeRound);
};
