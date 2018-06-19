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
    super();
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
        console.log('character');
        break;
      case KEYBOARD.KEY_H:
        console.log('help');
        break;
      case KEYBOARD.KEY_I:
        console.log('inventory');
        break;
      case KEYBOARD.KEY_Q:
        console.log('quests');
        break;
      case KEYBOARD.KEY_M:
        console.log('map');
        break;
      case KEYBOARD.KEY_J:
        console.log('journal');
        break;
      case KEYBOARD.ESCAPE:
        console.log('escape');
        break;
      // Movement
      case KEYBOARD.UP_ARROW:
      case KEYBOARD.KEY_W:
        console.log('up');
        break;
      case KEYBOARD.LEFT_ARROW:
      case KEYBOARD.KEY_A:
        console.log('left');
        break;
      case KEYBOARD.RIGHT_ARROW:
      case KEYBOARD.KEY_D:
        console.log('right');
        break;
      case KEYBOARD.DOWN_ARROW:
      case KEYBOARD.KEY_S:
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
      case KEYBOARD.KEY_4:
        console.log('4');
        break;
      case KEYBOARD.KEY_5:
        console.log('5');
        break;
      case KEYBOARD.KEY_6:
        console.log('6');
        break;
      case KEYBOARD.KEY_7:
        console.log('7');
        break;
      case KEYBOARD.KEY_8:
        console.log('8');
        break;
      case KEYBOARD.KEY_9:
        console.log('9');
        break;
      case KEYBOARD.KEY_0:
        console.log('0');
        break;
      case KEYBOARD.DASH:
        console.log('-');
        break;
      case KEYBOARD.EQUALS:
        console.log('=');
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
