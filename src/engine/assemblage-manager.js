/**
 * Assemblage Manager
 * ===
 *
 * @module assemblageManager
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import {AssemblageNotFound} from './errors';
import {COMMAND, EVENT} from './constants';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////


/**
 * AssemblageManager
 * @class
 */
class AssemblageManager {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * The logger for the assemblage manager.
   * @private
   * @type {Logger}
   */
  _logger;

  /**
   * The message service for the application.
   * @private
   * @type {MessageService}
   */
  _messageService;

  /**
   * A collection of assemblage constructor templates.
   * @private
   * @type {Array}
   */
  _templates;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * AssemblageManager
   * @constructor
   * @param {LogService} logService - The log service for the application.
   * @param {MessageService} messageService - The message service for the application.
   * @param {Array} templates - A collection of assemblage constructor templates.
   */
  constructor(logService, messageService, templates) {
    this._logger = logService.registerLogger(this.constructor.name);
    this._messageService = messageService;
    this._templates = templates;
    this._messageService.subscribe(COMMAND.CREATE_ASSEMBLAGE, (message) => {});
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Build an assemblage of the specified type.
   * @public
   * @param {number} assemblageType - The type of assemblage to be created.
   * @param {object} data - The initial data for the new assemblage.
   */
  buildAssemblage(assemblageType, data) {
    const TEMPLATE = this._getTemplate(assemblageType);

    data = data || [];
    this._messageService.subscribe(EVENT.ENTITY_CREATED, (message) => {});
    this._messageService.subscribe(EVENT.COMPONENT_CREATED, (message) => {});

  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Gets an assemblage template from the collection.
   * @private
   * @param {int} type - The type of the assemblage template.
   *
   * @return {Assemblage} - The constructor template for the assemblage.
   */
  _getTemplate(type) {
    if (!this._templates[type]) throw new AssemblageNotFound(`Error: Assemblage template ${type} not found.`);
    return this._templates[type];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   *
   * @static
   * @param {LogService} logService - The log service for the application.
   * @param {MessageService} messageService - The message service for the application
   * @param {Array} templates -
   *
   * @return {AssemblageManager} A new assemblage manager instance.
   */
  static create(logService, messageService, templates) {
    return new AssemblageManager(logService, messageService, templates);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default AssemblageManager;
