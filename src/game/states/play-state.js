/**
 * Play State
 * ===
 *
 * @module playState
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import State from '../../engine/state';
import {KEYBOARD} from '../../engine/constants';
import {STATE} from './constants';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * PlayState
 * @class
 * @implements State
 */
class PlayState extends State {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _screenManager;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * MenuState
   * @constructor
   */
  constructor() {
    super(STATE.PLAY);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  run(event) {
    switch(event) {
      // Sub-screen commands
      case KEYBOARD.KEY_C:
        // Toggle character sub-screen
        console.log('character');
        break;
      case KEYBOARD.KEY_H:
        // Toggle help sub-screen
        console.log('help');
        break;
      case KEYBOARD.KEY_I:
        // Toggle inventory sub-screen
        console.log('inventory');
        break;
      case KEYBOARD.KEY_Q:
        // Toggle quests sub-screen
        console.log('quests');
        break;
      case KEYBOARD.KEY_M:
        // Toggle map sub-screen
        console.log('map');
        break;
      case KEYBOARD.ESCAPE:
        // Close all sub-screens
        console.log('escape');
        break;
      // Movement
      case KEYBOARD.UP_ARROW:
      case KEYBOARD.KEY_W:
        // Move up
        console.log('up');
        break;
      case KEYBOARD.LEFT_ARROW:
      case KEYBOARD.KEY_A:
        // Move up
        console.log('left');
        break;
      case KEYBOARD.RIGHT_ARROW:
      case KEYBOARD.KEY_D:
        // Move up
        console.log('right');
        break;
      case KEYBOARD.DOWN_ARROW:
      case KEYBOARD.KEY_S:
        // Move up
        console.log('down');
        break;
      // Hot keys
      case KEYBOARD.KEY_1:
        console.log('1');
        break;
      case KEYBOARD.KEY_2:
        console.log('2');
        break;
    }
  }

  enter() {
    const CONTAINER = document.getElementById('game');
    const CANVAS = document.createElement('canvas');

    CANVAS.height = CONTAINER.clientHeight;
    CANVAS.width = CONTAINER.clientWidth;
    CONTAINER.append(CANVAS);
  }

  exit() {
    const CONTAINER = document.getElementById('game');

    this._nextState = null;
    this._locked = false;

    CONTAINER.innerHTML = ``;
  }

  render() {

  }

  _toggleSubScreen() {

  }
  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _toggleSubScreen(screen) {

  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   * @return {PlayState}
   */
  static create() {
    return new PlayState();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default PlayState;
