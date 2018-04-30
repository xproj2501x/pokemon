/**
 * Components
 * ===
 *
 * @module game.Components
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
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
  POSITION: 1,
  VELOCITY: 2
};

/**
 *
 * @type {Array}
 */
const TEMPLATES = [
  PositionComponent,
  VelocityComponent
];

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export {COMPONENT_TYPE, TEMPLATES}
