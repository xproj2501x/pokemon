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
/**
 * The size of the data structure in bytes
 * @type {number}
 */
const SIZE = 232;

const KEYS = {
  // UNENCRYPTED BYTES

  ENCRYPTION_KEY: 0x00,               // 4 Bytes
  SANITY_PLACEHOLDER: 0x04,           // 2 Bytes
  CHECKSUM: 0x06,                     // 2 Bytes
                                      // 8 Bytes
  // ENCRYPTED BYTES

  // BLOCK A
  NATIONAL_POKEDEX_ID: 0x08,          // 2 Bytes
  HELD_ITEM: 0x0A,                    // 2 Bytes
  ORIGINAL_TRAINER_ID: 0x0C,          // 2 Bytes
  ORIGINAL_TRAINER_SECRET_ID: 0x0E,   // 2 Bytes
  EXPERIENCE_POINTS: 0x10,            // 4 Bytes
  ABILITY: 0x14,                      // 1 Byte
  ABILITY_NUMBER: 0x15,               // 1 Byte
  HITS_ON_TRAINING_BAG: 0x16,         // 2 Bytes
  PERSONALITY_ID: 0x18,               // 4 Bytes
  NATURE: 0x1C,                       // 1 Byte
  FLAGS: 0x1D,                        // 1 Byte
  HP_EV: 0x1E,                        // 1 Byte
  ATTACK_EV: 0x1F,                    // 1 Byte
  DEFENSE_EV: 0x20,                   // 1 Byte
  SPEED_EV: 0x21,                     // 1 Byte
  SP_ATK_EV: 0x22,                    // 1 Byte
  SP_DEF_EV: 0x23,                    // 1 Byte
  CONTEST_COOL: 0x24,                 // 1 Byte
  CONTEST_BEAUTY: 0x25,               // 1 Byte
  CONTEST_CUTE: 0x26,                 // 1 Byte
  CONTEST_SMART: 0x27,                // 1 Byte
  CONTEST_TOUGH: 0x28,                // 1 Byte
  CONTEST_SHEEN: 0x29,                // 1 Byte
  MARKINGS: 0x2A,                     // 1 Byte
  POKERUS: 0x2B,                      // 1 Byte
  GOLD_MEDAL_TRAINING_FLAGS: 0x2C,    // 4 Bytes
  RIBBONS: 0x30,                      // 6 Bytes
  UNUSED_1: 0x36,                     // 2 Bytes
  CONTEST_MEMORY: 0x38,               // 1 Byte
  BATTLE_MEMORY: 0x39,                // 1 Byte
  SUPER_TRAINING_FLAGS: 0x3A,         // 1 Byte
  UNUSED_2: 0x3B,                     // 5 Bytes
                                      // 56 Bytes
  // BLOCK B
  NICKNAME: 0x40,                     // 24 Bytes
  NULL_TERMINATOR_1: 0x58,            // 2 Bytes
  MOVE_1_ID: 0x5A,                    // 2 Bytes
  MOVE_2_ID: 0x5C,                    // 2 Bytes
  MOVE_3_ID: 0x5E,                    // 2 Bytes
  MOVE_4_ID: 0x60,                    // 2 Bytes
  MOVE_1_CURRENT_PP: 0x62,            // 1 Byte
  MOVE_2_CURRENT_PP: 0x63,            // 1 Byte
  MOVE_3_CURRENT_PP: 0x64,            // 1 Byte
  MOVE_4_CURRENT_PP: 0x65,            // 1 Byte
  MOVE_PP_UPS: 0x66,                  // 4 Bytes
  RELEARN_MOVE_1_ID: 0x6A,            // 2 Bytes
  RELEARN_MOVE_2_ID: 0x6C,            // 2 Bytes
  RELEARN_MOVE_3_ID: 0x6E,            // 2 Bytes
  RELEARN_MOVE_4_ID: 0x70,            // 2 Bytes
  SECRET_TRAINING_FLAGS: 0x72,        // 1 Byte
  UNUSED_3: 0x73,                     // 1 Byte
  INDIVIDUAL_VALUES: 0x74,            // 4 Bytes
                                      // 56 Bytes

  // BLOCK C
  LATEST_NOT_OT_HANDLER: 0x75,        // 24 Bytes
  NULL_TERMINATOR_2: 0x90,            // 2 Bytes
  NOT_OT_GENDER: 0x92,                // 1 Byte
  CURRENT_HANDLER: 0x93,              // 1 Byte
  GEOLOCATION_1: 0x94,                // 2 Bytes
  GEOLOCATION_2: 0x96,                // 2 Bytes
  GEOLOCATION_3: 0x98,                // 2 Bytes
  GEOLOCATION_4: 0x9A,                // 2 Bytes
  GEOLOCATION_5: 0x9C,                // 2 Bytes
  UNUSED_4: 0x9E,                     // 2 Bytes
  UNUSED_5: 0xA0,                     // 2 Bytes
  NOT_OT_FRIENDSHIP: 0xA2,            // 1 Byte
  NOT_OT_AFFECTION: 0xA3,             // 1 Byte
  NOT_OT_MEMORY_INTENSITY: 0xA4,      // 1 Byte
  NOT_OT_MEMORY_LINE: 0xA5,           // 1 Byte
  NOT_OT_MEMORY_FEELING: 0xA6,        // 1 Byte
  UNUSED_6: 0xA7,                     // 1 Byte
  NOT_OT_TEXTVAR: 0xA8,               // 2 Bytes
  UNUSED_7: 0xAA,                     // 2 Bytes
  UNUSED_8: 0xAC,                     // 2 Bytes
  FULLNESS: 0xAE,                     // 1 Byte
  ENJOYMENT: 0xAF,                    // 1 Byte
                                      // 56 Bytes

  // BLOCK D
  OT_NAME: 0xAB,                      // 24 Bytes
  NULL_TERMINATOR_3: 0xC8,            // 2 Bytes
  OT_FRIENDSHIP: 0xCA,                // 1 Byte
  OT_AFFECTION: 0xCB,                 // 1 Byte
  OT_MEMORY_INTENSITY: 0xCC,          // 1 Byte
  OT_MEMORY_LINE: 0xCD,               // 1 Byte
  OT_TEXTVAR: 0xCE,                   // 2 Bytes
  OT_MEMORY_FEELING: 0xD0,            // 1 Byte
  DATE_EGG_RECEIVED: 0xD1,            // 3 Bytes
  DATE_MET: 0xD4,                     // 3 Bytes
  UNUSED_9: 0xD7,                     // 1 Bytes
  EGG_LOCATION: 0xD8,                 // 2 Bytes
  MET_AT: 0xDA,                       // 2 Bytes
  POKEBALL: 0xDC,                     // 1 Byte
  ENCOUNTER_LEVEL: 0xDD,              // 1 Byte
  ENCOUNTER_TYPE: 0xDE,               // 1 Byte
  OT_GAME_ID: 0xDF,                   // 1 Byte
  COUNTRY_ID: 0xE0,                   // 1 Byte
  REGION_ID: 0xE1,                    // 1 Byte
  DS_REGION_ID: 0xE2,                 // 1 Byte
  OT_LANGUAGE_ID: 0xE3,               // 1 Byte
  UNUSED_10: 0xE4                     // 4 Bytes
                                      // 56 Bytes
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
  static createInstance(data) {
    return new Pokemon(data);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Pokemon;
