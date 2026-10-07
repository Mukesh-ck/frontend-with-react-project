// let color1 = "red";
// let color2 = "Green";
// let color3 = "red";
// let color4 = "Black";

// const { jsx } = require("react/jsx-runtime");

// let colorsNew = new Array("");

// let colors = ["red", "green", "blue", "orange", 4, true, [], {}];

// let colors = ["red", "green", "blue", "orange"];
// let selectedColor = colors[1];
// console.log(selectedColor);

// let mumbers =[
//     2,3,4,5,6,7,8,9,0,7,6,5,4,3,3,2,4,2,3,4,8
// ];
// // console.log(numberss.length);

// console.log(numbers[numbers, length -1]);

// Array Methods
// add item
// colors.push("Pink");
// console.log(colors);

// //remove item
// colors.pop();
// console.log(colors);

// splic
// Array.splice(startTransition, deleteCount, item1, item2, ..., itemN)
// colors.splice(2,1, "Kiwi");
// console.log(colors);

// short
// colors.sort();
// console.log(colors);

let randomNumbers = [23, 65, 43, 32, 454,23];

// // numeric sort
// randomNumbers.sort(function (a, b){
//     return a - b;
// });

// console.log(randomNumbers);

// randomNumbers.reverse();
// console.log(randomNumbers);

// randomNumbers.filter((num) => num > 50);
// console.log("filteredNumbers", filteredNumbers);

let tenTimes = randomNumbers.map((num) => num * 10);
console.log(tenTimes);