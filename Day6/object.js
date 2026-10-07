let person = {
    name: "Mukesh",
    age: 22,
    address: {
        city: "Kathmandu",
        wardNo: "04",
        Pravince: "Bagmati",
    },
    greet: function(){
        console.log("Welcome", this.name);
    },
    calculateBirthYear: function(){
        year = 2026 - this.age;
        console.log(year);
    },
};
//here, name , age, address are called keys, properties 
// and Mukesh, 22, Kirtipur are called values.
// Object has multiple key-value pair, separated by ","
// here, greet is called "Method" and it has following way to cal
// person.greet();

// console.log(person.name); // dot notation
// console.log(person["name"]); //bracket notation
// person.address = "Pokhara";
// console.log(person["name"]); 
 person.greet();
 person.calculateBirthYear();



