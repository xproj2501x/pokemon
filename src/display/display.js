/**
 * Display
 * ===
 *
 * @module display
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import UUID from '../common/utilities/uuid';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const ID_PREFIX = 'display-';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Display
 * @class
 */
class Display {

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
   * @type {HTMLElement}
   */
  _container;

  /**
   * @private
   * @type {Array}
   */
  _widgets;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  get id() {
    return this._id;
  }

  get container() {
    return this._container;
  }

  /**
   * Display
   * @constructor
   * @param {string} id - The id of the HTML element.
   * @param {HTMLElement} container - The HTML element for the display.
   */
  constructor(id, container) {
    this._id = id;
    this._container = container;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  add() {

  }

  remove() {

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
   * @param {object} configuration -
   * @return {Display}
   */
  static create(zIndex) {
    const ID = ID_PREFIX + UUID.create();
    const CONTAINER = document.createElement('div');

    CONTAINER.id = ID;
    CONTAINER.style.zIndex = `${zIndex}`;
    CONTAINER.classList.toggle('o-display');
    return new Display(ID, CONTAINER);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Display;