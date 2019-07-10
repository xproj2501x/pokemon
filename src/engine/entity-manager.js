/**
 * Entity Manager
 * ===
 *
 * @module entityManager
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Entity from './entity';
import {EntityLimitExceeded, EntityNotFound} from './errors';
import {ENTITY_LIMIT, COMMAND, EVENT} from './constants';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * EntityManager
 * @class
 */
class EntityManager {

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
   * @private
   * @type {int}
   */
  _nextId;

  /**
   *
   * @private
   * @type {Array}
   */
  _entities;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * EntityManager
   * @constructor
   * @param {LogService} logService - The log service for the application.
   * @param {MessageService} messageService - The message service for the application.
   */
  constructor(logService, messageService) {
    this._logger = logService.registerLogger(this.constructor.name);
    this._messageService = messageService;
    this._nextId = 0;
    this._entities = new Array(ENTITY_LIMIT).fill(null);
    this._messageService.subscribe(COMMAND.CREATE_ENTITY, (command) => this.onCreateEntity(command));
    this._messageService.subscribe(COMMAND.DESTROY_ENTITY, (command) => this.onDestroyEntity(command));
    this._messageService.subscribe(EVENT.COMPONENT_CREATED, (event) => this.onComponentCreated(event));
    this._messageService.subscribe(EVENT.COMPONENT_DESTROYED, (event) => this.onComponentDestroyed(event));
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Message handler for CREATE_ENTITY command.
   * @public
   * @param {object} command - The CREATE_ENTITY command message.
   */
  onCreateEntity(command) {
    const ENTITY_ID = this._createEntity();

    this._messageService.send(EVENT.ENTITY_CREATED, {entityId: ENTITY_ID});
  }

  /**
   * Message handler for DESTROY_ENTITY command.
   * @public
   * @param {object} command - The DESTROY_ENTITY command message.
   */
  onDestroyEntity(command) {
    const ENTITY_ID = command.entityId;

    this._destroyEntity(ENTITY_ID);
    this._messageService.send(EVENT.ENTITY_DESTROYED, {entityId: ENTITY_ID});
  }

  /**
   * Message handler for COMPONENT_CREATED event.
   * @public
   * @param {object} event - The COMPONENT_CREATED event message.
   */
  onComponentCreated(event) {
    this._attachComponentToEntity(event.entityId, event.componentType);
  }

  /**
   * Message handler for COMPONENT_DESTROYED event.
   * @public
   * @param {object} event - The COMPONENT_DESTROYED event message.
   */
  onComponentDestroyed(event) {
    this._detachComponentFromEntity(event.entityId, event.componentType);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Creates a new entity.
   * @private
   *
   * @return {number} The id of the new entity.
   */
  _createEntity() {
    if (this._nextId > ENTITY_LIMIT) throw new EntityLimitExceeded(`Error: Entity limit ${ENTITY_LIMIT} exceeded.`);
    const ENTITY = Entity.create(this._nextId);

    this._entities[this._nextId] = ENTITY;
    this._nextId++;
    return ENTITY.id;
  }

  /**
   * Destroys the entity with the the specified identity.
   * @private
   * @param {number} entityId - The id of the entity.
   */
  _destroyEntity(entityId) {
    this._getEntity(entityId);
    this._entities[entityId] = null;
    this._messageService.send(EVENT.ENTITY_DESTROYED, {});
  }

  /**
   * Attaches a component to the specified entity.
   * @private
   * @param {number} entityId - The id of the entity.
   * @param {number} componentType - The type id of the component to be attached.
   */
  _attachComponentToEntity(entityId, componentType) {
    const ENTITY = this._getEntity(entityId);

    ENTITY.attachComponent(componentType);
  }

  /**
   * Detaches a component from the specified entity.
   * @private
   * @param {number} entityId - The id of the entity.
   * @param {number} componentType - The type id of the component to be detached.
   */
  _detachComponentFromEntity(entityId, componentType) {
    const ENTITY = this._getEntity(entityId);

    ENTITY.detachComponent(componentType);
  }

  /**
   * Gets an entity with a matching id from _entities.
   * @private
   * @param {number} entityId - The identity of the entity.
   *
   * @return {Entity}
   */
  _getEntity(entityId) {
    if (!this._entities[entityId]) throw new EntityNotFound(`Error: Entity id ${entityId} not found.`);
    return this._entities[entityId];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   * @static
   * @param {LogService} logService - The log service for the application.
   * @param {MessageService} messageService - The message service for the application.
   *
   * @return {EntityManager} A new entity manager instance.
   */
  static create(logService, messageService) {
    return new EntityManager(logService, messageService);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default EntityManager;
