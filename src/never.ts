// you can assign NEVER to a variable, but you cannot assign a variable to NEVER

let neverVariable: never;
let stringVariable: string;
let numberVariable: number;

function exampleWorks() {
  stringVariable = neverVariable;
  numberVariable = neverVariable;
}

function exampleDoesntWork() {
  //   neverVariable = stringVariable; // Type 'string' is not assignable to type 'never'.ts(2322)
  //   neverVariable = numberVariable; // Type 'number' is not assignable to type 'never'.ts(2322)
}

function exampleWithNever_1(value: string | number) {
  if (typeof value === 'object') {
    value; // (parameter) value: never
  }
}

function exampleWithNever_2(key: 'a' | 'b') {
  switch (key) {
    case 'a':
      return key;
    case 'b':
      return key;
    default:
      return key; // (parameter) key: never
  }
}
