# Typescript

## Install Typescript
```
npm i -g typescript
```

## Compile Typescript to Javascript
```
tsc [filename.ts] [filename.js]
tsc [filename.ts] // if names are the same
tsc [filename.ts] -w // watch mode
```

## Create tsconfig.json
```
tsc --init
```


# SYNTAX

## Declaring Variables
```
let myVar: number; // Only numbers may be assigned to myVar
let myString: string = "Hello World";
let mixed: (number|string|boolean); // Only numbers, strings, or booleans may be assigend to mixed
let anyVar: any // Any types may be assigned to anyVar
```

## Arrays
```
let strArr: string[];
let anyArr: any[] = [];
```

## Functions
```
let func: Function;
Function = () => {
  console.log("Hello World);
}

// Function that adds 3 numbers, third variable is optional...
// if third number is not set, 10 is the default.
// Return type is implicitly void, not required to append.
const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b + c);
}
add(1,2);
add(1,2,3);

const minus = (a: number, b: number): number => {
  return a + b;
}
let result = minus(1, 2);

// Type aliases
type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum};

// user: objWithName > user: {name: string, uid: string | number}
greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
}
greet({name:"Abe", uid:123});

// Function signatures are a way to declare a function by setting the parameters,
// their types, and the return type
let calc: (a: number, b: number, c: string) => number; // Function signature
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add'){
    return numOne + numTwo;
  }else{
    return numTwo - numTwo;
  }
}
calc(1,2,"add"); // adds 1 + 2
```

## The DOM
```
// Add "!" to confirm that the tag exists
const anchor = document.querySelector('a')!; 

// Add "as HTMLFormElement" to get form by class name
const form = document.querySelector('.new-item-form') as HTMLFormElement; 
```

## Inputs
```
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );
})
```

## Objects
```
let ninja = {
  name: "Abe",
  belt: "black",
  age: 33
};
```

## Classes
```
// Create and export an invoice class
export class Invoice{
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number){
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format(){
    return `${this.client} owes $${this.amount} for ${this.details}!`;
  }
}

// Create and export an invoice class using access modifiers
export class Invoice{

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format(){
    return `${this.client} owes $${this.amount} for ${this.details}!`;
  }
}

// Import Invoice class
// In TS, add ".js" 
Import {Invoice} from "./classes/Invoice.js"

// Instantiate 2 Invoices
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// Create an array of the Invoice type
let invoices: Invoice[] = [];

// Push the 2 Invoices into the Invoice array
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);
```

## Interfaces
```
// Interface
interface IsPerson{
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

// Create an interface
const me: IsPerson = {
  name: "Abe", 
  age: 33,
  speak(text: string){
    console.log(text);
  },
  spend(amount: number): number{
    console.log('I spent', amount);
    return amount;
  }
};

// Function with a parameter of IsPerson interface
const greetPerson = (person: IsPerson) => {
  console.log("Hello ", person.name);
}

// Calling the function with an IsPerson interface
greetPerson(me);

// Interfaces with classes
export interface HasFormatter{
  format(): string;
}

import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter{
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ){}

  format(){
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
```

## Generics
```
// Non-generic example
const addUID = (obj: Object) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: "yoshi", age: 40});
// Cannot call docOne.name because the function is taking any objects
// thus it does not know that there is a name property.
console.log(docOne.name);

// Generic example 1
const addUID = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: "yoshi", age: 40});
// Never read because "hello" is a string not an object
let docTwo = addUID("hello");

// docOne.name is called because function now takes a generic
console.log(docOne.name);

// Generic example 2
// addUID only takes an object with a name property of string type
const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: "yoshi", age: 40});
// Never read because the object does not take a name property of string type
let docTwo = addUID({"Hello});

console.log(docOne.name);

// Example with interfaces 1
interface Resource{
  uid: number;
  resourceName: string;
  data: object;
}
const docThree: Resource = {
  uid: 1,
  resourceName: 'person',
  data: "Abe" // Throws error due to data being object type
}

// Example with interfaces 2
// Set data to a generic type
interface Resource<T>{
  uid: number;
  resourceName: string;
  data: T;
}

// Set the generic type to string
const docThree: Resource<string> = {
  uid: 1,
  resourceName: 'person',
  data: "Abe" // No error
}

// Example with interfaces 3
interface Resource<T>{
  uid: number;
  resourceName: string;
  data: T;
}
const docThree: Resource<string> = {
  uid: 1,
  resourceName: 'person',
  data: "Abe"
}
const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: 'shoppingList',
  data: ['bread', 'milk']
}
```

## Enums
```
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T>{
  uid: number;
  resourceType: ResourceType; // Declare as ResourceType which is an enum
  data: T;
}
const docThree: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'Name of the Wind'}
}
const docFour: Resource<object> = {
  uid: 2,
  resourceType: ResourceType.PERSON,
  data: { name: "Abe", age: 33}
}
console.log(docThree, docFour);
```

## Tuples
```
// Set type for each position
let tuple: [string, number];
student = ['Abe', 223434];

// Example
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // Set type for each position
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];
  
  let doc: HasFormatter;

  if(type.value === "invoice"){
    doc = new Invoice(...values);
  }else{
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "end");
})
```