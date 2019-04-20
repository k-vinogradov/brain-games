import { question } from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  let userName = '';
  while (userName.length === 0) {
    userName = question('May I have your name? ');
  }
  console.log(`Hello, ${userName}!\n`);
};
