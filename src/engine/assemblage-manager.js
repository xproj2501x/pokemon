/**
 * Assemblage Manager
 * ===
 *
 * @module assemblageManager
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
import {COMMAND, EVENT} from './constants';

/**
 * AssemblageManager
 * @class
 */
class AssemblageManager {

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
   * @param {MessageService} messageService - The message service for the application
   * @param {Array} templates -
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
   * Creates an assemblage of the specified type
   * @public
   * @param {number} assemblageType - The type of the assemblage.
   */
  createAssemblage(assemblageType, data) {
    const TEMPLATE = this._getTemplate(assemblageType);

    data = data || [];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   *
   * @private
   * @param {int} type - The type of the assemblage template.
   *
   * @return {Assemblage} - The constructor template for the assemblage.
   */
  _getTemplate(type) {
    if (!this._templates[type]) throw new Error(`Error: Assemblage template ${type} does not exist.`);
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
