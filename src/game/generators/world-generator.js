/**
 * World Generator
 * ===
 *
 * @module worldGenerator
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import PRNG from '../../common/math/prng';
import DiamondSquareHeightMap from '../../common/algorithms/diamond-square-height-map';
import ElevationGenerator from './elevation-generator';
import TemperatureGenerator from './temperature-generator';
import PrecipitationGenerator from './precepitation-generator';
import ErosionGenerator from './erosion-generator';
import World from '../models/world';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const SIZE = 513;

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * WorldGenerator
 * @class
 */
class WorldGenerator {

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

  _elevationGenerator;
  _precipitationGenerator;
  _temperatureGenerator;
  _erosionGenerator;
  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * WorldGenerator
   * @constructor
   */
  constructor() {
    this._prng = PRNG.create();
    this._diamondSquareHeightMap = DiamondSquareHeightMap.createInstance();
    this._elevationGenerator = ElevationGenerator.create(this._prng, this._diamondSquareHeightMap);
    this._precipitationGenerator = PrecipitationGenerator.create(this._prng, this._diamondSquareHeightMap);
    this._temperatureGenerator = TemperatureGenerator.create(this._prng, this._diamondSquareHeightMap);
    this._erosionGenerator = ErosionGenerator.create(this._prng, this._diamondSquareHeightMap);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @public
   * @param {number} size - The size of the world to be generated.
   */
  generate(size=SIZE) {
    const WORLD = World.createInstance(null, size);

    WORLD.elevation = this._elevationGenerator.execute(WORLD);
    WORLD.precipitation = this._precipitationGenerator.execute(WORLD);
    WORLD.temperature = this._temperatureGenerator.execute(WORLD);
    WORLD.erosion = this._erosionGenerator.execute(WORLD);
    return WORLD;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @return {WorldGenerator}
   */
  static createInstance() {
    return new WorldGenerator();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default WorldGenerator;
