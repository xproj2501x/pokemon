/**
 * Assemblages
 * ===
 *
 * @module game.Assemblages
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import AssemblageManager from '../../engine/assemblage-manager';
import PlayerAssemblage from './player-assemblage';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
/**
 * Enum for assemblage type
 * @readonly
 * @enum {int}
 */
const ASSEMBLAGE_TYPE = {
  PLAYER: 0
};

/**
 *
 * @type {Array}
 */
const TEMPLATES = [
  PlayerAssemblage
];

const ASSEMBLAGE_MANAGER_FACTORY = (entityManager, componentManager) => {
  return AssemblageManager.create(entityManager, componentManager, TEMPLATES);
};

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export {ASSEMBLAGE_TYPE, ASSEMBLAGE_MANAGER_FACTORY};