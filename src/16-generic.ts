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

// MORE GENERIC

const getFirstElement = <T>(array: T[]) => {
  return array[0];
};

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);

const strings = ['aaa', 'bbb'];
const firstString = getFirstElement(strings);

const input = document.querySelector<HTMLInputElement>('.input');

const a = [1, 2, 3];
a.map(() => {
  return '';
});

const map = new Map([['ava', 3]]);
const map2 = new Map<string, Map<string, number>>();

type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};

type ApiResponseWithDefault<Data = { status: number }> = {
  data: Data;
  isError: boolean;
};

type UserResponse = ApiResponse<{ name: string; age: number }>;
type BlogResponse = ApiResponse<{ name: string; publishDate: string }>;
type StatusResponse = ApiResponse<{ status: number }>;

const response2: UserResponse = {
  data: {
    name: 'Sam',
    age: 50,
  },
  isError: true,
};

const response3: BlogResponse = {
  data: {
    name: 'Sam',
    publishDate: '1234',
  },
  isError: true,
};

// more about default and extend the generic

const response: ApiResponse<{ name: string; age: number }> = {
  data: {
    name: 'Sam',
    age: 50,
  },
  isError: true,
};

const response4: ApiResponseWithDefault = {
  data: {
    status: 200,
  },
  isError: false,
};

type ApiResponseWithExtendsAndDefault<
  Data extends object = { status: number }
> = {
  data: Data;
  isError: boolean;
};

const response5: ApiResponseWithExtendsAndDefault = {
  data: { status: 200 },
  isError: false,
};
