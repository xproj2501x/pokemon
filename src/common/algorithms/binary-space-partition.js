/**
 * Binary Space Partition
 * ===
 *
 * @module binarySpacePartition
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import PRNG from '../math/prng';
import Vector2 from '../math/vector2';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * BinarySpacePartition
 * @class
 */
class BinarySpacePartition {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _prng;

  /**
   * @private
   * @type {object}
   */
  _rootContainer;

  /**
   * @private
   * @type {Array}
   */
  _partitions;

  /**
   * @private
   * @type {Vector2}
   */
  _minimumSize;

  /**
   * @private
   * @type {Vector2}
   */
  _maximumSize;

  /**
   * @private
   * @type {number}
   */
  _iterations;

  /**
   * @private
   * @type {number}
   */
  _splitConstraint;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * BinarySpacePartition
   * @constructor
   */
  constructor() {
    _prng = PRNG.create();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   *
   * @param {object} options -
   */
  generate(options) {
    const PARENT_CONTAINER = {
      size: options.size,
      position: Vector2.create(0, 0)
    };

    this._minimumSize = options.minimumSize || Vector2.create(3, 3);
    this._maximumSize = options.maximumSize || Vector2.create(10, 10);
    this._iterations = options.iterations || 5;
    this._splitContraint = options.splitContraint || Math.random() * 0.5;
    this._partitions = [];
    this._splitContainer(PARENT_CONTAINER, options.iterations);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _splitContainer(container, iteration) {
    if ((container.size.x > this._minimumSize.x) && (container.size.y > this._minimumSize.y)) {
      const DIFFERENCE = container.size.x - container.size.y;
      const AXIS = (DIFFERENCE > 0) ? 0 : ((DIFFERENCE < 0) ? 1 : Math.floor(this._prng.generateUniform() * (1 - 0 + 1) + 0))
      const MINIMUM_SPLIT_POSITION = AXIS ? (container.position.y + this._minimumSize.y) : (container.position.x + this._minimumSize.x);
      const MAXIMUM_SPLIT_POSITION = AXIS ? (container.size.y - this._minimumSize.y) : (container.size.x - this._minimumSize.x);



    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @return {BinarySpacePartition}
   */
  static create() {
    return new BinarySpacePartition();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default BinarySpacePartition;
