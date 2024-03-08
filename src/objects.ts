/**
 * Object
 */

let objectA: Object = '1234';
objectA = 1234;
objectA = [];
objectA = {};
objectA = () => {};

// objectA = null; // Type 'null' is not assignable to type 'Object'.ts(2322)
// objectA = undefined; Type 'undefined' is not assignable to type 'Object'.ts(2322)

// objectA.name; Property 'name' does not exist on type 'Object'.ts(2339)

/**
 * object
 */

let objectB: object = {};
// objectB = '1234'; Type 'string' is not assignable to type 'object'.ts(2322)
// objectB = 1234; Type 'number' is not assignable to type 'object'.ts(2322)
objectB = [];
objectB = () => {};

// objectB = null; Type 'null' is not assignable to type 'object'.ts(2322)
// objectB = undefined; Type 'undefined' is not assignable to type 'object'.ts(2322)

// objectB.name; Property 'name' does not exist on type 'object'.ts(2339)

/**
 * {}
 */

let objectC: {} = {};
objectC = '1234';
objectC = 1234;
objectC = [];
objectC = () => {};

// objectC = null; Type 'null' is not assignable to type '{}'.ts(2322)
// objectC = undefined; Type 'undefined' is not assignable to type '{}'.ts(2322)

// objectC.name; Property 'name' does not exist on type '{}'.ts(2339)

/**
 * Record<string, unknown>
 */

let objectD: Record<string, unknown> = {};
// objectD = '1234'; Type 'string' is not assignable to type 'Record<string, unknown>'.ts(2322)
// objectD = 1234; Type 'number' is not assignable to type 'Record<string, unknown>'.ts(2322)
// objectD = []; Type 'never[]' is not assignable to type 'Record<string, unknown>'.
// objectD = () => {}; Type '() => void' is not assignable to type 'Record<string, unknown>'.

// objectD = null; Type 'null' is not assignable to type '{}'.ts(2322)
// objectD = undefined; Type 'undefined' is not assignable to type '{}'.ts(2322)

objectD.name;