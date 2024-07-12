// ENUMS
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource2<T> {
  uid: number;
  resourceType: number;
  data: T;
}

const docOne: Resource2<{ title: string }> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind' },
};

const docTwo: Resource2<string> = {
  uid: 2,
  resourceType: ResourceType.FILM,
  data: 'name',
};

console.log(docOne, docTwo);
