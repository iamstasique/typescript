function isStringType(value: any): value is string {
  return typeof value === 'string';
}

function doSomething(value: any) {
  if (isStringType(value)) {
    console.log('It is a string: ' + value);
    return value += ' World';
  }

  console.log("Don't know what is the type", value);
  return value;
}

doSomething('Hello');
doSomething({ a: 'b' });
