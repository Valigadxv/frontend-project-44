import gameLogic from "../index.js";

const task = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => (b === 0 ? Math.abs(a) : findGcd(b, a % b));

const makeRound = () => {
    const firstNumber = Math.floor(Math.random() * 50);
    const secondNumber = Math.floor(Math.random() * 50);
    
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = findGcd(firstNumber, secondNumber).toString();
    return [question, correctAnswer];
};

export default () => {
    gameLogic(task, makeRound);
};
