/**
 * Component Manager
 * ===
 *
 * @module componentManager
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Component from './component';
import {ENTITY_LIMIT, COMPONENT_LIMIT} from './constants';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * ComponentManager
 * @class
 */
class ComponentManager {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * A collection of components.
   *
   * @private
   * @type {Array}
   */
  _components;

  /**
   * A collection of component templates.
   */
  _templates;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * ComponentManager
   * @constructor
   */
  constructor() {
    this._components = new Array(COMPONENT_LIMIT).fill(null);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Creates a new component instance of the specified type for the parent entity.
   *
   * @public
   * @param {int} type - The type of the component.
   * @param {int} entity - The identity of the parent entity.
   * @param {object} state - The initial state for the component.
   */
  createComponent(type, entity, state) {
    if (!this._components[type]) {
      this._components[type] = new Array(ENTITY_LIMIT).fill(null);
    }
    if (this.hasComponent(type, entity)) {
      throw new Error(`Error: Component type ${type} is already attached to entity id ${entity}.`)
    }
    this._components[type][entity] = Component.create(entity, state);
  }

  /**
   * Gets the component of the parent entity and specified type.
   *
   * @public
   * @param {int} type - The type of the component.
   * @param {int} entity - The identity of the parent entity.
   *
   * @return {Component}
   */
  getComponent(type, entity) {
    if (!this.hasComponent(type, entity)) {
      throw new Error(`Error: Component type ${type} is not attached to entity ${entity}.`);
    }
    return this._components[type][entity];
  }

  /**
   * Gets all components of the specified type.
   *
   * @param {int} type - The type of the component.
   *
   * @return {Array}
   */
  getComponentsOfType(type) {
    return this._components[type];
  }

  /**
   * Destroys a component of the parent entity and specified type.
   *
   * @public
   * @param {int} type - The type of the component.
   * @param {int} entity - The identity of the parent entity.
   */
  destroyComponent(type, entity) {
    if (!this.hasComponent(type, entity)) {
      throw new Error(`Error: Component type ${type} is not attached to entity ${entity}.`);
    }
    this._components[type][entity] = null;
  }

  /**
   * Updates a component of the parent entity and specified type with the new state.
   *
   * @public
   * @param {int} type - The type of the component.
   * @param {int} entity - The identity of the parent entity.
   * @param {object} state - The new state for the component.
   */
  updateComponent(type, entity, state) {
    if (!this.hasComponent(type, entity)) {
      throw new Error(`Error: Component type ${type} is not attached to entity ${entity}.`);
    }
    const COMPONENT = this.getComponent(type, entity);

    COMPONENT.update(state);
  }

  /**
   *
   *
   * @public
   * @param {int} type - The type of the component.
   * @param {int} entity - The identity of the parent entity.
   *
   * @return {boolean}
   */
  hasComponent(type, entity) {
    if (!(type in this._components)) return false;
    return entity in this._components[type];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @return {ComponentManager}
   */
  static create() {
    return new ComponentManager();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default ComponentManager;
