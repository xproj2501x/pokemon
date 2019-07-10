/**
 * Component
 * ===
 *
 * @module component
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Component
 * @class
 */
class Component {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * The identifier for the parent entity.
   * @private
   * @type {int}
   */
  _id;

  /**
   * The current state of the component.
   * @private
   * @type {object}
   */
  _state;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Get _id
   * @readonly
   * @return {int}
   */
  get id() { // eslint-disable-line id-length
    return this._id;
  }

  /**
   * Get _state
   * @readonly
   * @return {object}
   */
  get state() {
    return Object.assign({}, this._state);
  }

  /**
   * Component
   * @constructor
   * @param {int} id - The identifier for the parent entity.
   * @param {object} keys - The keys for the component state.
   * @param {object} state - The initial state of the component.
   */
  constructor(id, keys, state) { // eslint-disable-line id-length
    if (!id) throw new Error(`The component id cannot be null`);
    if (!state) throw new Error(`The component state cannot be null`);
    for (const KEY in keys) {
      if (!state.hasOwnProperty(KEY)) {
        throw new Error(`Error: Key ${KEY} missing from initial state.`);
      }
    }
    for (const KEY in state) {
      if (!keys.hasOwnProperty(KEY)) {
        throw new Error(`Error: Key ${KEY} is not valid for the component type.`);
      }
    }
    this._id = id;
    this._state = state;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Updates the state of the component
   * @param {object} state - The new state of the component.
   */
  update(state) {
    for (const KEY in state) {
      if (!this._state.hasOwnProperty(KEY)) {
        throw new Error(`Invalid property ${KEY} for component type ${this.constructor.name}`);
      }
    }
    this._state = Object.assign({}, this._state, state);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Component;
