// // if.....else
// let hungerLevel = 7;
// if (hungerLevel > 7){
//   console.log('Time to eat!');
// } else {
//     console.log('We can eat later!');
// };

// //logical operators
// //Working with conditionals means that we will be using booleans, true or false values. In JavaScript, there are operators that work with boolean values known as logical operators. We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators:

// //the and operator (&&)
// if (stopLight === 'green' && pedestrians === 0) {
//   console.log('Go!');
// } else {
//   console.log('Stop');
// }
// //the or operator (||)
// if (day === 'Saturday' || day === 'Sunday') {
//   console.log('Enjoy the weekend!');
// } else {
//   console.log('Do some work.');
// }

// //the not operator, otherwise known as the bang operator (!)
// let excited = true;
// console.log(!excited); // Prints false
 
// let sleepy = false;
// console.log(!sleepy); // Prints true
let sleepy;
// => undefinded
console.log(`sleepy: ${sleepy}`)
if(!sleepy){
    console.log("time for bed right meow")
}

sleepy = "9pm"
console.log(`sleepy: ${sleepy}`)
// => "9pm"
if(sleepy){
    console.log("time for bed right bark")
}

// //When we use the && operator, we are checking that two things are true:
// // When using the && operator, both conditions must evaluate to true for the entire condition to evaluate to true and execute. Otherwise, if either condition is false, the && condition will evaluate to false and the else block will execute.

// // If we only care about either condition being true, we can use the || operator:

// // Truthy and Fals ..y

// // If you combine your knowledge of logical operators you can use a 
// // short-hand for the code above. In a boolean condition, 
// // JavaScript assigns the truthy value to a variable 
// // if you use the || operator in your assignment:
// let defaultName;
// if (username) {
//   defaultName = username;
// } else {
//   defaultName = 'Stranger';
// }
// // short-hand for the code above
// //let defaultName = username || 'Stranger';

// // Ternary Operator
// // In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.

// isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// // In the example above:

// // The condition, isNightTime, is provided before the ?.
// // Two expressions follow the ? and are separated by a colon :.
// // If the condition evaluates to true, the first expression executes.
// // If the condition evaluates to false, the second expression executes.
// // Like if...else statements, ternary operators can be used for conditions which evaluate to true or false.

// let isLocked = false;

//  isLocked ? console.log('You will need a key to open the door.') :
//   console.log('You will not need a key to open the door.');

// let isCorrect = true;

// isCorrect ?
//   console.log('Correct!') :
//   console.log('Incorrect!');

// let favoritePhrase = 'Love That!';

// favoritePhrase === 'Love That!'?
//   console.log('I love that!') :
//   console.log("I don't love that!");

//  // Else If Statements

// //  We can add more conditions to our if...else with an else if statement. The else if statement allows for more than two possible outcomes. You can add as many else if statements as you’d like, to make more complex conditionals!

// // The else if statement always comes after the if statement and before the else statement. The else if statement also takes a condition. Let’s take a look at the syntax:

// let stopLight = 'yellow';
 
// if (stopLight === 'red') {
//   console.log('Stop!');
// } else if (stopLight === 'yellow') {
//   console.log('Slow down.');
// } else if (stopLight === 'green') {
//   console.log('Go!');
// } else {
//   console.log('Caution, unknown!');
// }

// let season = 'summer';

// if (season === 'spring') {
//   console.log('It\'s spring! The trees are budding!');
// }  else if (season === 'winter') { 
//   console.log('It\'s winter! Everything is covered in snow.');
// } else if (season === 'fall') {
//     console.log('It\'s fall! Leaves are falling!');
// } else if (season === 'summer') {
//     console.log('It\'s sunny and warm because it\'s summer!');
// }
//   else {
//   console.log('Invalid season.');
// }
// // The else if statements allow you to have multiple possible outcomes.
// //  if/else if/else statements are read from top to bottom, 
// // so the first condition that evaluates to true from the top 
// // to bottom is the block that gets executed.

// //The switch keyword

// let groceryItem = 'papaya';
 
