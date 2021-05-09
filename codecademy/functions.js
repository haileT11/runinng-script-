 A function declaration consists of:

// The function keyword.
// The name of the function, or its identifier, followed by parentheses.
// A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.
function getReminder(){
    console.log('Water the plants.')  
  }
  function greetInSpanish(){
    console.log('Buenas Tardes')
  }

  Calling a Function
// As we saw in previous exercises, a function declaration binds a function to an identifier.

// However, a function declaration does not ask the code inside the function body to run, it just declares the existence of the function. The code inside a function body runs, or executes, only when the function is called.

// To call a function in your code, you type the function name followed by parentheses.
function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.');
  }
  sayThanks();
  sayThanks();
  sayThanks();

Parameters and Arguments
//So far, the functions we’ve created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task. 
// When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s).
// We use parameters as placeholders for information that will be passed to the function when it is called.

// In the diagram above, calculateArea(), computes the area of a rectangle, based on two inputs, width and height. 
// The parameters are specified between the parenthesis as width and height, and inside the function body, 
// they act just like regular variables. width and height act as placeholders for values that will be multiplied together.

// When calling a function that has parameters, we specify the values in the parentheses that follow the function name. 
// The values that are passed to the function when it is called are called arguments. Arguments can be passed to 
// the function as values or variables.
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  sayThanks('Cole')
  
   Default Parameters
//   One of the features added in ES6 is the ability to use default parameters. 
//   Default parameters allow parameters to have a predetermined value in case 
//   there is no argument passed into the function or if the argument is undefined when called.
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
   
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!

//In the example above, we used the = operator to assign the parameter name a default value of 'stranger'. 
//This is useful to have in case we ever want to include a non-personalized default greeting!
// When the code calls greeting('Nick') the value of the argument is passed in and, 'Nick', will override the default parameter of 
//'stranger' to log 'Hello, Nick!' to the console.
// When there isn’t an argument passed into greeting(), the default value of 'stranger' is used, and 'Hello, stranger!' is logged to the console.

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

  Return
  //When a function is called, the computer will run through the function’s code and evaluate the r
  //esult of calling the function. By default that resulting value is undefined.
  function rectangleArea(width, height) {
    let area = width * height;
  }
  console.log(rectangleArea(5, 7)) // Prints undefined

//   In the code example, we defined our function to calculate the area of a width and height parameter.
//   Then rectangleArea() is invoked with the arguments 5 and 7. 
//   But when we went to print the results we got undefined. 
//   Did we write our function wrong? 
//   No! In fact, the function worked fine, and the computer did calculate the area as 35,
//    but we didn’t capture it. So how can we do that? With the keyword return!

// to pass back information from the function call, we use a return statement. 
// To create a return statement, we use the return keyword followed by the value that we wish to return.
//  Like we saw above, if the value is omitted, undefined is returned instead.
// When a return statement is used in a function body, the execution of the function is stopped and 
// the code that follows it will not be executed. Look at the example below:
function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
      return 'You need positive integers to calculate area!';
    }
    return width * height;
  }
  
// If an argument for width or height is less than 0, then rectangleArea() will return 'You need positive integers to calculate area!'. 
// The second return statement width * height will not run.
// The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.
   
function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  const numOfMonitors = monitorCount(5, 4);
  
  console.log(numOfMonitors);

  Helper Functions

  function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
   }
  const totalCost = costOfMonitors(5,4);
  console.log(totalCost);
  
  Function Expressions
//   Another way to define a function is to use a function expression. 
//   To define a function inside an expression, 
//   we can use the function keyword. In a function expression, 
//   the function name is usually omitted. A function 
//   with no name is called an anonymous function. A function expression 
//   is often stored in a variable in order to refer to it.

const plantNeedsWater = function(day){
    if(day === 'Wednesday'){
      return true;
    }
    else if (day !== 'Wednesday'){
      return false;
    }
  }; 
  
  // const timeToWater = plantNeedsWater('Tuesday')
  
  // console.log(timeToWater)
  
  console.log(plantNeedsWater('Tuesday'))

  Arrow 
//   Arrow functions remove the need to type out the keyword function every time you need to create a function. 
//   Instead, you first include the parameters inside the ( ) and then add an arrow => 
//   that points to the function body surrounded in { } like this:

const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
 
// Functions that take only a single parameter do not 
// need that parameter to be enclosed in parentheses. However, 
// if a function takes zero or multiple parameters, parentheses are required.

Zero Parameters
const functionName = () => {};
One Parameter
const functionName = paramOne => {};
Two or more Parameters
const functionName = {paramOne, paramTwo} => {};

