import gameEngine from '..';
import randomNum from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const upperBound = 100;

const gcd = (a, b) => {
  const iter = divider => (a % divider || b % divider ? iter(divider - 1) : divider);
  return iter(a < b ? a : b);
};

const gcdProblem = () => {
  const value1 = randomNum(1, upperBound);
  const value2 = randomNum(1, upperBound);
  const question = `${value1} ${value2}`;
  const correctAnswer = `${gcd(value1, value2)}`;
  return [question, correctAnswer];
};

export default () => gameEngine(gameDescription, gcdProblem);
