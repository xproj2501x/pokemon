/**
 * Screen
 * ===
 *
 * @module screen
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Screen
 * @interface
 */
class Screen {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @private
   * @type {boolean}
   */
  _isDirty;

  /**
   * @private
   * @type {boolean}
   */
  _isTransparent;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Screen
   * @constructor
   */
  constructor() {

  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @public
   * @abstract
   */
  activate() {
    throw new Error(`Error: activate() called from Screen base class.`);
  }

  /**
   * @public
   * @abstract
   */
  deactivate() {
    throw new Error(`Error: deactivate() called from Screen base class.`);
  }

  /**
   * @public
   * @abstract
   * @param input
   */
  handleInput(input) {
    throw new Error(`Error: handleInput() called from Screen base class.`);
  }

  /**
   * @public
   * @abstract
   */
  update() {
    throw new Error(`Error: update() called from Screen base class.`);
  }

  /**
   * @public
   * @abstract
   * @param {object} context - The canvas context.
   */
  render(context) {
    throw new Error(`Error: render() called from Screen base class.`);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Screen;
