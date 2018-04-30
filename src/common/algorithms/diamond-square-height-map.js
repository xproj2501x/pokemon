/**
 * Diamond Square Height Map
 * ===
 *
 * @module diamondSquareHeightMap
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import PRNG from '../math/prng';
import {isPowerOf2, scaleArray} from '../utilities/';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * DiamondSquareHeightMap
 * @class
 */
class DiamondSquareHeightMap {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _prng;
  _seed;
  _size;
  _roughness;
  /**
   * @private
   * @type {Array}
   */
  _map;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * DiamondSquareHeightMap
   * @constructor
   */
  constructor() {
    this._prng = PRNG.create();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   *
   * @param {number} size -
   * @param {?number} roughness -
   * @param {?number} seed -
   * @return {Array}
   */
  build(size, roughness=null, seed=null) {
    if (!isPowerOf2(size - 1)) throw Error(`Error: size ${size} is not a power of 2 + 1`);
    this._size = size;
    this._map = new Array(this._size * this._size);
    this._roughness = roughness || Math.random();
    this._seed = seed || Math.random();
    this._setCell(0, 0, this._seed);
    this._setCell(this._size - 1, 0, this._seed);
    this._setCell(this._size - 1, this._size - 1, this._seed);
    this._setCell(0, this._size - 1, this._seed);
    this._build();
    return scaleArray(this._map);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   *
   * @private
   * @param {number} xPosition
   * @param {number} yPosition
   * @return {number}
   */
  _getCell(xPosition, yPosition) {
    return this._map[xPosition + (yPosition * this._size)];
  }

  /**
   *
   * @private
   * @param {number} xPosition
   * @param {number} yPosition
   * @param {number} value
   */
  _setCell(xPosition, yPosition, value) {
    const INDEX = xPosition + (yPosition * this._size);

    this._map[INDEX] = value;
  }

  /**
   * @private
   */
  _build() {
    let height = this._roughness;

    for (let side = this._size - 1; side >= 2; side /= 2, height *= this._roughness) {
      this._runSquareStep(side, height);
      this._runDiamondStep(side, height);
    }
  }

  /**
   *
   * @private
   * @param {number} side
   * @param {number} height
   */
  _runSquareStep(side, height) {
    const HALF = Math.floor(side / 2);

    for (let idx = 0; idx < this._size - 1; idx += side) {
      for (let jdx = 0; jdx < this._size - 1; jdx += side) {
        const AVERAGE  = this._calculateValue([
          [idx, jdx],
          [idx + side, jdx + side],
          [idx, jdx + side],
          [idx + side, jdx]
        ], height);
        const OFFSET = this._prng.generateNormal(0, height);

        this._setCell(idx + HALF, jdx + HALF, (AVERAGE + OFFSET));
      }
    }
  }

  /**
   *
   * @private
   * @param {number} side
   * @param {number} height
   */
  _runDiamondStep(side, height) {
    const HALF = Math.floor(side / 2);

    for (let idx = 0; idx < this._size; idx += HALF) {
      for (let jdx = (idx + HALF) % side; jdx <= this._size - 1; jdx += side) {
        const AVERAGE = this._calculateValue([
          [idx, jdx + HALF],
          [idx + HALF, jdx],
          [idx, jdx - HALF],
          [idx - HALF, jdx]
        ], height);
        const OFFSET = this._prng.generateNormal(0, height);

        this._setCell(idx, jdx, AVERAGE + OFFSET);
      }
    }
  }

  /**
   *
   * @private
   * @param {Array} points
   * @param {number} height
   */
  _calculateValue(points, height) {
    let sum = 0;
    let count = 0;

    points.forEach((point) => {
      sum += this._getCell(point[0], point[1]) ? this._getCell(point[0], point[1]) : 0;
      count += this._getCell(point[0], point[1]) ? 1 : 0;
    });
    return sum / count;
  }

  _scaleMap() {
    const SIDE = this._size - 1;
    let largest = -Infinity;
    let smallest = Number.MAX_VALUE;

    for (let idx = 0; idx < SIDE; idx++) {
      for (let jdx = 0; jdx < SIDE; jdx++) {
        const HEIGHT = this._getCell(idx, jdx);

        if (HEIGHT > largest) largest = HEIGHT;
        if (HEIGHT < smallest) smallest = HEIGHT;
      }
    }
    const RANGE = largest - smallest;

    for (let idx = 0; idx < SIDE; idx++) {
      for (let jdx = 0; jdx < SIDE; jdx++) {
        this._setCell(idx, jdx, (this._getCell(idx, jdx) - smallest) / RANGE);
      }
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   * @static
   * @return {DiamondSquareHeightMap}
   */
  static create() {
    return new DiamondSquareHeightMap();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default DiamondSquareHeightMap;
