/**
 * Velocity Component
 * ===
 *
 * @module velocityComponent
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Component from '../../engine/component';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const KEYS = {
  dx: 'dx',
  dy: 'dy'
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * VelocityComponent
 * @class
 * @extends Component
 */
class VelocityComponent extends Component {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @readonly
   * @return {int}
   */
  get dx() {
    return this.state.dx;
  }

  /**
   * @readonly
   * @return {int}
   */
  get dy() {
    return this.state.dy;
  }

  /**
   * VelocityComponent
   * @constructor
   * @param {int} id - The identifier for the parent entity.
   * @param {object} state - The initial state of the component.
   */
  constructor(id, state) { // eslint-disable-line id-length
    super(id, KEYS, state);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////


  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   * @static
   * @param {int} id - The identifier for the parent entity.
   * @param {object} state - The initial state of the component.
   * @return {VelocityComponent}
   */
  static create(id, state) { // eslint-disable-line id-length
    return new VelocityComponent(id, state);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default VelocityComponent;