interface Person {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: Person = {
  name: 'Cheer',
  age: 32,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent', amount);
    return amount;
  },
};

console.log(me);
me.speak('Hello, world!');
console.log(me.spend(100));

const greetPerson = (person: Person) => {
  console.log('Hello', person.name);
};

greetPerson(me);
