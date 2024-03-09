/**
 * Interfaces
 */
interface Point {
  x: number;
}
interface Point {
  y: number;
}

const point: Point = {
  x: 2,
  y: 4,
};

/**
 * Types
 */

type PointType = {
  x: number;
};
// type PointType = { // Duplicate identifier 'PointType'.ts(2300)
//   y: number;
// };

const pointType: PointType = { x: 4/*, y: 4*/ }; // Object literal may only specify known properties, and 'y' does not exist in type 'PointType'.ts(2353)
