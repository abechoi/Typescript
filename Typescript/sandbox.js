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
var mixed = ['ken', 4, 'chunk-li', 8, 9, true];
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
