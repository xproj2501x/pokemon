/**
 * Utilities
 * ===
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
function isDefined(obj) {
  return (obj !== 'undefined');
}

function isNotNull(obj) {
  return (obj !== null);
}

function isBool(obj){
  return typeof obj === 'boolean';
}

function isString(obj){
  return typeof obj === 'string';
}

function isNumber(obj){
  return typeof obj === 'number';
}

function isInteger(obj){
  if(isNumber(obj)){
    return Number.isInteger(obj);
  }
  return false;
}

function isFloat(obj) {

}

function isObject(obj){
  return typeof obj === 'object';
}

function isFunction(obj){
  return typeof obj === 'function';
}

function isPowerOf2(number) {
  if (isNaN(number)) return false;
  return ((number !== 0) && !(number & (number - 1)));
}

function findNearestPowerOf2(number) {
  if (isPowerOf2(number)) return number;
  return 1 << (Math.round(Math.log(number) / Math.LN2));
}

/**
 * Normalizes an array as a percentage of the largest value.
 * @param {Array} array - The array to normalize.
 * @return {Array} - The normalized array.
 */
function normalizeArray(array) {
  let largest = -Infinity;

  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] > largest) largest = array[idx];
  }
  for (let idx = 0; idx < array.length; idx++) {
    array[idx] = array[idx] / largest;
  }
  return array;
}

/**
 * Scales an array as a percentage of the difference between the highest and lowest value.
 * @param {Array} array - The array to scale.
 * @return {Array} - The scaled array.
 */
function scaleArray(array) {
  const SIZE = array.length;
  let largest = -Infinity;
  let smallest = Number.MAX_VALUE;

  for (let idx = 0; idx < SIZE; idx++) {
    const VALUE = array[idx];

    if (VALUE > largest) {
      largest = VALUE;
    }
    if (VALUE < smallest) {
      smallest = VALUE;
    }
  }
  const RANGE = largest - smallest;
  const RESULT = new Array(SIZE);

  for (let idx = 0; idx < SIZE; idx++) {
    RESULT[idx] = (array[idx] - smallest) / RANGE;
  }
  return RESULT;
}

/**
 * Normalizes a grid as a percentage of the largest value.
 * @param {Array} grid - The grid to normalize.
 * @return {Array} - The normalized grid.
 */
function normalizeGrid(grid) {
  const WIDTH = grid.length;
  const HEIGHT = grid[0].length;
  let largest = -Infinity;

  for (let idx = 0; idx < WIDTH; idx++) {
    for (let jdx = 0; jdx < HEIGHT; jdx++) {
      const VALUE = grid[idx][jdx];

      if (VALUE > largest) largest = VALUE;
    }
  }
  const RESULT = new Array(WIDTH);

  for (let idx = 0; idx < WIDTH; idx++) {
    RESULT[idx] = new Array(HEIGHT);
  }

  for (let idx = 0; idx < WIDTH; idx++) {
    for (let jdx = 0; jdx < HEIGHT; jdx++) {
      RESULT[idx][jdx] = grid[idx][jdx] / largest;
    }
  }
  return RESULT;
}

/**
 * Scales a grid as a percentage of the difference between the highest and lowest value.
 * @param {Array} grid - The grid to scale.
 * @return {Array} - The scaled grid.
 */
function scaleGrid(grid) {
  const WIDTH = grid.length;
  const HEIGHT = grid[0].length;
  let largest = -Infinity;
  let smallest = Number.MAX_VALUE;

  for (let idx = 0; idx < WIDTH; idx++) {
    for (let jdx = 0; jdx < HEIGHT; jdx++) {
      const VALUE = grid[idx][jdx];

      if (VALUE > largest) largest = VALUE;
      if (VALUE < smallest) smallest = VALUE;
    }
  }
  const RANGE = largest - smallest;
  const RESULT = new Array(WIDTH);

  for (let idx = 0; idx < WIDTH; idx++) {
    RESULT[idx] = new Array(HEIGHT);
  }
  for (let idx = 0; idx < WIDTH; idx++) {
    for (let jdx = 0; jdx < HEIGHT; jdx++) {
      RESULT[idx][jdx] = (grid[idx][jdx] - smallest) / RANGE;
    }
  }
  return RESULT;
}

function getGaussianFunction(mean, standardDeviation, maxHeight) {

  mean = mean || 0.0;
  standardDeviation = standardDeviation || 1.0;
  maxHeight = maxHeight || 1.0;

  return function getNormal(x) {
    return maxHeight * Math.pow(Math.E, -Math.pow(x - mean, 2) / (2 * (standardDeviation * standardDeviation)));
  }
}

function getKeysSortedByValue(obj) {
  let keys = [];

  Object.keys(obj)
    .map(function(k) {
        return [k, obj[k]];
      }
    )
    .sort(function(a, b) {
        if (a[1] < b[1]) {return -1;}
        if (a[1] > b[1]) {return 1;}
        return 0;
      }
    )
    .forEach(function(d) {
        keys.push(d[0]);
      }
    );
  return keys;
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export {isDefined, isNotNull, isBool, isString, isNumber, isInteger, isFloat, isObject, isFunction, isPowerOf2,
  findNearestPowerOf2, normalizeArray, scaleArray, normalizeGrid, scaleGrid, getGaussianFunction, getKeysSortedByValue};
