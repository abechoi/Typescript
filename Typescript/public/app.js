"use strict";
// DOM
// Must add ! else it may think anchor is HTMLAnchorElement or NULL.
// ! = "I know this exists"
var anchor = document.querySelector('a');
console.log(anchor.href);
// For classes, you must specify tag type with "as HTMLFormElement"
var form = document.querySelector('.new-item-form');
console.log(form.children);
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details + "!";
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
console.log(invOne, invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
var form2 = document.querySelector('.new-item-form');
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
