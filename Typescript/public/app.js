"use strict";
// DOM
// Must add ! else it may think anchor is HTMLAnchorElement or NULL.
// ! = "I know this exists"
var anchor = document.querySelector('a');
console.log(anchor.href);
// For classes, you must specify tag type with "as HTMLFormElement"
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
