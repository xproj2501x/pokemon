/**
 * Engine
 * ===
 *
 * @module engine
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import {FRAME_DURATION, MAX_FRAME_SKIP} from './constants';
import EntityManager from './entity-manager';
import StateManager from './state-manager';
import SystemManager from './system-manager';


////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Engine
 * @class
 */
class Engine {

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
   * @type {EntityManager}
   */
  _entityManager;

  /**
   * @private
   * @type {StateManager}
   */
  _stateManager;

  /**
   * @private
   * @type {SystemManager}
   */
  _systemManager;

  /**
   * @private
   * @type {Boolean}
   */
  _isRunning;

  /**
   * @private
   * @type {int}
   */
  _time;

  /**
   * @private
   * @type {int}
   */
  _lastTick;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Engine
   * @constructor
   * @param {object} configuration - The configuration for the simulation
   */
  constructor(configuration) {
    this._isRunning = false;
    this._time = 0;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Starts the engine for the simulation.
   */
  start() {
    this._isRunning = true;
    this._lastTick = Date.now();
    this._tick();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   *
   * @private
   */
  _tick() {
    let delta = 0;

    while (this._isRunning) {
      const CURRENT_TIME = Date.now();

      delta += CURRENT_TIME - this._lastTick;
      this._lastTick = CURRENT_TIME;
      while (delta >= FRAME_DURATION) {
        this._time += FRAME_DURATION;
        this._systemManager.update(delta);
        delta -= FRAME_DURATION;
      }
      this._render(delta / FRAME_DURATION);
    }
  }

  _render(interpolation) {

  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   * @static
   * @param {object} configuration - The configuration for the simulation.
   * @return {Engine}
   */
  static create(configuration) {
    const ENTITY_MANAGER = EntityManager.create(configuration.logService, configuration.messageService);
    const SYSTEM_MANAGER = SystemManager.create(configuration.logService, configuration.messageService,
                                                configuration.systems);
    const STATE_MANAGER = StateManager.create(configuration.logService, configuration.messageService,
                                              configuration.states, configuration.initialState);

    return new Engine(configuration);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Engine;
