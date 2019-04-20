import gameEngine from '..';
import randomNum from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const upperBound = 100;

const isEven = val => val % 2 === 0;

const evenProblem = () => {
  const question = randomNum(upperBound);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameEngine(gameDescription, evenProblem);
