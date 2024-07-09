import Invoice from './classes/Invoice.js';

const invOne = new Invoice('mario', 'work on the mario website', 200);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// invOne.client = 'yoshi';
invTwo.amount = 400;

console.log(invOne, invTwo);
console.log(invoices);
