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
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// DOM
// Must add ! else it may think anchor is HTMLAnchorElement or NULL.
// ! = "I know this exists"
const anchor = document.querySelector('a')!;

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if(type.value === "invoice"){
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  }else{
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
})

// Generics

const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: "yoshi", age: 40});
//let docTwo = addUID("hello");

console.log(docOne.name);

// with interfaces & Enums
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T>{
  uid: number;
  resourceType: ResourceType;
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