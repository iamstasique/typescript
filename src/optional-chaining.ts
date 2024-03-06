interface Person {
  name: string;
  surname?: string;
}

let personObject: Person = {
  name: 'Stas',
};

// personObject.surname?.toLowerCase() is undefined
