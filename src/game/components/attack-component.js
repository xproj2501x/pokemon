/**
 * Attack Component
 * ===
 *
 * @module attackComponent
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Component from '../../engine/component';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const KEYS = {
  attacker: 'attacker',
  target: 'target'
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * AttackComponent
 * @class
 * @extends Component
 */
class AttackComponent extends Component {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Get _state.attacker
   * @readonly
   * @return {int}
   */
  get attacker() {
    return this.state.attacker;
  }

  /**
   * Get state.defender
   * @readonly
   * @return {int}
   */
  get defender() {
    return this.state.defender;
  }

  /**
   * AttackComponent
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
   * Static factory method
   *
   * @static
   * @param {int} id - The identifier for the parent entity.
   * @param {object} state - The initial state of the component.
   *
   * @return {AttackComponent} - A new health component instance.
   */
  static create(id, state) { // eslint-disable-line id-length
    return new AttackComponent(id, state);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default AttackComponent;