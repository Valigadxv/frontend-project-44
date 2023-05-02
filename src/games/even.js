import gameLogic from "../index.js";

const isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    }
    return false;
};

const task = 'Answer "yes" if number is even, otherwise answer "no".';

const makeRound = () => {
    const number = Math.floor(Math.random() * 10);
    const question = number.toString();
    const correctAnswer = isEven(number) ? 'yes': 'no';
    return [question, correctAnswer];
};

export default () => {
    gameLogic(task, makeRound);
};