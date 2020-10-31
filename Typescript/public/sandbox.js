"use strict";
// type basics
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// arrays
let names = ["luigi", "mario", "yoshi"];
names.push("toad");
// names.push(3); // cannot add number type to a string type array
let numbers = [10, 20, 30, 40];
//numbers.push("shaun"); // cannot add string type of a number type array
// initialize array with mixed types to add multiple types
let mixed1 = ['ken', 4, 'chunk-li', 8, 9, true];
// objects
let ninja = {
    name: "mario",
    belt: "black",
    age: 30
};
ninja.age = 40;
ninja.name = "ryu";
// ninja.age = "30";
// ninja.skills = ["fighting"] // cannot add additional properties to an object
// to re-initialize, object structure must remain the same
ninja = {
    name: "yoshi",
    belt: "orange",
    age: 40
};
// explicit types
let character;
let age1;
let isLoggedIn;
// arrays
let ninjas = [];
// union types
let mixed2 = []; // takes string number or boolean
let uid;
// objects
let ninjaOne;
ninjaOne = { name: "Yoshi", age: 30 };
let ninjaTwo;
ninjaTwo = {
    name: "mario",
    age: 30,
    beltColor: "black"
};
// any type
let age2 = 25;
age2 = true;
age2 = "hello";
age2 = {};
let mixed3 = [];
let people;
// function basics
let greet;
greet = () => {
    console.log('hello, again!');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
};
add(5, 10);
const minus = (a, b) => {
    return a + b;
};
let result = minus(1, 2);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
greet = (user) => {
    console.log(`${user.name} says hello`);
};
// function signatures
// example 1
let greet2;
greet2 = (name, greeting) => {
    console.log(`${name}: ${greeting}`);
};
greet2("Abe", "Whats poppin?");
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numTwo - numTwo;
    }
};
// example 3
let logDetails2;
logDetails2 = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
