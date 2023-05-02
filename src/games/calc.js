import gameLogic from '../index.js';

const task = 'What is the result of the expression?';

const makeRound = () => {
   const mathSymbols = ['+', '-', '*', '/'];
   const firstNumber = Math.floor(Math.random() * 10);
   const secondNumber  = Math.floor(Math.random() * 10);
   const randomSymbol = mathSymbols[Math.floor(Math.random() * 3)];
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
    case '/':
        result = firstNumber / secondNumber;
        break;
    default:
        break;
   }
   const correctAnswer = result.toString();
   return [question, correctAnswer];
};

export default () => {
    gameLogic(task, makeRound);
};