// A function body composed of a single-line block does not need curly braces. 
// Without the curly braces, whatever that line evaluates will be automatically returned. 
// The contents of the block should immediately follow the arrow => and 
// the return keyword can be removed. This is referred to as implicit return.

single-line block
const functionName = number => number + number;

multi-line block
const sumNumbers = number => {
    const sum = number + number;
    return sum; <--return statement 
};

//So if we have a function:

const squareNum = (num) => {
  return num * num;
};
//We can refactor the function to:
const squareNum = num => num * num;

// Notice the following changes:

// The parentheses around num have been removed, since it has a single parameter.
// The curly braces { } have been removed since the function consists of a single-line block.
// The return keyword has been removed since the function consists of a single-line block.

// In this lesson, we covered some important concepts about functions:

// A function is a reusable block of code that groups together a 
// sequence of statements to perform a specific task.

// A parameter is a named variable inside a function’s block 
// which will be assigned the value of the argument passed in when the function is invoked:

// function definition
// arguement: passed to the function when it is invoked (called)
// parameter: are variables listed as a part of the function definition
// function call/invokation
// assign a value
// return a value

// function declaration
// OK: list parameters that will be used in your function body
function printWord(word){

}

// function declaration
// WRONG: do not call functions on parameters in the function declaration
function printWord(word.toLowerCase()){

}

// function declaration with a function body
// OK: call functions on parameters in the function body
function printWord(word){   
    console.log(word.toLowerCase())
}

// function call/invokation
// OK: call functions on arguments
console.log(printWord("lAuRA".toUpperCase())

/ function definition
// arguement: passed to the function when it is invoked (called)
// parameter: are variables listed as a part of the function definition
// function call/invokation
// assign a value
// return a value

const getUserChoice = userInput => {
  console.log(userInput)
  userInput = "hello"
  console.log(userInput)
  // paper



  console.log(userInput)
  // paper
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') { 
    return userInput;
  } else {
    console.log('');
  }
}

 getUserChoice('PAPER');
// console.log(getUserChoice('WRONG'));

// const getComuterChoice = () => {
//   console.log(Math.floor(Math.random ) * 3);
// }




// Zero Parameters
// const functionName = () => {};
// One Parameter
// const functionName = paramOne => {};
// Two or more Parameters
// const functionName = {paramOne, paramTwo} => {};
//let raceNumber = Math.floor(Math.random() * 1000);


Return Keyword
//with return
function sum(num1, num2) {
  return num1 + num2;
}

//Without return, so the function doesn't output the sum
function sum(num1, num2){
    num1 + num2;
}
// function return (pass back) values using the return keyword.
// Return ends function execution and returns the specified value to 
// the location where it was it was called. A common mistake is to forget the return keyword,
// in which case the function wil return undefined by default 

Function declaration
function add(num1, num2) {
    return num1 + num2;
}
// Function declarations are used to create named functions. These functions can be called using
// their declared name. Function declarations are built Form: 
// the function keyword.
// the function name.
// An optional list of parameters separated by commas enlosed by a set of parentheses().
// A function body enclosed in a set of curly braces {}

Function Expressions 
const dog = function() {
    return 'Woof!';
}
// Function expressions create functions inside an expression 
// instead of as a function declaration. They can be anonymous and/ or assigned to a variable.

Calling function 
//Defining the function 
function sum(num1, num2) {
    return num1, num2;
}

// Calling the function
sum(2, 4); //6

// functions can be called, or executed, elsewhere in code using parentheses 
//following the function name. when a function is called, the code inside its function body run
// ARGUMENTS are values passed into a function when it is called.

Function
// Functions are one of the fundamental building blocks in JavaScript. A functions is a reusable set of 
// statements to perform a task or calculate a value. Functions can be passed one or more values and can return a value at the 
// end of their execution. in order to use a functions, you must define it somewhere in the scope where
// you wish to call it.
// // 


// Define an order() function that announces your ice cream order.

// It should take two arguments: the number of scoops and the flavor. I
// t should return the order in this format:
//  "Lemme get [number] scoops of [flavor]!" It should use “scoop” when 
//  number is 1 and “scoops” for anything greater.


function order(numberScoops, flavor){
    if (numberScoops === 1){
      return `lemme get ${numberScoops} scoop of ${flavor}!`;
    }
    else if (numberScoops > 1){
      return `lemme get ${numberScoops} scoops of ${flavor}!`;
    }
}
console.log(order(1, 'strawberry'))