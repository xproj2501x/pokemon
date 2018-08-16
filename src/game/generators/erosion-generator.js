/**
 * Erosion Generator
 * ===
 *
 * @module erosionGenerator
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Layer from '../models/layer';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const DIRECTION = {
  NORTH: [0, -1],
  NORTH_EAST: [1, -1],
  EAST: [1, 0],
  SOUTH_EAST: [1, 1],
  SOUTH: [0, 1],
  SOUTH_WEST: [-1, 1],
  WEST: [-1, 0],
  NORTH_WEST: [-1, -1]
};

const RIVER_THRESHOLD = 0.5;

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////

/**
 * ErosionGenerator
 * @class
 */
class ErosionGenerator {

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

  _waterMap;
  _waterPath;
  _waterFlow;
  _riverSources;
  _rivers;
  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////


  /**
   * Layer
   * @constructor
   */
  constructor(prng, diamondSquareHeightMap) {
    this._prng = prng;
    this._diamondSquareHeightMap = diamondSquareHeightMap;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  execute(world) {
    if (!world.elevation) throw Error(`World ${world.id} does not contain a layer for elevation`);
    if (!world.precipitation) throw Error(`World ${world.id} does not contain a layer for precipitation`);
    if (world.erosion) throw Error(`World ${world.id} already contains a layer for erosion`);
    this._world = world;
    this._waterMap = new Array(Math.pow(this._world.size, 2)).fill(0);
    this._findWaterPath();
    this._generateRiverSources();
    // this._generateRiverFlow();
    return Layer.create(this._world.size, this._waterFlow, this._riverSources, this._rivers);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

  _findWaterPath() {
    this._waterPath = [];

    for (let idx = 0; idx < this._world.size; idx++) {
      for (let jdx = 0; jdx < this._world.size; jdx++) {
        const PATH = this._findPath(idx, jdx);

        this._waterPath[idx + (jdx * this._world.size)] = PATH ? PATH : [0, 0];
      }
    }
  }

  _findPath(x, y) {
    let path;
    let lowestElevation = this._world.elevation.getRawValue(x, y);

    for (const KEY in DIRECTION) {
      if (DIRECTION.hasOwnProperty(KEY)) {
        const DIR = DIRECTION[KEY];
        const NEIGHBOR_ELEVATION = this._world.elevation.getRawValue(x + DIR[0], y + DIR[1]);

        if ((NEIGHBOR_ELEVATION) && (NEIGHBOR_ELEVATION < lowestElevation)) {
          lowestElevation = NEIGHBOR_ELEVATION;
          path = DIR;
        }
      }
    }
    return path;
  }

  _generateRiverSources() {
    this._waterFlow = new Array(Math.pow(this._world.size, 2)).fill(0);
    this._riverSources = [];

    for (let idx = 0; idx < this._world.size; idx++) {
      for (let jdx = 0; jdx < this._world.size; jdx++) {
        const INDEX = idx + (jdx * this._world.size);
        const PATH = this._waterPath[INDEX];
        const RAIN_FALL = this._world.precipitation.getRawValue(idx, jdx);
        const ELEVATION = this._world.elevation.getValue(idx, jdx);

        if (PATH === [0, 0]) continue;
        this._waterFlow[INDEX] += RAIN_FALL;
        if ((ELEVATION >= 5) && (RAIN_FALL >= RIVER_THRESHOLD)) {
          this._riverSources.push([idx, jdx]);
        }
        const NEXT = [(idx + PATH[0]), (jdx + PATH[1])];

        this._waterFlow[NEXT[0] + (NEXT[1] * this._world.size)] += RAIN_FALL;
      }
    }
  }

  _generateRiverFlow() {
    this._rivers = [];

    for (let idx = 0; idx < this._riverSources.length; idx++) {
      const RIVER = [];
      let current = this._riverSources[idx];

      while (current) {
        RIVER.push(current);
        const DIRECTION = this._waterPath[current[0] + (current[1] * this._world.size)];
        const NEXT = [(current[0] + DIRECTION[0]), (current[1] + DIRECTION[1])];

        if ((DIRECTION === [0, 0]) || (this._world.elevation.getValue(NEXT[0], NEXT[1]) <= 2)) {
          current = null;
          break;
        }
        current = NEXT;
      }
      this._rivers.push(RIVER);
    }
  }


  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @return {ErosionGenerator}
   */
  static create(prng, diamondSquareHeightMap) {
    return new ErosionGenerator(prng, diamondSquareHeightMap);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default ErosionGenerator;
