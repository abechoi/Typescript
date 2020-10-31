// Create an interface
const me = {
    name: "Abe",
    age: 33,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log("Hello ", person.name);
};
greetPerson(me);
import { Invoice } from "./classes/Invoice.js";
// DOM
// Must add ! else it may think anchor is HTMLAnchorElement or NULL.
// ! = "I know this exists"
const anchor = document.querySelector('a');
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
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
