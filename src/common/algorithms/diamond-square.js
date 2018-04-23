/**
 * Diamond Square
 * ===
 *
 * @module diamondSquare
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import PRNG from '../math/prng';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * DiamondSquare
 * @class
 */
class DiamondSquare {

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
   * DiamondSquare
   * @constructor
   */
  constructor() {
    this._prng = PRNG.create();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  build(size, roughness, seed) {
    this._size = Math.pow(2, size) + 1;
    this._map = new Array(this._size * this._size);
    this._roughness = roughness || Math.random();
    this._seed = seed || Math.random();
    this._setCell(0, 0, this._seed);
    this._setCell(this._size - 1, 0, this._seed);
    this._setCell(this._size - 1, this._size - 1, this._seed);
    this._setCell(0, this._size - 1, this._seed);
    this._build();
    return this._map;
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

  _build() {
    let height = this._roughness;

    for (let side = this._size - 1; side >= 2; side /= 2, height *= this._roughness) {
      this._runSquareStep(side, height);
      this._runDiamondStep(side, height);
    }
  }

  _runSquareStep(side, height) {
    const HALF = Math.floor(side / 2);

    for (let idx = 0; idx < this._size - 1; idx += side) {
      for (let jdx = 0; jdx < this._size - 1; jdx += side) {
        const AVERAGE  = this._calculateAverage([
          [idx, jdx],
          [idx + side, jdx + side],
          [idx, jdx + side],
          [idx + side, jdx]
        ]);
        const OFFSET = this._prng.generateNormal(0, height);
        this._setCell(idx + HALF, jdx + HALF, (AVERAGE + OFFSET));
      }
    }
  }

  _runDiamondStep(side, height) {
    const HALF = Math.floor(side / 2);

    for (let idx = 0; idx < this._size - 1; idx += HALF) {
      for (let jdx = (idx + HALF) % side; jdx <= this._size - 1; jdx += side) {
        const AVERAGE = this._calculateAverage([
          [idx, jdx + HALF],
          [idx + HALF, jdx],
          [idx, jdx - HALF],
          [idx - HALF, jdx]
        ]);
        const OFFSET = this._prng.generateNormal(0, height);

        this._setCell(idx, jdx, AVERAGE + OFFSET);
      }
    }
  }

  _calculateAverage(points) {
    let sum = 0;
    let count = 0;

    points.forEach((point) => {
      sum += this._getCell(point[0], point[1]) ? this._getCell(point[0], point[1]) : 0;
      count += this._getCell(point[0], point[1]) ? 1 : 0;
    });
    return sum / count;
  }
  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   * @static
   * @return {DiamondSquare}
   */
  static create() {
    return new DiamondSquare();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default DiamondSquare;
