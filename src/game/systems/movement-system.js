/**
 * Movement System
 * ===
 *
 * @module movementSystem
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import System from '../../engine/system';
import {COMPONENT_TYPE} from '../components';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * MovementSystem
 * @class
 * @extends System
 */
class MovementSystem extends System {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * MovementSystem
   * @constructor
   */
  constructor(componentManager) {
    super(componentManager);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Updates the state
   */
  update() {
    const VELOCITY_COMPONENTS = this._componentManager.getComponentsOfType(COMPONENT_TYPE.VELOCITY);
    const POSITION_COMPONENTS = this._componentManager.getComponentsOfType(COMPONENT_TYPE.POSITION);

    VELOCITY_COMPONENTS.forEach((velocity) => {
      const OLD_POSITION = POSITION_COMPONENTS[velocity.id];
      const NEW_POSITION = {x: OLD_POSITION.x + velocity.dx, y: OLD_POSITION.y + velocity.dy};
      const MATCHES = POSITION_COMPONENTS.filter((position) => {
        return position.x === NEW_POSITION.x && position.y === NEW_POSITION.y;
      });

      if (MATCHES) {
        MATCHES.forEach((match) => {
          if (this._componentManager.hasComponent(COMPONENT_TYPE.BLOCKING, match.id)) {
            this._componentManager.destroyComponent(COMPONENT_TYPE.VELOCITY, velocity.id);
          }
          if (this._componentManager.hasComponent(COMPONENT_TYPE.HEALTH, match.id)) {
            this._componentManager.destroyComponent(COMPONENT_TYPE.VELOCITY, velocity.id);
            console.log('combat');
          }
        });
      } else {
        this._componentManager.updateComponent(COMPONENT_TYPE.POSITION, velocity.id, NEW_POSITION);
        this._componentManager.destroyComponent(COMPONENT_TYPE.VELOCITY, velocity.id);
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method.
   *
   * @static
   * @param {ComponentManager} componentManager - The component manager for the simulation.
   *
   * @return {MovementSystem} - A new movement system instance.
   */
  static create(componentManager) {
    return new MovementSystem(componentManager);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default MovementSystem;
