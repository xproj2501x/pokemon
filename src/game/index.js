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
import UserInterface from '../user-interface';
import WorldGenerator from './generators/world-generator';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const SCREEN_WIDTH = 80;
const SCREEN_HEIGHT = 60;
const CONTAINER_ID = 'game';
const CONSTRUCTOR = 'Game';

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
   * @type {UserInterface}
   */
  _userInterface;

  /**
   * @private
   * @type {boolean}
   */
  _debug;


  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Game
   * @constructor
   *
   * @param {boolean} debug -
   */
  constructor(debug) {
    this._debug = debug;
    this._logService = LogService.create(0);
    this._messageService = MessageService.create();
    this._logger = this._logService.registerLogger(CONSTRUCTOR);
    // this._userInterface = UserInterface.create(this._logService, this._messageService, CONTAINER_ID);
    this._worldGenerator = WorldGenerator.createInstance();

  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Starts the simulation.
   * @public
   */
  start() {
    const WORLD = this._worldGenerator.generate();
    const CONTAINER = document.getElementById('game');
    const CANVAS = document.createElement('canvas');
    const ELEVATION = WORLD.elevation;
    const CONTEXT = CANVAS.getContext('2d');

    CANVAS.height = CANVAS.width = 513 * 3;
    CONTAINER.append(CANVAS);

    console.log(WORLD);
    CONTEXT.save();
    for (let idx = 0; idx < 513; idx++) {
      for (let jdx = 0; jdx < 513; jdx++) {
        const TILE = ELEVATION.getValue(idx, jdx);

        switch(TILE) {
          case 0:
            CONTEXT.fillStyle = '#0000CD';
            break;
          case  1:
            CONTEXT.fillStyle = '#4169E1';
            break;
          case 2:
            CONTEXT.fillStyle = '#DEB887';
            break;
          case 3:
            CONTEXT.fillStyle = '#606030';
            break;
          case 4:
            CONTEXT.fillStyle = '#EF7347';
            break;
          case 5:
            CONTEXT.fillStyle = '#809080';
            break;
          case  6:
            CONTEXT.fillStyle = '#595959';
            break;
          case 7:
            CONTEXT.fillStyle = '#FFFFFF';
            break;
        }
        CONTEXT.fillRect(idx * 3, jdx * 3, 3, 3);
      }
    }
    CONTEXT.restore();
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


  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   * @static
   * @param {boolean} debug - The debug option for the simulation.
   *
   * @return {Game} - A new game instance.
   */
  static create(debug) {
    return new Game(debug);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Game;
