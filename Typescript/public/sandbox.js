"use strict";
// type basics
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// arrays
var names = ["luigi", "mario", "yoshi"];
names.push("toad");
// names.push(3); // cannot add number type to a string type array
var numbers = [10, 20, 30, 40];
//numbers.push("shaun"); // cannot add string type of a number type array
// initialize array with mixed types to add multiple types
var mixed1 = ['ken', 4, 'chunk-li', 8, 9, true];
// objects
var ninja = {
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
var character;
var age1;
var isLoggedIn;
// arrays
var ninjas = [];
// union types
var mixed2 = []; // takes string number or boolean
var uid;
// objects
var ninjaOne;
ninjaOne = { name: "Yoshi", age: 30 };
var ninjaTwo;
ninjaTwo = {
    name: "mario",
    age: 30,
    beltColor: "black"
};
// any type
var age2 = 25;
age2 = true;
age2 = "hello";
age2 = {};
var mixed3 = [];
var people;
// function basics
var greet;
greet = function () {
    console.log('hello, again!');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
};
add(5, 10);
var minus = function (a, b) {
    return a + b;
};
var result = minus(1, 2);
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
greet = function (user) {
    console.log(user.name + " says hello");
};
// function signatures
// example 1
var greet2;
greet2 = function (name, greeting) {
    console.log(name + ": " + greeting);
};
greet2("Abe", "Whats poppin?");
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numTwo - numTwo;
    }
};
// example 3
var logDetails2;
logDetails2 = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
