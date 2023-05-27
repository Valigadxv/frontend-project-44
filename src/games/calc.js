import gameLogic from '../index.js';
import randomInteger from '../utils.js';

const task = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[randomInteger(0, 2)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operator ${getRandomOperator} - is incorrect!`);
  }
};

const makeRound = () => {
  const num1 = randomInteger(0, 100);
  const num2 = randomInteger(0, 100);
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculation(num1, num2, operator));
  return [question, correctAnswer];
};

export default () => {
  gameLogic(task, makeRound);
};
