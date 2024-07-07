// let greet10: Function;
console.log('10. Function Signatures');

// example 1
let greet10: (a: string, b: string) => void;
greet10 = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

greet10('mario', 'hello');

// example 2
let cals10: (a: number, b: number, c: string) => number;
cals10 = (numOne: number, numTwo: number, operation: string) => {
  if (operation === 'add') {
    return numOne + numTwo;
  }
  if (operation === 'minus') {
    return numOne - numTwo;
  }
  if (operation === 'multiply') {
    return numOne * numTwo;
  } else {
    return numOne / numTwo;
  }
};
console.log(cals10(10, 5, 'add'));

// example 3
let logDetails10: (obj: { name: string; age: number }) => void;

type person = { name: string; age: number };

logDetails10 = (ninja: { name: string; age: number }) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};

logDetails10({ name: 'yoshi', age: 30 });
