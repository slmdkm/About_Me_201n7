'use strict';

// // Acquire the users name
// var userName = prompt('Hello, what\'s your name?');
// alert('Hello ' + userName + ' nice to meet you!');
// console.log('User name: ' + userName);
//
// // Question #1
// // Where was I born?
// var answerOne = prompt('Where was I born?');
// var myAnswerOne = 'new york';
// if(answerOne.toLowerCase() === myAnswerOne) {
//   alert('You got it correct! I was born in New York.');
//   console.log('Question #1: Correct!');
// } else {
//   alert('Wrong Answer!');
//   console.log('Question #1: Incorrect!');
// }
//
// // Question #2
// // Where am I currently a student?
// var answerTwo = prompt('Where am I currently a student?');
// var myAnswerTwo = 'code fellows';
// if(answerTwo.toLowerCase() === myAnswerTwo) {
//   alert('That is Correct! I\'m currently a student at Code Fellows');
//   console.log('Question #2: Correct!');
// } else {
//   alert('Wrong Answer!');
//   console.log('Question #2: Incorrect!');
// }
//
// // Question #3
// // How many years did I serve in the Marine Corps?
// var answerThree = prompt('How many years did I serve in the Marine Corps?');
// var myAnswerThree = 10;
// if(answerThree == myAnswerThree) {
//   alert('That is Correct! I served 10 years!');
//   console.log('Question #3: Correct!');
// } else {
//   alert('Wrong Answer!');
//   console.log('Question #3: Incorrect!');
// }
//
// // Question #4
// // In what field did I always have an interest in?
// var answerFour = prompt('In what field did I always have an interest?');
// var myAnswerFour = 'technology';
// if(answerFour.toLowerCase() === myAnswerFour) {
//   alert('Technology! That is Correct!');
//   console.log('Question #4: Correct!');
// } else {
//   alert('Wrong Answer!');
//   console.log('Question #4: Incorrect!');
// }
//
// // Question #5
// // Ask the user if they're having fun in the class **LOGICAL OPERATOR**
// var answerFive = prompt('Are you having fun in the class so far?');
// if(answerFive.toLowerCase() === 'yes' || answerFive.toLowerCase() === 'y') {
//   alert('That\'s good to hear! I am having fun too!');
//   console.log('Question #5: Yes');
// } else {
//   alert('Sorry to hear that!');
//   console.log('Question #5: No');
// }

// // Question #6
// var answerSix = prompt('What\'s one of my favorite movies?');
// var arrayOfMovies = ['Ex Machina', 'Inception', 'Prometheus', 'Dr. Strange', 'Captain America: Civil War', 'Tombstone', 'Iron Man', 'Iron Man 2', 'John Wick', 'Magnificent Seven'];
// if(answerSix === arrayOfMovies) {
//   alert('Correct!')
//   console.log('Question #6: Correct!')
// } else {
//   alert('Wrong Answer!');
//   console.log('Question #6: Incorrect!');
// }

// Question #7
// Number guessing Question
var colors = ['red', 'green', 'black'];
var favColors = prompt('Can you guess one of my favorite color?').toLowerCase();
console.log(favColors);
if (colors.indexOf(favColors) !== - 1) {
  alert('Good guess! That was correct!');
} else {
  alert('Nope that was incorrect!');
}
