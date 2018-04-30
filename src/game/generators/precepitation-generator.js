/**
 * Precipitation Generator
 * ===
 *
 * @module precipitationGenerator
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import {normalizeArray, getKeysSortedByValue} from '../../common/utilities';
import Layer from '../models/layer';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const PRECIPITATION_LEVEL = {
  ARID: 0,
  SEMIARID: 1,
  MODERATE: 2,
  HUMID: 3,
  RAINY: 4
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////

/**
 * PrecipitationGenerator
 * @class
 */
class PrecipitationGenerator {

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
   * PrecipitationGenerator
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
    if (world.precipitation) throw Error(`World ${world.id} already contains a layer for precipitation`);
    this._world = world;

    const ROUGHNESS = this._prng.generateFloatingPoint(0.0, 0.4);
    const MAP = this._diamondSquareHeightMap.build(this._world.size, ROUGHNESS);
    const KEYS = getKeysSortedByValue(PRECIPITATION_LEVEL);
    const THRESHOLDS = this._generateThresholds();

    return Layer.create(this._world.size, MAP, KEYS, THRESHOLDS);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _generateThresholds() {
    const LENGTH = Object.keys(PRECIPITATION_LEVEL).length;
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
   * @return {PrecipitationGenerator}
   */
  static create(prng, diamondSquareHeightMap) {
    return new PrecipitationGenerator(prng, diamondSquareHeightMap);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default PrecipitationGenerator;
