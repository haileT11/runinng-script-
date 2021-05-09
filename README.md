# JavaScript

1. javascript
    - is a programming language that powers the dynamic behavior on most websites. Alongside HTML and CSS, it is a core technology that makes the web run.
1. variable
1. function
1. object
    - Object: Collections of related data.
1. array
1. interpolate
1. string interpolation
1. String
    - String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ". Though we prefer single quotes. Some people like to think of string as a fancy word for text.
1. const
1. let
1. scope
1. function deinition
1. function envocation
1. console.log()
    - method is used to log or print messages to the console. it can be used to print objects and other info.

    ```javascript
        console.log('Hi there!');
    ```

1. libraries
    - contain methoods that can be called by appending the library name with a period.,the method name, and set of parentheses.
    - "Math" is an example of a library `math.random()`
1. Numbers
    - numbers are a primitive adat type. they incllude the set of all integers and floating point numbers.
1. .length
the .length property of a string returns the number of characters that make up the string.
1. Boolean:
    - This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
1. Null:
    - This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
1. Add: + Subtract: - Multiply: * Divide: / Remainder: %
    - Data is printed, or logged, to the console, a panel that displays messages, with console.log().
    - We can write single-line comments with // and multi-line comments between /* and */.
    - There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.
1. Numbers are any number without quotes: 23.8879
1. Strings are characters wrapped in single or double quotes: 'Sample String'
1. The built-in arithmetic operators include +, -, *, /, and %.
1. Objects, including instances of data types, can have properties, stored information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.
    - We can access properties and methods by using the ., dot operator.
    - Built-in objects, including Math, are collections of methods and properties that JavaScript provides.

1. Here is a list of some handy comparison operators and their syntax:
    - Less than: <
    - Greater than: >
    - Less than or equal to: <=
    - Greater than or equal to: >=
    - Is equal to: ===
    - Is not equal to: !==

## if.....else

```javascript
    let hungerLevel = 7;
    if (hungerLevel > 7){
        console.log('Time to eat!');
    } else {
        console.log('We can eat later!');
    };
```

## logical operators

Working with conditionals means that we will be using booleans, true or false values. In JavaScript, there are operators that work with boolean values known as logical operators. We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators:

the `and` operator (`&&`)

```javascript
    if (stopLight === 'green' && pedestrians === 0) {
        console.log('Go!');
    } else {
        console.log('Stop');
    }
```

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