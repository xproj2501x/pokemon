/**
 * Elevation Generator
 * ===
 *
 * @module elevationGenerator
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import {findNearestPowerOf2, normalizeArray, getKeysSortedByValue, scaleArray} from '../../common/utilities';
import Layer from '../models/layer';
import BSP2 from '../../common/algorithms/bsp2';

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

  _bsp;

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

  _roughness;
  _seed;
  _map;
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
    this._waterLine = this._prng.generateFloatingPoint(0.5, 0.75);
    this._roughness = this._prng.generateFloatingPoint(0.5, 0.75);
    this._seed = this._prng.generateNormal(this._waterLine, 0.05);
    this._bsp = new BSP2();
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
    const PARTITIONS = this._bsp.build(4, 513, 513);
    const KEYS = getKeysSortedByValue(ELEVATION_LEVEL);
    const THRESHOLDS = this._generateThresholds();

    this._map = this._diamondSquareHeightMap.build(this._world.size, this._roughness, this._seed);

    // this._map = [];
    // PARTITIONS.forEach((partition) => {
    //   this._fillSection(partition);
    // });
    this._fillOcean();
    return Layer.create(this._world.size, scaleArray(this._map), KEYS, THRESHOLDS);
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

  _fillSection(partition) {
    const SIZE = this._findLandArea(partition) + 1;

    if (SIZE < (partition.width - 6) && SIZE < (partition.height - 6)) {
      const OFFSET_X = this._prng.generateUniformInt(3, (partition.width - SIZE));
      const OFFSET_Y = this._prng.generateUniformInt(3, (partition.height - SIZE));
      const PARTITION_MAP = this._diamondSquareHeightMap.build(SIZE, this._roughness, this._seed);

      for (let idx = 0; idx < SIZE; idx++) {
        for (let jdx = 0; jdx < SIZE; jdx++) {
          const X_POSITION = partition.x + OFFSET_X + idx;
          const Y_POSITION = partition.y + OFFSET_Y + jdx;

          this._map[X_POSITION + (Y_POSITION * this._world.size)] = PARTITION_MAP[idx + (jdx * SIZE)];
        }
      }
      const AVAILABLE_WIDTH = partition.width - (SIZE + OFFSET_X);
      const AVAILABLE_HEIGHT = partition.height - (SIZE + OFFSET_Y);

      if (AVAILABLE_WIDTH > 17) {
        const SUB_PARTITION = {
          x: partition.x + OFFSET_X + SIZE,
          y: partition.y,
          height: partition.height,
          width: AVAILABLE_WIDTH
        };

        this._fillSection(SUB_PARTITION);
      }
      if (AVAILABLE_HEIGHT > 17) {
        const SUB_PARTITION = {
          x: partition.x,
          y: partition.y + OFFSET_Y + SIZE,
          height: AVAILABLE_WIDTH,
          width: partition.width
        };

        this._fillSection(SUB_PARTITION);
      }
    }
  }

  _findLandArea(partition) {
    let result;

    for (let idx = 1; idx < partition.height && idx < partition.width; idx *= 2) {
      result = idx;
    }
    return result;
  }

  _fillOcean() {
    let lowest = Infinity;

    for (let idx = 0; idx < this._map.length; idx++) {
      if (this._map[idx] < lowest) lowest = this._map[idx];
    }
    for (let idx = 0; idx < this._world.size; idx++) {
      for (let jdx = 0; jdx < this._world.size; jdx++) {
        if (!this._map[idx + (jdx * this._world.size)]) {
          this._map[idx + (jdx * this._world.size)] = lowest;
        }
      }
    }
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
