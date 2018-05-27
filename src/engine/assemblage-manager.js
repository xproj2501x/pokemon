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
   * @type {EntityManager}
   */
  _entityManager;

  /**
   * @private
   * @type {ComponentManager}
   */
  _componentManager;

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
   * @param {EntityManager} entityManager -
   * @param {ComponentManager} componentManager -
   * @param {Array} templates -
   */
  constructor(entityManager, componentManager, templates) {
    this._entityManager = entityManager;
    this._componentManager = componentManager;
    this._templates = templates;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Creates an assemblage of the specified type
   *
   * @public
   * @param {int} type - The type of the assemblage.
   */
  createAssemblage(type, data) {
    const TEMPLATE = this._getTemplate(type);

    data = data || [];
    TEMPLATE.create(this._entityManager, this._componentManager, data);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
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
   * @param {EntityManager} entityManager -
   * @param {ComponentManager} componentManager -
   * @param {Array} templates -
   *
   * @return {AssemblageManager} - A new assemblage manager instance.
   */
  static create(entityManager, componentManager, templates) {
    return new AssemblageManager(entityManager, componentManager, templates);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default AssemblageManager;
