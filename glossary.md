JavaScript
is a programming language that powers the dynamic behavior on most websites. Alongside HTML and CSS, it is a core technology that makes the web run.


variable

function 

object 
Object: Collections of related data.

array

interpolate
string interpolation

String 
String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ". Though we prefer single quotes. Some people like to think of string as a fancy word for text.


const 

let 

scope 

function deinition 

function envocation 

console.log()
 method is used to log or print messages to the console. it can be used to print objects and other info.
//console.log('Hi there!');

libraries
contain methoods that can be called by appending the library name with a period.,the method name, and set of parentheses.
// Math is the library  math.random()

Numbers
numbers are a primitive adat type. they incllude the set of all integers and floating point numbers.

.length
the .length property of a string returns the number of characters that make up the string.

Boolean:
This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.

Null: 
This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).

Add: + Subtract: - Multiply: * Divide: / Remainder: %

Data is printed, or logged, to the console, a panel that displays messages, with console.log().
We can write single-line comments with // and multi-line comments between /* and */.
There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.

Numbers are any number without quotes: 23.8879

Strings are characters wrapped in single or double quotes: 'Sample String'

The built-in arithmetic operators include +, -, *, /, and %.

Objects, including instances of data types, can have properties, stored information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.

Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().

We can access properties and methods by using the ., dot operator.
Built-in objects, including Math, are collections of methods and properties that JavaScript provides.

Here is a list of some handy comparison operators and their syntax:

Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==

if.....else
let hungerLevel = 7;
if (hungerLevel > 7){
  console.log('Time to eat!');
} else {
    console.log('We can eat later!');
};

logical operators
Working with conditionals means that we will be using booleans, true or false values. In JavaScript, there are operators that work with boolean values known as logical operators. We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators:

the and operator (&&)
if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}
the or operator (||)
if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}

the not operator, otherwise known as the bang operator (!)
let excited = true;
console.log(!excited); // Prints false
 
let sleepy = false;
console.log(!sleepy); // Prints true

When we use the && operator, we are checking that two things are true:
When using the && operator, both conditions must evaluate to true for the entire condition to evaluate to true and execute. Otherwise, if either condition is false, the && condition will evaluate to false and the else block will execute.

If we only care about either condition being true, we can use the || operator:

Truthy and Falsy