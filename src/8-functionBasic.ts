// 8 Function Basics
// 9 Type Aliases

let greet: Function;

// greet = 'hello';

greet = () => {
  console.log('hello, world');
};

// const add = (a: number, b: number, c?: number | string): void => {
//   console.log(a + b);
//   console.log(c);
// };
const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};

add(5, 10, '400');

const minus = (a: number, b: number) => {
  return a + b;
};

let result = minus(100, 50);
// result = '132'; result is already number, minus function is inferred to return number based on the statement

type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet2 = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

const greet3 = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
