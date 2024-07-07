let character = 'mario';
let age = 30;
let isBlackBelt = false;

// character = 20;
character = 'luigi';

// age = 'yoshi';
age = 40;

// isBlackBelt = 'yes';
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(7.5));

// Arrays
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
// names.push(3);

let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
// mixed.push(true);

// Objects
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30,
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking'];

ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 40,
};

// Explicit types
let character2: string;
let age2: number;
let isLoggedIn: boolean;

// age2 = 'luigi';
age2 = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// Arrays
let ninjas: string[] = [];
ninjas.push('shaun');
console.log(ninjas);

// Union types
let mixed2: (string | number)[] = [];
mixed2.push('hello');
mixed2.push(20);
// mixed2.push(false);
console.log(mixed2);

let uid: string | number;
uid = '123';
// uid = false;

// Objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = { name: 'ken', age: 20, beltColor: 'black' };

// Any type

let age3: any = 25;

age3 = true;
console.log(age3);
age3 = 'hello';
console.log(age3);
age3 = { name: 'luigi' };
console.log(age3);

let mixed3: any[] = [];

mixed3.push(5);
mixed3.push('mario');
mixed3.push(false);
console.log(mixed3);

let ninjaThree: { name: any; age: any };
ninjaThree = { name: 'yoshi', age: 25 };
console.log(ninjaThree);
ninjaThree = { name: 25, age: 'yoshi' };
console.log(ninjaThree);
