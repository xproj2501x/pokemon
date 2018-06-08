/**
 * User Interface
 * ===
 *
 * @module userInterface
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
import {FRAME_DURATION, MAX_FRAME_SKIP} from '../engine/constants';

/**
 * UserInterface
 * @class
 */
class UserInterface {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @private
   * @type {boolean}
   */
  _isLocked;


  /**
   * @private
   * @type {boolean}
   */
  _isRunning;

  /**
   * @private
   * @type {number}
   */
  _delta;

  /**
   * @private
   * @type {boolean}
   */
  _isDirty;

  /**
   * @private
   * @type {HTMLElement}
   */
  _container;

  /**
   * @private
   * @type {Array}
   */
  _screens;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * UserInterface
   * @constructor
   * @param {HTMLElement} container -
   */
  constructor(container) {
    this._isLocked = false;
    this._container = container;
    this._screens = [];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  start() {
    this._isRunning = true;
    this._lastTick = window.performance.now();
    this._delta = 0;
    window.requestAnimationFrame(() => this._tick());
  }

  handleInput(event) {
    this._isLocked = true;
    event.preventDefault();
    event.stopPropagation();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _tick() {
    if (this._isRunning) {
      const CURRENT_TIME = window.performance.now();

      this._delta += CURRENT_TIME - this._lastTick;
      this._delta = this._delta > MAX_FRAME_SKIP ? MAX_FRAME_SKIP : this._delta;
      if (this._delta >= FRAME_DURATION) {
        this._update();
        this._render();
        this._lastTick = CURRENT_TIME;
      }
      window.requestAnimationFrame(() => this._tick());
    }
  }

  _update() {
    while (this._delta >= FRAME_DURATION) {
      this._delta -= FRAME_DURATION;
    }
  }

  _render() {
    const INTERPOLATION = this._delta / FRAME_DURATION;

    for (let idx = 0; idx < this._screens.length; idx++) {
      const SCREEN = this._screens[idx];

      SCREEN.update();
    }
    if (this._isDirty) {

    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   * @static
   * @param {string} containerId - The id of the container element for the user interface.
   * @return {UserInterface}
   */
  static create(containerId) {
    const CONTAINER = document.getElementById(containerId);

    return new UserInterface(CONTAINER);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default UserInterface;
