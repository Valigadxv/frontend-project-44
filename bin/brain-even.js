#!/usr/bin/env node
import readlineSyn from 'readline-sync';
import { greeting, userName } from '../src/cli.js';

const check = () => {
  let i = 0;
  while (i <= 2) {
    const number = Math.floor(Math.random() * 10);
    console.log(`Question: ${number}`);
    const answer = readlineSyn.question('Your answer: ');
    if (number % 2 === 0 && answer === 'yes' || number % 2 !== 0 && answer === 'no') {
      i = i + 1;
      console.log('Correct!');
    } else if (number % 2 === 0 && answer === 'no') {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'\.\
      \nLet's try again, ${userName}!`);
    } else if (number % 2 !==0 && answer === 'yes') {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'\.\
      \nLet's try again, ${userName}!`);
    }
}
  return console.log(`Congratulations, ${userName}!`);
}

console.log('Answer "yes" if the number is even, otherwise answer "no"');

check();