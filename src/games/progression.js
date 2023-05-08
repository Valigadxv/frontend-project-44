import gameLogic from "../index.js";

const makeRound = () => {
    const numbers = Math.floor(Math.random() * 20);
    const difNum = Math.floor(Math.random() * 7);
    const array = [numbers];
    let lastNumber = numbers;
    const hidenNumbers = Math.floor(Math.random() * 9);

    for (let i = 0; i < 9; i += 1) {
        array.push(lastNumber + difNum);
        lastNumber += difNum;
    }

    const cloneArray = array.slice(0);
    cloneArray[hidenNumbers] = '..';
    const question = cloneArray.join(' ');
    const correctAnswer = array[hidenNumbers].toString();
    return [question, correctAnswer];
};

const task = 'What number is missing in the progression ?';

export default () => {
    gameLogic(task, makeRound);
};