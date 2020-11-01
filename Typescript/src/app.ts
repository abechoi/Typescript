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

const greetPerson = (person: IsPerson) => {
  console.log("Hello ", person.name);
}
greetPerson(me);

import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

// DOM
// Must add ! else it may think anchor is HTMLAnchorElement or NULL.
// ! = "I know this exists"
const anchor = document.querySelector('a')!;

// classes
// class Invoice{
//   // readonly cannot be overwritten
//   readonly client: string;
//   // private can only be accessed via class
//   private details: string;
//   public amount: number;

//   constructor(c: string, d: string, a: number){
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }

//   // shorthand
//   constructor(
//     readonly client: string,
//     private details: string,
//     public amount: number
//   ){}

//   format(){
//     return `${this.client} owes $${this.amount} for ${this.details}!`;
//   }
// }

// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//   console.log(inv.client, inv.amount, inv.format());
// });

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if(type.value === "invoice"){
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  }else{
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
})