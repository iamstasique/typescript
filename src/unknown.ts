// unknown is analog of any BUT which needs to be checked before use

function test1(arg: any) {
  console.log(arg + 5);
  console.log(arg.concat([1, 2, 3]));
  console.log({ ...arg });
}

function test2(arg: unknown) {
  if (typeof arg === 'number') {
    console.log(arg + 5);
  }

  if (Array.isArray(arg)) {
    console.log(arg.concat([1, 2, 3]));
  }

  if (typeof arg === 'object' && arg !== null) {
    console.log({ ...arg });
  }
}
