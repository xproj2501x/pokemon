/**
 * Pokemon
 * ===
 *
 * @module pokemon
 */
////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const KEYS = {
  // UNENCRYPTED BYTES
  ENCRYPTION_KEY: 0x00,
  SANITY_PLACEHOLDER: 0x04,
  CHECKSUM: 0x06,

  // ENCRYPTED BYTES

  // BLOCK A
  NATIONAL_POKEDEX_ID: 0x08,
  HELD_ITEM: 0x0A,
  ORIGINAL_TRAINER_ID: 0x0C,
  ORIGINAL_TRAINER_SECRET_ID: 0x0E,
  EXPERIENCE_POINTS: 0x10,
  ABILITY: 0x14,
  ABILITY_NUMBER: 0x15,
  HITS_ON_TRAINING_BAG: 0x16,
  PERSONALITY_ID: 0x18,
  NATURE: 0x1C,
  FLAGS: 0x1D,
  HP_EFFORT_VALUE: 0x1E,
  ATTACK_EFFORT_VALUE: 0x1F,
  DEFENSE_EFFORT_VALUE: 0x20,
  SPEED_EFFORT_VALUE: 0x21,
  SP_ATTACK_EFFORT_VALUE: 0x22,
  SP_DEFENSE_EFFORT_VALUE: 0x32,

  // BLOCK B
  NICKNAME: 0x40,
  MOVE_1_ID: 0x5A,
  MOVE_2_ID: 0x5C,
  MOVE_3_ID: 0x5E,
  MOVE_4_ID: 0x60,
  MOVE_1_CURRENT_PP: 0x62,
  MOVE_2_CURRENT_PP: 0x63,
  MOVE_3_CURRENT_PP: 0x64,
  MOVE_4_CURRENT_PP: 0x65,
  MOVE_PP_UPS: 0x66,
  RELEARN_MOVE_1_ID: 0x6A,
  RELEARN_MOVE_2_ID: 0x6C,
  RELEARN_MOVE_3_ID: 0x6E,
  RELEARN_MOVE_4_ID: 0x70,
  SECRET_TRAINING_FLAG: 0x72,
  INDIVIDUAL_VALUES: 0x74,

  // BLOCK C
  LATEST_NOT_OT_HANDLER: 0x75,
  NULL_TERMINATOR: 0x90,
  NOT_OT_GENDER: 0x92,
  CURRENT_HANDLER: 0x93,
  GEOLOCATION_1: 0x94,
  GEOLOCATION_2: 0x96,
  GEOLOCATION_3: 0x98,
  GEOLOCATION_4: 0x9A,
  GEOLOCATION_5: 0x9C,

  // BLOCK D
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Pokemon
 * @class
 */
class Pokemon {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @private
   * @type {DataModel}
   */
  _data;
  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @constructor
   * @param {DataModel} data
   */
  constructor(data) {

  }
  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @return {Pokemon}
   */
  static create(data) {
    return new Pokemon(data);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Pokemon;
