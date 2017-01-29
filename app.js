'use strict';

var totalCorrect = [];
var totalIncorrect = [];
// console.log(totalCorrect);
// console.log(totalIncorrect);
// // Acquire the users name
// var userName = prompt('Hello, what\'s your name?');
// alert('Hello ' + userName + ' nice to meet you!');
// console.log('User name: ' + userName);
// // Question #1
// // Where was I born?
// var answerOne = prompt('Where was I born?');
// var myAnswerOne = 'new york';
// if(answerOne.toLowerCase() === myAnswerOne) {
//   alert('You got it correct! I was born in New York.');
//   console.log('Question #1: Correct!');
//   totalCorrect.push(1);
// } else {
//   alert('Wrong Answer!');
//   console.log('Question #1: Incorrect!');
//   totalIncorrect.push(1);
// }
// // Question #2
// // Where am I currently a student?
// var answerTwo = prompt('Where am I currently a student?');
// var myAnswerTwo = 'code fellows';
// if(answerTwo.toLowerCase() === myAnswerTwo) {
//   alert('That is Correct! I\'m currently a student at Code Fellows');
//   console.log('Question #2: Correct!');
//   totalCorrect.push(2);
// } else {
//   alert('Wrong Answer!');
//   console.log('Question #2: Incorrect!');
//   totalIncorrect.push(2);
// }
// // Question #3
// // How many years did I serve in the Marine Corps?
// var answerThree = prompt('How many years did I serve in the Marine Corps?');
// var myAnswerThree = 10;
// if(answerThree == myAnswerThree) {
//   alert('That is Correct! I served 10 years!');
//   console.log('Question #3: Correct!');
//   totalCorrect.push(3);
// } else {
//   alert('Wrong Answer!');
//   console.log('Question #3: Incorrect!');
//   totalIncorrect.push(3);
// }
// // Question #4
// // In what field did I always have an interest in?
// var answerFour = prompt('In what field did I always have an interest?');
// var myAnswerFour = 'technology';
// if(answerFour.toLowerCase() === myAnswerFour) {
//   alert('Technology! That is Correct!');
//   console.log('Question #4: Correct!');
//   totalCorrect.push(4);
// } else {
//   alert('Wrong Answer!');
//   console.log('Question #4: Incorrect!');
//   totalIncorrect.push(4);
// }
// // Question #5
// // Ask the user if they're having fun in the class **LOGICAL OPERATOR**
// var answerFive = prompt('Are you having fun in the class so far?');
// if(answerFive.toLowerCase() === 'yes' || answerFive.toLowerCase() === 'y') {
//   alert('That\'s good to hear! I am having fun too!');
//   console.log('Question #5: Yes');
//   totalCorrect.push(5);
// } else {
//   alert('Sorry to hear that!');
//   console.log('Question #5: No');
//   totalIncorrect.push(5);
// }
// //Question #6
// //Number Array Question
// var colors = ['red', 'green', 'black'];
// var favColors = prompt('Can you guess one of my favorite color?').toLowerCase();
// if (colors.indexOf(favColors) !== - 1) {
//   alert('Good guess! That was correct!');
//   console.log('Question #6: Correct!');
//   totalCorrect.push(6);
// } else {
//   alert('Nope that was incorrect!');
//   console.log('Question #6: Incorrect!');
//   totalIncorrect.push(6);
// }
// Question #7
// Guessing the Number
for(var j = 0; j <= 4; j++) { // creating a for loop that loops a set amount of times
  var numberAnswer = 5; // the number the user needs to guess
  var userNumberGuess = prompt('Can you guess the number?'); // what the user sees on the screen
  console.log(userNumberGuess);
  if(userNumberGuess == numberAnswer) { // begining of the if statement
    alert('Good job!');
    totalCorrect.push('7');
    break;
  } else if(userNumberGuess > numberAnswer) {
    alert('Too high!');
  } else if (userNumberGuess < numberAnswer) {
    alert('Too low!');
  } else {
    alert('Better luck next time!');
    totalIncorrect.push(7);
  }
}
// // Question #8
// for(var i = 0; i < 6; i++ ) {
//   var stateArray = ['maine', 'hawaii', 'new york'];
//   var userGuess = prompt('Can you guess which state I\'ve lived in besides Washington?');
//   if(stateArray.indexOf(userGuess) !== - 1 ) {
//     alert('Good guess! You got it correct!');
//     break;
//   } else {
//     alert('Try again!');
//   }
// }
