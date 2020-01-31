/**
 * Type Effectiveness
 * ===
 *
 * @module TypeEffectiveness
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const TYPE_EFFECTIVENESS = {
  normal: {
    normal: 1,
    fighting: 1,
    flying: 1,
    poison: 1,
    ground: 1,
    rock: 0.5,
    bug: 1,
    ghost: 0,
    steel: 0.5,
    fire: 1,
    water: 1,
    grass: 1,
    electric: 1,
    psychic: 1,
    ice: 1,
    dragon: 1,
    dark: 1,
    fairy: 1
  },
  fighting: {
    normal: 1,
    fighting: 1,
    flying: 1,
    poison: 1,
    ground: 1,
    rock: 0.5,
    bug: 1,
    ghost: 0,
    steel: 0.5,
    fire: 1,
    water: 1,
    grass: 1,
    electric: 1,
    psychic: 1,
    ice: 1,
    dragon: 1,
    dark: 1,
    fairy: 1
  },
  flying: {},
  poison: {},
  ground: {},
  rock: {},
  bug: {},
  ghost: {},
  steel: {},
  fire: {},
  water: {},
  grass: {},
  electric: {},
  psychic: {},
  ice: {},
  dragon: {},
  dark: {},
  fairy: {}
};

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default TYPE_EFFECTIVENESS;
