//Kelvin weather temperature
const kelvin = 293;
let celsius = kelvin - 273;
//convert celsius to fahreneit
let fahrenheit = celsius * (9 / 5 + 32); 
//convert from Celsius to Fahrenheit 
fahrenheit = Math.floor(fahrenheit);
//printing the Temperature of fahrenheit
console.log(`The Temperature is ${fahrenheit} degrees 
Fahrenheit.`);

let newton = celsius * (33/100)
newton = Math.floor(newton)
console.log(`The Temperature is ${newton} degrees celsius`);

console.log("\n\n\n\n Dog years \n\n\n\n\n")

// step 1git 
// A human age
const myAge = 38;

// step 2
// use 'let' since the value for this variable will change 
let earlyYears = 2;

// step 3
earlyYears *= 10.5; 
console.log(`early years: ${earlyYears}`);

// step 4
// later years -2 of a human age
let laterYears = myAge - 2;

// step 5
laterYears *= 4;

// step 6
console.log("later years: " + laterYears);

// step 7
let myAgeInDogYears = (earlyYears + laterYears);

// step 8
myName = "Michael".toLowerCase();

// step 9
console.log(`My name is ${myName}. I am ${myAge} years old in human years which 
is ${myAgeInDogYears} years old in dog years.`);