// if (groceryItem === 'tomato') {
//   console.log('Tomatoes are $0.49');
// } else if (groceryItem === 'papaya'){
//   console.log('Papayas are $1.29');
// } else {
//   console.log('Invalid item');
// }
// // In the code above, we have a series of conditions checking for a 
// // value that matches a groceryItem 
// // variable. Our code works fine, but imagine if we needed to 
// // check 100 different values! Having to write that many 
// // else if statements sounds like a pain!

// // A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:
// //let groceryItem = 'papaya';
//  switch (groceryItem) {
//   case 'tomato':
//     console.log('Tomatoes are $0.49');
//     break;
//   case 'lime':
//     console.log('Limes are $1.49');
//     break;
//   case 'papaya':
//     console.log('Papayas are $1.29');
//     break;
//   default:
//     console.log('Invalid item');
//     break;
// }
//  // Prints 'Papayas are $1.29'

// //  The switch keyword initiates the statement and is followed by ( ... ), which contains the value that each 
// //  case will compare. In the example, the value or expression of the switch statement is groceryItem.
// // Inside the block, { ... }, there are multiple cases. The case keyword checks if the expression matches 
// // the specified value that comes after it. The value following the first case is 'tomato'. If the value of 
// // groceryItem equalled 'tomato', that case‘s console.log() would run.
// // The value of groceryItem is 'papaya', so the third case runs— Papayas are $1.29 is logged to the console.
// // The break keyword tells the computer to exit the block and not execute any more code or check any other 
// // cases inside the code block. Note: Without break keywords, the first matching case will run, but so will 
// // every subsequent case regardless of whether or not it matches—including the default. This behavior is 
// // different from if/else conditional statements that execute only one block of code.
// // At the end of each switch statement, there is a default statement. If none of the cases are true, then the code 
// // in the default statement will run.

// let athleteFinalPosition = 'first place';

// switch (athleteFinalPosition) {
//   case 'first place':
//     console.log('You get the Gold medal!');
//     break;
//   case 'second place':
//     console.log('You get the Silver medal!');
//     break;
//   case 'third place':
//     console.log('You get the bronze medal!');
//     break;
// }

// // Review

// // Way to go! Here are some of the major concepts for conditionals:

// // An if statement checks a condition and will execute a task if that condition evaluates to true.
// // if...else statements make binary decisions and execute different code blocks based on a provided condition.
// // We can add more conditions using else if statements.
// // Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
// // The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
// // The logical operator ||, or “or”, checks if either provided expression is truthy.
// // The bang operator, !, switches the truthiness and falsiness of a value.
// // The ternary operator is shorthand to simplify concise if...else statements.
// // A switch statement can be used to simplify the process of writing multiple else if statements. 
// // The break keyword stops the remaining cases from being checked and executed in a switch statement.

// let userName = "";
// userName ? 
// console.log('Hello Jane!') : 
// console.log('Hello!');
// // i used the let then const..
// const userQuestion = "";
// console.log('Will i get a new job!?!')

// //looked at the cheatsheet to see if it was a let or a const
// const initialValue = Math.random() * 8
// console.log(`initialValue: ${initialValue}`)

// const randomNumber = Math.floor(initialValue)
// console.log(`randomNumber floored: ${randomNumber}`)

// if (randomNumber === 0){
//   console.log('It is certain');
// } else if (randomNumber === 1){ 
//   console.log('it is decidedly so');
// } else if (randomNumber === 2){
//   console.log('My sources say no');
// } else if (randomNumber === 3);{
//   console.log('Signs point to yes');
// }

// console.log(`The eight ball answered: ${randomNumber}`);

// //Race Day
// let raceNumber = Math.floor(Math.random() * 1000);

// let registeredEarly = true;
// let age = 18;

// if (age === 18 && registeredEarly === false) { 
//  raceNumber += 1000;
// } 
// if(age > 18 && registeredEarly === false){
//   console.log('Your race will start at 9:30am and your race number is :' + raceNumber);
// } else if (age < 18 && registeredEarly === false) {
//   console.log('Your race will start at 11:00am and your race number is :' + raceNumber);
// } else if (age >= 18 + registeredEarly === '') {
//   console.log('Your race will start at 12:30 and your race number is :' + raceNumber);
// } else {
//   console.log('Please see the registration desk');
// }