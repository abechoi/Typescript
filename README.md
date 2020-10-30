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
// Create an invoice class
class Invoice{
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

## The DOM
```
// Add "!" to confirm that the tag exists
const anchor = document.querySelector('a')!; 

// Add "as HTMLFormElement" to get form by class name
const form = document.querySelector('.new-item-form') as HTMLFormElement; 
```