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
const CONSTRUCTOR = 'UserInterface';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
import {FRAME_DURATION, MAX_FRAME_SKIP, MESSAGE} from '../engine/constants';

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
   * @type {Logger}
   */
  _logger;

  /**
   * @private
   * @type {MessageService}
   */
  _messageService;

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
   * @readonly
   * @type {boolean}
   */
  get _isDirty() {

  };

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * UserInterface
   * @constructor
   *
   * @param {LogService} logService - The log service for the simulation.
   * @param {MessageService} messageService - The message service for the simulation.
   * @param {HTMLElement} container - The HTML element container for the user interface.
   */
  constructor(logService, messageService, container) {
    this._logger = logService.registerLogger(CONSTRUCTOR);
    this._messageService = messageService;
    this._container = container;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  start() {
    this._isRunning = true;
    this._lastTick = window.performance.now();
    this._delta = 0;
    this._logger.writeLogMessage('User Interface started.');
    window.requestAnimationFrame(() => this._tick());
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @private
   * @param {Screen} screen - The screen to add to the top of the stack.
   */
  _pushScreen(screen) {
    screen.activate();
    this._screens.push(screen);
  }

  _popScreen() {
    const SCREEN = this._screens.pop();

    SCREEN.deactivate();
  }

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

  /**
   *
   * @private
   */
  _update() {
    while (this._delta >= FRAME_DURATION) {
      this._screens.forEach((screen) => {
        screen.update();
      });
      this._delta -= FRAME_DURATION;
    }
  }

  _render() {
    const INTERPOLATION = this._delta / FRAME_DURATION;
    let index;

    for (index = this._screens.length - 1; idx < this._screens.length; idx--) {

    }

  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   * @static
   *
   * @param {LogService} logService - The log service for the simulation.
   * @param {MessageService} messageService - The message service for the simulation.
   * @param {string} containerId - The id of the container element for the user interface.
   *
   * @return {UserInterface} A new user interface instance.
   */
  static createInstance(logService, messageService, containerId) {
    const CONTAINER = document.getElementById(containerId);

    return new UserInterface(logService, messageService, CONTAINER);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default UserInterface;
