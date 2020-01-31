/**
 * Attack System
 * ===
 *
 * @module AttackSystem
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import System from '../../engine/system';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * AttackSystem
 * @class
 * @implements System
 */
class AttackSystem extends System {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * AttackSystem
   * @constructor
   */
  constructor() {
    super();

  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Updates the state
   */
  update() {

  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Calculates the damage of an attack
   * @private
   * @param {} attacker -
   * @param {} move -
   * @param {Array} targets -
   */
  _calculateDamage(attacker, move, targets) {
    const ATTACK_VALUE = this._calculateAttackValue(attacker, move.category);

    targets.forEach((target) => {
      const DEFENSE_VALUE = this._calculateDefenseValue(target, move.category);
      const FIRST = ((2 * attacker.level) / 5) + 2;
      const SECOND = (FIRST * move.power * (ATTACK_VALUE / DEFENSE_VALUE));
      const THIRD = SECOND / 50 + 2;
    });
  }

  /**
   *
   * @param pokemon
   * @param moveCategory
   * @private
   */
  _calculateAttackValue(pokemon, moveCategory) {
    if (moveCategory === 'physical') {
      return pokemon.stats.attack;
    } else if (moveCategory === 'special') {
      return pokemon.stats.specialAttack;
    }
  }

  _calculateDefenseValue(pokemon, moveCategory) {
    if (moveCategory === 'physical') {
      return pokemon.stats.defense;
    } else if (moveCategory === 'special') {
      return pokemon.stats.specialDefense;
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @return {AttackSystem}
   */
  static create() {
    return new AttackSystem();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default AttackSystem;