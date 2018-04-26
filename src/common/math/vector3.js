/**
 * Vector3
 * ===
 *
 * @module vector3
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////

/**
 * Vector3
 * @class
 */
class Vector3 {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * The x coordinate for the vector.
   * @protected
   * @type {number}
   */
  _x;

  /**
   * The y coordinate for the vector.
   * @protected
   * @type {number}
   */
  _y;

  /**
   * The z coordinate for the vector.
   * @private
   * @type {number}
   */
  _z;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * The x coordinate for the vector.
   * @readonly
   * @return {number}
   */
  get x() {
    return this._x;
  }

  /**
   * The y coordinate for the vector.
   * @readonly
   * @return {number}
   */
  get y() {
    return this._y;
  }

  /**
   * The z coordinate for the vector.
   * @readonly
   * @return {number}
   */
  get z() {
    return this._z;
  }

  /**
   * Vector3
   * @constructor
   * @param {number} x - The x coordinate for the vector.
   * @param {number} y - The y coordinate for the vector.
   * @param {number} z - The z coordinate for the vector.
   */
  constructor(x, y, z) {
    this._x = x;
    this._y = y;
    this._z = z;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   *
   * @param {Vector3} vector - The vector to add.
   * @return {Vector3}
   */
  add(vector) {
    return Vector3.create(this._x + vector.x, this._y + vector.y, this._z + vector.z);
  }

  /**
   *
   * @param {Vector3} vector - The vector to subtract.
   * @return {Vector3}
   */
  subtract(vector) {
    return Vector3.create(this._x - vector.x, this._y - vector.y, this._z - vector.z);
  }

  /**
   *
   * @param {Vector3} vector - The vector to multiply.
   * @return {Vector3}
   */
  multiply(vector) {

  }

  /**
   *
   * @param {Vector3} vector - The vector to divide.
   * @return {Vector3}
   */
  divide(vector) {

  }

  /**
   * Creates a new copy of the vector.
   * @return {Vector3}
   */
  copy() {
    return Vector3.create(this._x, this._y, this._z);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @param {number} x - The x coordinate for the vector.
   * @param {number} y - The y coordinate for the vector.
   * @param {number} z - The z coordinate for the vector.
   * @return {Vector3}
   */
  static create(x, y, z) {
    return new Vector3(x, y, z);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Vector3;
