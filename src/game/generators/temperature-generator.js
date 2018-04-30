/**
 * Temperature Generator
 * ===
 *
 * @module temperatureGenerator
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import {normalizeArray, scaleArray, getKeysSortedByValue, getGaussianFunction} from '../../common/utilities';
import Layer from '../models/layer';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const TEMPERATURE_LEVEL = {
  ARCTIC: 0,
  SUBARCTIC: 1,
  BOREAL: 2,
  TEMPERATE: 3,
  SUBTROPICAL: 4,
  TROPICAL: 5
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////

/**
 * TemperatureGenerator
 * @class
 */
class TemperatureGenerator {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @private
   * @type {PRNG}
   */
  _prng;

  /**
   * @private
   * @type {DiamondSquareHeightMap}
   */
  _diamondSquareHeightMap;

  /**
   * @private
   * @type {World}
   */
  _world;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////


  /**
   * TemperatureGenerator
   * @constructor
   */
  constructor(prng, diamondSquareHeightMap) {
    this._prng = prng;
    this._diamondSquareHeightMap = diamondSquareHeightMap;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Generates an elevation layer for the world.
   * @param {World} world
   */
  execute(world) {
    if (world.temperature) throw Error(`World ${world.id} already contains a layer for temperature`);
    this._world = world;

    const EQUATOR = Math.ceil(this._world.size / 2);
    const DEVIATION = EQUATOR / this._prng.generateFloatingPoint(0.5, 3.5);
    const MAX_VALUE = this._prng.generateFloatingPoint(0.65, 1);
    const TEMPERATURE_GRADIENT = getGaussianFunction(EQUATOR, DEVIATION, MAX_VALUE);
    const KEYS = getKeysSortedByValue(TEMPERATURE_LEVEL);
    const THRESHOLDS = this._generateThresholds();
    const MAP = [];

    for (let idx = 0; idx < this._world.size; idx++) {
      for (let jdx = 0; jdx < this._world.size; jdx++) {
        const VALUE = TEMPERATURE_GRADIENT(this._prng.generateNormal(jdx, 5));

        MAP[idx + (jdx * this._world.size)] = VALUE;
      }
    }
    return Layer.create(this._world.size, scaleArray(MAP), KEYS, THRESHOLDS);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _generateThresholds() {
    const LENGTH = Object.keys(TEMPERATURE_LEVEL).length;
    const PERCENTAGE = 1.00 / LENGTH;
    let thresholds = new Array(LENGTH);
    let cutoff, marker = 0;

    for (let idx = 0; idx < LENGTH; idx++) {
      do {
        cutoff = this._prng.generateNormal(PERCENTAGE, 0.05);
      } while (cutoff <= 0);
      marker += cutoff;
      thresholds[idx] = marker;
    }
    return normalizeArray(thresholds);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @return {TemperatureGenerator}
   */
  static create(prng, diamondSquareHeightMap) {
    return new TemperatureGenerator(prng, diamondSquareHeightMap);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default TemperatureGenerator;
