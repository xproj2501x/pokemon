/**
 * Components
 * ===
 *
 * @module game.Components
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import ComponentManager from '../../engine/component-manager';
import PositionComponent from './position-component';
import VelocityComponent from './velocity-component';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
/**
 * Enum for component type
 * @readonly
 * @enum {int}
 */
const COMPONENT_TYPE = {
  POSITION: 0,
  VELOCITY: 1,
  HEALTH: 2,
  BLOCKING: 3,
  SPRITE: 4,
  ANIMATION: 5,
};

/**
 *
 * @type {Array}
 */
const TEMPLATES = [
  PositionComponent,
  VelocityComponent
];

/**
 *
 * @return {ComponentManager}
 */
const COMPONENT_MANAGER_FACTORY = () => {
  return ComponentManager.create(TEMPLATES);
};

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export {COMPONENT_TYPE, COMPONENT_MANAGER_FACTORY};
