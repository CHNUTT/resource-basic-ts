var character = 'mario';
var age = 30;
var isBlackBelt = false;
// character = 20;
character = 'luigi';
// age = 'yoshi';
age = 40;
// isBlackBelt = 'yes';
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// Arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3);
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
// mixed.push(true);
// Objects
var ninja = {
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
var character2;
var age2;
var isLoggedIn;
// age2 = 'luigi';
age2 = 30;
// isLoggedIn = 25;
isLoggedIn = true;
// Arrays
var ninjas = [];
ninjas.push('shaun');
console.log(ninjas);
// Union types
var mixed2 = [];
mixed2.push('hello');
mixed2.push(20);
// mixed2.push(false);
console.log(mixed2);
var uid;
uid = '123';
// uid = false;
// Objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'ken', age: 20, beltColor: 'black' };
// Any type
var age3 = 25;
age3 = true;
console.log(age3);
age3 = 'hello';
console.log(age3);
age3 = { name: 'luigi' };
console.log(age3);
var mixed3 = [];
mixed3.push(5);
mixed3.push('mario');
mixed3.push(false);
console.log(mixed3);
var ninjaThree;
ninjaThree = { name: 'yoshi', age: 25 };
console.log(ninjaThree);
ninjaThree = { name: 25, age: 'yoshi' };
console.log(ninjaThree);
