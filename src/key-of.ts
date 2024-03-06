interface City {
    age: number;
    country: string;
    name: string;
}

const city: City = {
    age: 106,
    country: 'PL',
    name: 'Poland'
};


const getPropertyValue = <T, K extends keyof T>(obj: T, property: K) => obj[property];
const getCityPropertyValue = (property: keyof typeof city) => city[property];

const cityAge = getPropertyValue(city, 'age');
// const cityCode = getPropertyValue(city, 'code'); // error - Argument of type '"code"' is not assignable to parameter of type 'keyof City'.ts(2345)

const cityName = getCityPropertyValue('name');
// const cityName = getCityPropertyValue('code'); // error - Argument of type '"code"' is not assignable to parameter of type 'keyof City'.ts(2345)