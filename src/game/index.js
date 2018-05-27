/**
 * Game
 * ===
 *
 * @module game
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import LogService from '../common/services/log';
import MessageService from '../common/services/message';
import Engine from '../engine';

import RenderManager from '../render';
import {KEYBOARD} from '../engine/constants';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const SCREEN_WIDTH = 80;
const SCREEN_HEIGHT = 60;
const CONTAINER_ID = 'game';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Game
 * @class
 */
class Game {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @private
   * @type {LogService}
   */
  _logService;

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
   * @type {Engine}
   */
  _engine;

  /**
   * @private
   * @type {boolean}
   */
  _debug;

  _renderManager;
  _player;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Game
   * @constructor
   */
  constructor(debug) {
    this._debug = debug;

    this._renderManager = RenderManager.create(CONTAINER_ID);
    document.addEventListener('keydown', (event) => this._handleInput(event));
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Starts the simulation.
   * @public
   */
  start() {
    this._logService = LogService.create(0);
    this._logger = this._logService.registerLogger('Game');
    this._messageService = MessageService.create();
    this._engine = Engine.create(this._logService, this._messageService);
    this._engine.start();
    this._player = {
      x: Math.floor(SCREEN_WIDTH / 2),
      y: Math.floor(SCREEN_HEIGHT / 2)
    };
    this._renderManager.render(this._player);
  }

  /**
   * Stops the simulation.
   * @public
   */
  stop() {

  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _handleInput(event) {
    switch (event.keyCode) {
      case KEYBOARD.UP_ARROW:
      case KEYBOARD.KEY_W:
        this._player.y -= 1;
        break;
      case KEYBOARD.DOWN_ARROW:
      case KEYBOARD.KEY_S:
        this._player.y += 1;
        break;
      case KEYBOARD.LEFT_ARROW:
      case KEYBOARD.KEY_A:
        this._player.x -= 1;
        break;
      case KEYBOARD.RIGHT_ARROW:
      case KEYBOARD.KEY_D:
        this._player.x += 1;
        break;
    }
    this._renderManager.render(this._player);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   *
   * @static
   * @param {boolean} debug -
   *
   * @return {Game}
   */
  static create(debug) {
    return new Game(debug);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Game;
