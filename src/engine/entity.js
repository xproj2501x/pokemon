/**
 * Entity
 * ===
 *
 * @module entity
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import {COMPONENT_LIMIT} from './constants';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Entity
 * @class
 */
class Entity {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * The identifier for the entity.
   * @private
   * @type {int}
   */
  _id;

  /**
   * A collection of components attached to the entity.
   * @private
   * @type {Array}
   */
  _components;

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
   * Entity
   * @constructor
   * @param {number} id - The identifier for the entity.
   */
  constructor(id) { // eslint-disable-line id-length
    this._id = id;
    this._components = new Array(COMPONENT_LIMIT).fill(false);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Attaches a component to the entity.
   * @param {number} componentType - The type id of the component.
   */
  attachComponent(componentType) {
    if (this._components[componentType]) {
      throw new Error(`Error: Component type ${componentType} already attached to entity ${this.id}`);
    }
    this._components[componentType] = true;
  }

  /**
   * Detaches a component from the entity.
   * @param {number} componentType - The type id of the component.
   */
  detachComponent(componentType) {
    if (!this._components[componentType]) {
      throw new Error(`Error: Component type ${componentType} not attached to entity ${this.id}`);
    }
    this._components[componentType] = false;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   * @static
   * @param {number} id - The identifier for the entity.
   *
   * @return {Entity} A new entity instance.
   */
  static create(id) { // eslint-disable-line id-length
    if (!id && id !== 0) throw new Error(`Error: entity id cannot be null`);
    return new Entity(id);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Entity;
