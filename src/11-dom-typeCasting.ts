// const anchor = document.querySelector('a')!;

// // if (anchor) {
// //     console.log(anchor.href);
// // }

// console.log(anchor.href);

// const form = document.querySelector('form')!;

// type casting form to HTMLFormElement
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toForm = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.dir(type);
  console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
});
