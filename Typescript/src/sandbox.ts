// type basics
const circ = (diameter: number) => {
  return diameter * Math.PI;
}

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
}

// explicit types
let character: string;
let age1: number;
let isLoggedIn: boolean;

// arrays
let ninjas: string[] = [];

// union types
let mixed2: (string|number|boolean)[] = []; // takes string number or boolean
let uid: string|number;

// objects
let ninjaOne: object;
ninjaOne = { name: "Yoshi", age: 30 };

let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
}

ninjaTwo = {
  name: "mario",
  age: 30,
  beltColor: "black"
}

// any type
let age2: any = 25;
age2 = true;
age2 = "hello";
age2 = {};

let mixed3: any[] = [];
let people: { name: any, age: any};

// function basics
let greet: Function;
greet = () => {
  console.log('hello, again!');
}

const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
}
add(5, 10);

const minus = (a: number, b: number): number => {
  return a + b;
}
let result = minus(1, 2);

// type aliases

type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum};

const logDetails =  (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
}