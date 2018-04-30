/**
 * PRNG
 * ===
 *
 * @module PRNG
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
/**
 * The maximum length for a seed value.
 * @constant
 * @type {number}
 */
const MAX_LENGTH = 64;

/**
 * The multiplier used when generating a new seed.
 * @type {number}
 */
const MULTIPLIER = 0x5D588B656C078965;

/**
 * The addend used when generating a new seed.
 * @type {number}
 */
const ADDEND = 0x0000000000269EC3;

/**
 *
 * @constant
 * @enum {number}
 */
const FORMAT = {
  BIN: 2,
  DEC: 10,
  HEX: 16
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * PRNG
 * @class
 */
class PRNG {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _seed;
  _s0;
  _s1;
  _s2;
  _c;
  _frac;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  get seed() {

  }

  /**
   * Key
   * @constructor
   */
  constructor() {
    this._s0 = 0;
    this._s1 = 0;
    this._s2 = 0;
    this._c = 0;
    this._frac = 2.3283064365386963e-10;
    this._setSeed(Date.now());
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  generateUniform() {
    const T = 2091639 * this._s0 + this._c * this._frac;

    this._s0 = this._s1;
    this._s1 = this._s2;
    this._c = T | 0;
    this._s2 = T - this._c;
    return this._s2;
  }

  generateUniformInt(lowerBound, upperBound) {
    const MAX = Math.max(lowerBound, upperBound);
    const MIN = Math.min(lowerBound, upperBound);

    return Math.floor(this.generateUniform() * (MAX - MIN + 1)) + MIN;
  }

  generateNormal(mean, stdDev) {
    let r, u, v;

    do {
      u = 2 * this.generateUniform() - 1;
      v = 2 * this.generateUniform() - 1;
      r = u * u + v * v;
    } while (r > 1 || r === 0);
    const GAUSS = u * Math.sqrt(-2 * Math.log(r) / r);

    return (mean || 0) + GAUSS * (stdDev || 1);
  }

  generatePercentage() {
    return 1 + Math.floor(this.generateUniform() * 100);
  }

  generateWeightedValue(data) {
    let total = 0;

    for (let id in data) {
      total += data[id];
    }
    let random = this.generateUniform() * total;
    let part = 0;

    for (let id in data) {
      part += data[id];
      if (random < part) { return id; }
    }
    return id;
  }

  generateFloatingPoint(min, max) {
    return this.generateUniform() * (max - min) + min;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _setSeed(seed) {
    seed = (seed < 1 ? 1 / seed : seed);

    this._seed = seed;
    this._s0 = (seed >>> 0) * this._frac;

    seed = (seed * 69069 + 1) >>> 0;
    this._s1 = seed * this._frac;

    seed = (seed * 69069 + 1) >>> 0;
    this._s2 = seed * this._frac;

    this._c = 1;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   * @static
   * @return {PRNG}
   */
  static create() {
    return new PRNG();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default PRNG;
