//if (1 === 1){
//  console.log("It's True!");
//}
//console.log("3 + 4")

// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// 0 - WTF 

let rating = 1
if (rating === 3){
    console.log('You are a superstar');
}
else if (rating === 2){
     console.log('meets expectations');
        
    }
else if (rating === 1) {
    console.log('meets expectations'); 
}
let age = 30
 if (age < 6 || age >= 65){
     console.log('you get in for free');
 } 
 else {
     console.log('you must pay!');
 }
 let day = 7
    switch (day) {
        case 1:
            console.log ('Monday');
        case 2:
            console.log ('Tuesday');
        case 3:
            console.log ('Wednesday');
        case 4:
            console.log ('Thursday');
        case 5:
            console.log ('Friday');
        case 6:
            console.log ('Saturday');
        case 7:
            console.log ('Sunday');
    }
 let status = 'online';
 
// 'online' === 'offline' 
// expression ? true : false 
// false ? true : false
 let color = 'online' === 'offline' ? 'red' : 'green';
 console.log(status)
 console.log(color)
let colors = ['red', 'orange', 'yellow', 'green', 
'blue', 'ingigo', 'violet'];

// ask laura why line 60 isnt working /////but at fixed that shit!!!
let fruits = [ 'apple', 'banana' ];
let veggies = [ 'aspargus', 'brussel sprouts' ];
let meat = ['steak', 'chicken breast' ];

console.log(fruits.concat(meat));
console.log(meat.concat(fruits));

let allFood = fruits.concat(veggies, meat);

let ingredients =[
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'
];

if (ingredients.includes('flour')) {
    console.log('I AM GLUTEN FREE, I CANNOT EAT THAT');
}
let animals = ['shark', 'salmon', 'whale','whale'];
console.log(animals);

const fitBitData = {
    totalSteps       : 308727,
    totalMiles       : 211.7,
    avgCalorieBurn   : 5755,
    workoutsThisWeek : '5 of 7',
    avgGoodSleep     : '2:13' 
};
console.log(fitBitData);

const palette = {
    red : ' #eb4d4b',
    yellow : ' #f9ca24',
    blue : ' #30336b'
};
console.log(palette);
//loop
for(let i = 2; i <= 10; i+=3){
    console.log('hello:', i);
}
// DON'T RUN THIS!
//for(let i = 1; !== 20; i += 2) {
 //   console.log(i);
 // if you want to stop this from running forever but a break;
 // your able to use a boolen and while(true)
//}
let friends = (10);
friends **= 2
console.log(friends)

for (let i = 0; i <= 5; i++) {
    console.log(i)
}
let j = 0;
while (j <= 5) {
    console.log(j);
    j++;
}
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
    console.log('Target: ${target} Guess: ${guess}');
    guess = Math.floor(Math.random() * 10);
}
console.log('Target: ${target} Guess: ${guess}');
console.log('CONGRATS YOU WIN!!');

// while(some condition)
//in the loop, update or attempt to make that condition false

let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ]
;
for (let sub of subreddits) {
    console.log(sub);
}
 