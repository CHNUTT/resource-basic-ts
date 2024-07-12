// Generics

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

const doc1 = addUID({ name: 'Yoshi', age: 40 });

console.log(doc1);

// doc1.name;
// doc1.age;

const doc2 = addUID({ name: 'Cheer' });

// const doc3 = addUID('1234');

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  data: { name: 'shaun' },
};

const docFour: Resource<string> = {
  uid: 1,
  resourceName: 'person',
  data: 'shaun',
};

const docFive: Resource<string[]> = {
  uid: 1,
  resourceName: 'person',
  data: ['person1', 'person2'],
};

console.log(docThree, docFour, docFive);
