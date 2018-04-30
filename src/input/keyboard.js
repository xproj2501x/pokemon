/**
 * Keyboard
 * ===
 *
 * @module keyboard
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const KEY_DOWN = 'keydown';
const KEY_UP = 'keyup';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Keyboard
 * @class
 */
class Keyboard {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @private
   * @type {Array}
   */
  _keys;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Keyboard
   * @constructor
   */
  constructor() {
    this._keys = [];
    document.addEventListener(KEY_DOWN, (event) => this.onKeyDown(event));
    document.addEventListener(KEY_UP, (event) => this.onKeyUp(event));
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  onKeyDown(event) {
    event.preventDefault();
    const KEY_CODE = event.keyCode;

    if (this._keys[KEY_CODE]) {

    }
  }

  onKeyUp(event) {
    event.preventDefault();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////


  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   * @static
   * @return {Keyboard}
   */
  static create() {
    return new Keyboard();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Keyboard;
