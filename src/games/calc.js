import gameEngine from '..';
import randomNum from '../utils';

const gameDescription = 'What is the result of the expression?';
const upperBound = 20 + 1;
const operators = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const calcProblem = () => {
  const value1 = randomNum(upperBound);
  const value2 = randomNum(upperBound);
  const [symbol, func] = operators[randomNum(operators.length)];
  const question = `${value1} ${symbol} ${value2}`;
  const correcAnswer = `${func(value1, value2)}`;
  return [question, correcAnswer];
};

export default () => gameEngine(gameDescription, calcProblem);
