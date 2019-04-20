import gameEngine from '..';
import randomNum from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const upperBound = 100;
const triesCount = 2;

const isPrime = (num) => {
  const iter = (divisor) => {
    if (divisor === num) return true;
    return num % divisor ? iter(divisor + 1) : false;
  };
  return num > 1 && iter(2);
};

const getQuestionNumber = () => {
  /*
     There are to few prime numbers in general number set,
     so we need a little trick to make a chance to get a prime
     number at least a bit real.
  */

  let value = 0;
  for (let i = 0; i < triesCount && !isPrime(value); i += 1) value = randomNum(2, upperBound);
  return value;
};

const primeProblem = () => {
  const question = getQuestionNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameEngine(gameDescription, primeProblem);
