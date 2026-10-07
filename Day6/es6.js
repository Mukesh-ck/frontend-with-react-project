// function addNumbers(a,b){
//     let sum = a + b;
//     return sum;
// }

// // traditional Function Syntax

// const addNumbers1 = (a, b) => a + b;
// // Arrow function /Modern Way/ Es6 Feature to define a function

// const calculateAge = (birthYear) => {
//     let date = new Date();
//     let currentYear = date.getFullYear();
//     let ageCalculated = currentYear - birthYear;
//     return ageCalculated;
// }

// console.log(calculateAge(1999));
// // calculateAge(1999);

// const squareNumber = (a) => a * a;
// console.log(squareNumber(4));

// // Template Literal
// let collegeName = "Sahid Smarak";
// let address = "Kirtipur";
// console.log("My college name is " + " " +collegeName)
// //concatenation

// let message = `My college name is ${collegeName} and it is located at ${address} it was established ${2026 - 1991} years ago.`;
// console.log(message);

// let person = {
//     name: "Ramesh",
//     age: 21,
//     address:{
//         city: "Kathmandu",
//         wardNo: 10,
//         province: "Bagmati",
//     },
// };

// const {name, age} = person; //restructhring
// // person.name
// console.log(name);

// let colors = ["red", "green", "blue", "orange"];
// const [firstColor, secondColor] = colors;

// console.log(firstColor);

// // Spread Operator

// let oddNumbers = [1,3,5,6,7,9];
// let evenNumbers = [2,4,6,8,10];
// let allNumbers = [...oddNumbers, ...evenNumbers];
// console.log(allNumbers);

// class Animal {
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         console.log(`${this.name} makes a sound.`);
//     }
// }
//  const dog = new Animal("Rex");
//  // Dog is a object, created from a class.
//  dog.speak();


//  let dog = {
//     name: "Rex",
//  };

 