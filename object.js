function printAnimal(my_animal) {
    console.log("Name: " + my_animal.name +  ", age: " + my_animal.age + ", gender: " + my_animal.gender + ", species " + my_animal.species)
}

// create basic object called "animal", with properties "name" and "age"
let animal = {
    name: 'Laura',
    age: 34, 
    gender: 'Female', 
    species: 'human'    
};

// write one "console.log" that prints both "name" and "age"
// console.log("name: " + animal.name +  ", age: " + animal.age + ", gender: " + animal.gender + ", species " + animal['species'])
printAnimal(animal)

// ---------------------------------------
// use dot notation to change object to information about Michael
// ---------------------------------------

// ASSIGN values using "dot notation"
animal.name = 'Michael';
animal.age = 38
animal.gender = 'Male'

// READ
//console.log("name: " + animal.name +  ", age: " + animal.age + ", gender: " + animal.gender + ", species " + animal['species'])
printAnimal(animal)
// ---------------------------------------
// use dot notation to change object to information about Rosie
// ---------------------------------------
// ASSIGN values using "bracket notation"
animal['name'] = 'Rosie Posie';
animal['age'] = 1
animal['gender'] = 'non-binary'
animal['species'] = 'Dog'

// READ values using "bracket notation"
//console.log("name: " + animal['name'] +  ", age: " + animal['age'] + ", gender: " + animal.gender + ", species " + animal['species'])
printAnimal(animal)

// READ values using "bracket notation", using a variable for property name
// ASSIGN values using "bracket notation", using a variable for property name

// ---------------------------------------
// let selection = 'name';
// animal[selection] = 'Michael';
// animal['name'] = 'Michael';

//console.log(animal.name);


// //const circle = {
// //    radius:1,
// //    location: {
// //        x:1,
// //        y:1
// //    },
// //    isVisible: true,
// //    draw: function() {
// //        console.log('draw');
// //    }
// //};

// // Camel Notation: oneTwoThreeFour
// // Pascal Notation: OneTwoThreeFour
// // Factory Function
// // function createCircle(radius) {
// //     return {
// //         radius,
// //         draw() {
// //             console.log('draw');
// //         }
// //     };
// // }
// // const circle1 = createCircle(1);
// // console.log(circle1)

// // const circle2 = createCircle(2);
// // console.log(circle2);

// // //Constructor Function
// // function Circle(radius) {
// //     this.radius = radius
// //     this.draw = function() {
// //         console.log('draw');
// //     }
// // }

//  function printHello(){
//      console.log('hello')
//  }
//  printHello()