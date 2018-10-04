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
import {ENTITY_LIMIT, COMPONENT_LIMIT, COMMAND, EVENT} from './constants';

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
   * A collection of components.
   *
   * @private
   * @type {Array}
   */
  _components;

  /**
   * A collection of component templates.
   *
   * @private
   * @type {Array}
   */
  _templates;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * ComponentManager
   * @constructor
   * @param {LogService} logService - The log service for the application.
   * @param {MessageService} messageService - The message service for the application.
   * @param {Array} templates - A collection of component templates.
   */
  constructor(logService, messageService, templates) {
    this._logger = logService.registerLogger(this.constructor.name);
    this._messageService = messageService;
    this._components = new Array(COMPONENT_LIMIT).fill(null);
    this._templates = templates;
    this._messageService.subscribe(COMMAND.CREATE_COMPONENT, (message) => this.onCreateComponent(message));
    this._messageService.subscribe(COMMAND.DESTROY_COMPONENT, (message) => this.onDestroyComponent(message));
    this._messageService.subscribe(COMMAND.UPDATE_COMPONENT, (message) => this.onUpdateComponent(message));
    this._messageService.subscribe(EVENT.ENTITY_DESTROYED, (message) => this.onEntityDestroyed(message));
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Creates a new component instance of the specified type for the parent entity.
   * @public
   * @param {number} componentType - The type id of the component.
   * @param {number} entityId - The id of the parent entity.
   * @param {object} state - The initial state for the component.
   */
  createComponent(componentType, entityId, state) {
    const TEMPLATE = this._getTemplate(componentType);

    if (!this._components[componentType]) {
      this._components[componentType] = new Array(ENTITY_LIMIT).fill(null);
    }
    if (this.hasComponent(componentType, entityId)) {
      throw new Error(`Error: Component type ${componentType} is already attached to entity id ${entityId}.`)
    }
    this._components[componentType][entityId] = TEMPLATE.create(entityId, state);
    this._messageService.send(EVENT.COMPONENT_CREATED, {});
  }

  /**
   * Gets the component of the parent entity and specified type.
   * @public
   * @param {number} componentType - The type id of the component.
   * @param {number} entityId - The id of the parent entity.
   *
   * @return {Component}
   */
  getComponent(componentType, entityId) {
    if (!this.hasComponent(componentType, entityId)) {
      throw new Error(`Error: Component type ${componentType} is not attached to entity ${entityId}.`);
    }
    return this._components[componentType][entityId];
  }

  /**
   * Destroys a component with the parent entity and specified type.
   * @public
   * @param {number} componentType - The type id of the component.
   * @param {number} entityId - The id of the parent entity.
   */
  destroyComponent(componentType, entityId) {
    if (!this.hasComponent(componentType, entityId)) {
      throw new Error(`Error: Component type ${componentType} is not attached to entity ${entityId}.`);
    }
    this._components[componentType][entityId] = null;
  }

  /**
   * Updates a component with the parent entity and specified type with the new state.
   * @public
   * @param {number} componentType - The type id of the component.
   * @param {number} entityId - The id of the parent entity.
   * @param {object} state - The new state for the component.
   */
  updateComponent(componentType, entityId, state) {
    if (!this.hasComponent(componentType, entityId)) {
      throw new Error(`Error: Component type ${componentType} is not attached to entity ${entityId}.`);
    }
    const COMPONENT = this.getComponent(componentType, entityId);

    COMPONENT.update(state);
    this._messageService.send(EVENT.COMPONENT_UPDATED, {});
  }

  /**
   *
   * @public
   * @param {number} componentType - The type id of the component.
   * @param {number} entityId - The id of the parent entity.
   *
   * @return {boolean}
   */
  hasComponent(componentType, entityId) {
    if (!(componentType in this._components)) return false;
    return entityId in this._components[componentType];
  }

  /**
   * @public
   * @param {object} message
   */
  onCreateComponent(message) {

    this._messageService.send(EVENT.COMPONENT_CREATED, {});
  }

  onDestroyComponent(message) {

    this._messageService.send(EVENT.COMPONENT_DESTROYED, {});
  }

  onUpdateComponent(message) {

    this._messageService.send(EVENT.COMPONENT_UPDATED, {});
  }

  onEntityDestroyed(message) {

  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Gets a component template of the specified type.
   * @private
   * @param {number} componentType - The type of the component template.
   *
   * @return {Component} The component template.
   */
  _getTemplate(componentType) {
    if (!this._templates[componentType]) throw new Error(`Error: Component template ${componentType} does not exist.`);
    return this._templates[componentType];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   * @static
   * @param {LogService} logService - The log service for the application.
   * @param {MessageService} messageService - The message service for the application.
   * @param {Array} templates - A collection of component templates
   *
   * @return {ComponentManager} A new component manager instance.
   */
  static createInstance(logService, messageService, templates) {
    return new ComponentManager(logService, messageService, templates);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default ComponentManager;
