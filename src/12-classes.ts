import Invoice from './classes/Invoice.js';
import ListTemplate from './classes/ListTemplate.js';
import Payment from './classes/Payment.js';
import HasFormatter from './interfaces/HasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
const invoiceOne: HasFormatter = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);

const docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toForm = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;

const form = document.querySelector('.new-item-form') as HTMLFormElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number] = [
    toForm.value,
    details.value,
    amount.valueAsNumber,
  ];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  const list = new ListTemplate(ul);
  list.render(doc, type.value, 'end');
});

// -----------------------------

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
