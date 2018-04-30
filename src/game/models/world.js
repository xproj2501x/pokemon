/**
 * World
 * ===
 *
 * @module world
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import UUID from '../../common/utilities/uuid';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const DEFAULT_SIZE = 513;

/**
 *
 * @enum
 */
const LAYER = {
  ELEVATION: 0,
  TEMPERATURE: 1,
  PRECIPITATION: 2,
  EROSION: 3,
  WATERMAP: 4,
  IRRIGATION: 5,
  HUMIDITY: 6,
  PERMEABILITY: 7,
  BIOME: 8,
  ICE_CAP: 9
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////

/**
 * World
 * @class
 */
class World {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @private
   * @type {string}
   */
  _id;

  /**
   * @private
   * @type {number}
   */
  _size;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @readonly
   * @return {number}
   */
  get id() {
    return this._id;
  }

  /**
   * @readonly
   * @return {number}
   */
  get size() {
    return this._size;
  }

  /**
   * @readonly
   * @return {Layer}
   */
  get elevation() {
    return this._getLayer(LAYER.ELEVATION);
  }

  set elevation(layer) {
    this._layers[LAYER.ELEVATION] = layer;
  }

  /**
   * @readonly
   * @return {Layer}
   */
  get precipitation() {
    return this._getLayer(LAYER.PRECIPITATION);
  }

  set precipitation(layer) {
    this._layers[LAYER.PRECIPITATION] = layer;
  }

  /**
   * @readonly
   * @return {Layer}
   */
  get temperature() {
    return this._getLayer(LAYER.TEMPERATURE);
  }

  set temperature(layer) {
    this._layers[LAYER.TEMPERATURE] = layer;
  }

  /**
   * @readonly
   * @return {Layer}
   */
  get erosion() {
    return this._getLayer(LAYER.EROSION);
  }

  set erosion(layer) {
    this._layers[LAYER.EROSION] = layer;
  }
  /**
   * World
   * @constructor
   * @param {string} id - The identifier for the  world.
   * @param {number} width - The width of the world to generate;
   * @param {number} height - The height of the world to generate;
   */
  constructor(id, size) {
    this._id = id;
    this._size = size;
    this._layers = [];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @private
   * @param {number} index
   * @return {Layer}
   */
  _getLayer(index) {
    return this._layers[index];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @param {?string} id - The identifier for the  world.
   * @param {?object} size - The dimensions for the world.
   * @return {World}
   */
  static create(id=null, size=null) {
    id = id || UUID.create();
    size = size || DEFAULT_SIZE;

    return new World(id, size);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default World;
