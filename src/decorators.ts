function HelloWorld(constructor: new (...args: any[]) => any) {
  return class extends constructor {
    helloWorld = 'Hello world, Stas';
  };
}

@HelloWorld
class ExampleClassForDecorator {
  helloWorld: string = 'default value';
}

const example = new ExampleClassForDecorator();
console.log(example.helloWorld); // Output: Hello world, Stas
