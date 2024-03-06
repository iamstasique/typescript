function toDo<T>(arg: T): T {
  return arg;
}

let firstResult: string = toDo<string>('Hey');
// let secondResult: number = toDo<string>('Hey'); Type 'string' is not assignable to type 'number'.ts(2322)
