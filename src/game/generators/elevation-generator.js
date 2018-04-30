/**
 * Elevation Generator
 * ===
 *
 * @module elevationGenerator
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import {normalizeArray, getKeysSortedByValue} from '../../common/utilities';
import Layer from '../models/layer';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const ELEVATION_LEVEL = {
  DEEP_WATER: 0,
  SHALLOW_WATER: 1,
  COASTAL: 2,
  PLAINS: 3,
  HILLS: 4,
  MOUNTAIN: 5,
  ALPINE: 6,
  SNOW_CAP: 7
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////

/**
 * ElevationGenerator
 * @class
 */
class ElevationGenerator {

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

  /**
   * @private
   * @type {number}
   */
  _waterLine;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////


  /**
   * ElevationGenerator
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
    if (world.elevation) throw Error(`World ${world.id} already contains a layer for elevation`);
    this._world = world;
    this._waterLine = this._prng.generateFloatingPoint(0.5, 0.75);

    const ROUGHNESS = this._prng.generateFloatingPoint(0.5, 0.75);
    const SEED = this._prng.generateNormal(this._waterLine, 0.05);
    const MAP = this._diamondSquareHeightMap.build(this._world.size, ROUGHNESS, SEED);
    const KEYS = getKeysSortedByValue(ELEVATION_LEVEL);
    const THRESHOLDS = this._generateThresholds();

    return Layer.create(this._world.size, MAP, KEYS, THRESHOLDS);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _generateThresholds() {
    const LENGTH = Object.keys(ELEVATION_LEVEL).length;
    const PERCENTAGE = 1.00 / LENGTH;
    let thresholds = new Array(LENGTH);
    let cutoff, marker = 0;

    for (let idx = 0; idx < LENGTH; idx++) {
      if (idx === 0) {
        thresholds[idx] = this._waterLine / this._prng.generateFloatingPoint(1.1, 2);
      } else if (idx === 1) {
        thresholds[idx] = this._waterLine;
        marker += this._waterLine;
      } else {
        do {
          cutoff = this._prng.generateNormal(PERCENTAGE, this._prng.generateFloatingPoint(0.005, 0.025));
        } while (cutoff <= 0);
        marker += cutoff;
        thresholds[idx] = marker;
      }
    }
    return normalizeArray(thresholds);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @return {ElevationGenerator}
   */
  static create(prng, diamondSquareHeightMap) {
    return new ElevationGenerator(prng, diamondSquareHeightMap);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default ElevationGenerator;
