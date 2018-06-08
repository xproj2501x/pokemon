/**
 * Play Screen
 * ===
 *
 * @module playScreen
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Screen from '../../user-interface/screen';
import {KEYBOARD} from '../../engine/constants';
import {SCREEN} from './constants';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const SUB_SCREEN = {
  CHARACTER: 1,
  HELP: 2,
  INVENTORY: 3,
  MAP: 4,
  QUESTS: 5
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * PlayScreen
 * @class
 * @extends Screen
 */
class PlayScreen extends Screen {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * PlayScreen
   * @constructor
   */
  constructor() {
    super(SCREEN.PLAY);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  enter() {

  }

  exit() {

  }

  handleInput(input) {
    switch(input) {
      // Sub-screen commands
      case KEYBOARD.KEY_C:
        this._toggleSubScreen(SUB_SCREEN.CHARACTER);
        break;
      case KEYBOARD.KEY_H:
        this._toggleSubScreen(SUB_SCREEN.HELP);
        break;
      case KEYBOARD.KEY_I:
        this._toggleSubScreen(SUB_SCREEN.INVENTORY);
        break;
      case KEYBOARD.KEY_Q:
        this._toggleSubScreen(SUB_SCREEN.QUESTS);
        break;
      case KEYBOARD.KEY_M:
        this._toggleSubScreen(SUB_SCREEN.MAP);
        break;
      case KEYBOARD.ESCAPE:
        this._toggleSubScreen();
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
      case KEYBOARD.KEY_3:
        console.log('3');
        break;
    }
  }

  update() {

  }

  render(context) {

  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _toggleSubScreen(screen) {
    console.log(screen);
  }

  _drawMap() {

  }

  _drawBar() {

  }

  _drawLog() {

  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   * @return {PlayScreen}
   */
  static create() {
    return new PlayScreen();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default PlayScreen;
