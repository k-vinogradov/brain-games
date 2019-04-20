import gameEngine from '..';
import randomNum from '../utils';

const gameDescription = 'What number is missing in the progression?';
const incrementUpperBound = 11;
const firstItemUpperBound = 11;
const defaultProgressionLength = 10;

const progressionProblem = (progressionLength = defaultProgressionLength) => {
  const increment = randomNum(1, incrementUpperBound);
  const firstValue = randomNum(firstItemUpperBound);
  const hiddenElementIndex = randomNum(progressionLength);
  const numbers = Array.from(
    { length: progressionLength },
    (val, index) => firstValue + increment * index,
  );
  const question = numbers
    .map((val, index) => (index === hiddenElementIndex ? '..' : val))
    .join(' ');
  const correctAnswer = `${numbers[hiddenElementIndex]}`;
  return [question, correctAnswer];
};

export default () => gameEngine(gameDescription, progressionProblem);
