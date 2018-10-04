////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
/**
 * Enum for affects whom
 * @readonly
 * @enum {int}
 */
const AFFECTS_WHOM = {
  FRIENDSHIP: 0x01,
  FRIENDSHIP_DAY: 0x02,
  FRIENDSHIP_NIGHT: 0x03,
  LEVEL: 0x04,
  TRADE: 0x05,
  TRADE_ITEM: 0x06,
  ITEM: 0x07,
  LEVEL_ATTACK_GREATER: 0x08,
  LEVEL_ATTACK_EQUAL: 0x09,
  LEVEL_ATTACK_LOWER: 0x0A,
  LEVEL_SILCOON: 0x0B,
  LEVEL_CASCOON: 0x0C,
  LEVEL_NINJASK: 0x0D,
  LEVEL_SHEDINJA: 0x0E,
  BEAUTY: 0x0F,
};

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default AFFECTS_WHOM;

// 0x00	Selected target
// 0x01	Depends on the attack
// 0x02	Unused
// 0x04	Random target
// 0x08	Both foes
// 0x10	User
// 0x20	Both foes and partner
// 0x40	Opponent field


// Selected Target
// All Adjacent Foes
// Self
// Random Target
// Ally
// All Adjacent Pokemon
// Special
// Field
// All
// Team
// Adjacent Ally
// Self or Ally
// Enemy Side

