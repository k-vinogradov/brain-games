import { question } from 'readline-sync';

const defaultTurnNumber = 3;

const welcome = () => {
  let userName = '';
  while (userName.length === 0) {
    userName = question('May I have your name? ');
  }
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const turnIsLost = (problemGenerator) => {
  const [problem, correctAnswer] = problemGenerator();

  console.log(`Question: ${problem}`);
  const answer = question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
    return false;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return true;
};

const gameEngine = (description, problemGenerator, turnNumber = defaultTurnNumber) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const userName = welcome();
  for (let i = 0; i < turnNumber; i += 1) {
    if (turnIsLost(problemGenerator)) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
