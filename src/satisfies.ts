// allows you to "narrow down" the type

type Animal = {
  age: number;
  country: string | string[];
  name: string;
};

const animal1: Animal = {
  age: 12,
  country: 'Poland',
  name: 'wild boar',
};

// animal1.country.toUpperCase(); // error - Property 'toUpperCase' does not exist on type 'string | string[]'.

const animal2 = {
  age: 12,
  country: 'Poland',
  name: 'wild boar',
} satisfies Animal;

animal2.country.toUpperCase(); // will work since our type has narrowed down 
