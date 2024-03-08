// you can assign NEVER to a variable, but you cannot assign a variable to NEVER


/**
 * FIRST example
 */
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

/**
 * SECOND example
 */

enum ActionTypes {
  Intement = 'increment',
  Decrement = 'decrement',
}

interface State {
  count: number;
}
type SomeAction = { type: ActionTypes.Intement; payload: number } | { type: ActionTypes.Decrement; payload: number };

function someMethod(state: State, action: SomeAction): State {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.Intement: {
      return { ...state, count: state.count + payload };
    }
    case ActionTypes.Decrement: {
      return { ...state, count: state.count - payload };
    }
    default:
      return methodWithNeverArgument(type); // will work
  }
}

function someMethod2(state: State, action: SomeAction) {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.Intement: {
      return { ...state, count: state.count + payload };
    }
    default:
    //   return methodWithNeverArgument(type);
    // Argument of type 'ActionTypes' is not assignable to parameter of type 'never'.ts(2345) - because we didn't check "ActionTypes.Decrement"
  }
}

function methodWithNeverArgument(value: never): never {
  return value;
}


/**
 * THIRD example
 */

type FilterTestType<T extends string> = T extends 'trash' ? never : T;
type TestType = FilterTestType<'hello' | 'world' | 'how' | 'are' | 'you' | 'trash'>
// result is - type TestType = "hello" | "world" | "how" | "are" | "you" - because we filtered out type