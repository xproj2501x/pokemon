/**
 * Pokemon Battle Stats
 * ===
 *
 * @module pokemonBattleStats
 */
////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Pokemon from './pokemon';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
/**
 * The size of the data structure in BYTES
 * @type {number}
 */
const SIZE = 260;

const KEYS = {
  // 3
  // UNENCRYPTED BYTES                // 8 BYTES
  ENCRYPTION_KEY: 0x000,              // 4 BYTES
  SANITY_PLACEHOLDER: 0x004,          // 2 BYTES
  CHECKSUM: 0x006,                    // 2 BYTES

  // ENCRYPTED BYTES

  // 32 - 2
  // BLOCK A                          // 56 BYTES
  NATIONAL_POKEDEX_ID: 0x008,         // 2 BYTES
  HELD_ITEM: 0x00A,                   // 2 BYTES
  ORIGINAL_TRAINER_ID: 0x00C,         // 2 BYTES
  ORIGINAL_TRAINER_SECRET_ID: 0x00E,  // 2 BYTES
  EXPERIENCE_POINTS: 0x010,           // 4 BYTES
  ABILITY: 0x014,                     // 1 BYTES
  ABILITY_NUMBER: 0x015,              // 1 BYTES
  HITS_ON_TRAINING_BAG: 0x016,        // 2 BYTES
  PERSONALITY_VALUE: 0x018,           // 4 BYTES
  NATURE: 0x01C,                      // 1 BYTES
  FLAGS: 0x01D,                       // 1 BYTES
  HP_EV: 0x01E,                       // 1 BYTES
  ATTACK_EV: 0x01F,                   // 1 BYTES
  DEFENSE_EV: 0x020,                  // 1 BYTES
  SPEED_EV: 0x021,                    // 1 BYTES
  SP_ATK_EV: 0x022,                   // 1 BYTES
  SP_DEF_EV: 0x023,                   // 1 BYTES
  CONTEST_COOL: 0x024,                // 1 BYTES
  CONTEST_BEAUTY: 0x025,              // 1 BYTES
  CONTEST_CUTE: 0x026,                // 1 BYTES
  CONTEST_SMART: 0x027,               // 1 BYTES
  CONTEST_TOUGH: 0x028,               // 1 BYTES
  CONTEST_SHEEN: 0x029,               // 1 BYTES
  MARKINGS: 0x02A,                    // 1 BYTES
  POKERUS: 0x02B,                     // 1 BYTES
  GOLD_MEDAL_TRAINING_FLAGS: 0x02C,   // 4 BYTES
  RIBBONS: 0x030,                     // 6 BYTES
  UNUSED_1: 0x036,                    // 2 BYTES
  CONTEST_MEMORY: 0x038,              // 1 BYTES
  BATTLE_MEMORY: 0x039,               // 1 BYTES
  SUPER_TRAINING_FLAGS: 0x03A,        // 1 BYTES
  UNUSED_2: 0x03B,                    // 5 BYTES

  // 18 - 2
  // BLOCK B                          // 56 BYTES
  NICKNAME: 0x040,                    // 24 BYTES
  NULL_TERMINATOR_1: 0x058,           // 2 BYTES
  MOVE_1_ID: 0x05A,                   // 2 BYTES
  MOVE_2_ID: 0x05C,                   // 2 BYTES
  MOVE_3_ID: 0x05E,                   // 2 BYTES
  MOVE_4_ID: 0x060,                   // 2 BYTES
  MOVE_1_CURRENT_PP: 0x062,           // 1 BYTES
  MOVE_2_CURRENT_PP: 0x063,           // 1 BYTES
  MOVE_3_CURRENT_PP: 0x064,           // 1 BYTES
  MOVE_4_CURRENT_PP: 0x065,           // 1 BYTES
  MOVE_PP_UPS: 0x066,                 // 4 BYTES
  RELEARN_MOVE_1_ID: 0x06A,           // 2 BYTES
  RELEARN_MOVE_2_ID: 0x06C,           // 2 BYTES
  RELEARN_MOVE_3_ID: 0x06E,           // 2 BYTES
  RELEARN_MOVE_4_ID: 0x070,           // 2 BYTES
  SECRET_TRAINING_FLAGS: 0x072,       // 1 BYTES
  UNUSED_3: 0x073,                    // 1 BYTES
  INDIVIDUAL_VALUES: 0x074,           // 4 BYTES

  // 22 - 6
  // BLOCK C                          // 56 BYTES
  LATEST_NOT_OT_HANDLER: 0x075,       // 24 BYTES
  NULL_TERMINATOR_2: 0x090,           // 2 BYTES
  NOT_OT_GENDER: 0x092,               // 1 BYTES
  CURRENT_HANDLER: 0x093,             // 1 BYTES
  GEOLOCATION_1: 0x094,               // 2 BYTES
  GEOLOCATION_2: 0x096,               // 2 BYTES
  GEOLOCATION_3: 0x098,               // 2 BYTES
  GEOLOCATION_4: 0x09A,               // 2 BYTES
  GEOLOCATION_5: 0x09C,               // 2 BYTES
  UNUSED_4: 0x09E,                    // 2 BYTES
  UNUSED_5: 0x0A0,                    // 2 BYTES
  NOT_OT_FRIENDSHIP: 0x0A2,           // 1 BYTES
  NOT_OT_AFFECTION: 0x0A3,            // 1 BYTES
  NOT_OT_MEMORY_INTENSITY: 0x0A4,     // 1 BYTES
  NOT_OT_MEMORY_LINE: 0x0A5,          // 1 BYTES
  NOT_OT_MEMORY_FEELING: 0x0A6,       // 1 BYTES
  UNUSED_6: 0x0A7,                    // 1 BYTES
  NOT_OT_TEXTVAR: 0x0A8,              // 2 BYTES
  UNUSED_7: 0x0AA,                    // 2 BYTES
  UNUSED_8: 0x0AC,                    // 2 BYTES
  FULLNESS: 0x0AE,                    // 1 BYTES
  ENJOYMENT: 0x0AF,                   // 1 BYTES

  // 22 - 3
  // BLOCK D                          // 56 BYTES
  OT_NAME: 0x0AB,                     // 24 BYTES
  NULL_TERMINATOR_3: 0x0C8,           // 2 BYTES
  OT_FRIENDSHIP: 0x0CA,               // 1 BYTES
  OT_AFFECTION: 0x0CB,                // 1 BYTES
  OT_MEMORY_INTENSITY: 0x0CC,         // 1 BYTES
  OT_MEMORY_LINE: 0x0CD,              // 1 BYTES
  OT_TEXTVAR: 0x0CE,                  // 2 BYTES
  OT_MEMORY_FEELING: 0x0D0,           // 1 BYTES
  DATE_EGG_RECEIVED: 0x0D1,           // 3 BYTES
  DATE_MET: 0x0D4,                    // 3 BYTES
  UNUSED_9: 0x0D7,                    // 1 BYTES
  EGG_LOCATION: 0x0D8,                // 2 BYTES
  MET_AT: 0x0DA,                      // 2 BYTES
  POKEBALL: 0x0DC,                    // 1 BYTES
  ENCOUNTER_LEVEL: 0x0DD,             // 1 BYTES
  ENCOUNTER_TYPE: 0x0DE,              // 1 BYTES
  OT_GAME_ID: 0x0DF,                  // 1 BYTES
  COUNTRY_ID: 0x0E0,                  // 1 BYTES
  REGION_ID: 0x0E1,                   // 1 BYTES
  DS_REGION_ID: 0x0E2,                // 1 BYTES
  OT_LANGUAGE_ID: 0x0E3,              // 1 BYTES
  UNUSED_10: 0x0E4,                   // 4 BYTES

  // 15 - 6
  // BATTLE STATS
  CONDITION_FLAGS: 0x0E8,             // 1 BYTE
  UNUSED_11: 0x0E9,                   // 1 BYTE
  UNUSED_12: 0x0EA,                   // 2 BYTES
  LEVEL: 0x0EC,                       // 1 BYTE
  UNUSED_13: 0x0ED,                   // 1 BYTE
  UNUSED_14: 0x0EE,                   // 2 BYTES
  CURRENT_HP: 0x0F0,                  // 2 BYTES
  MAX_HP: 0x0F2,                      // 2 BYTES
  ATTACK: 0x0F4,                      // 2 BYTES
  DEFENSE: 0x0F6,                     // 2 BYTES
  SPEED: 0x0F8,                       // 2 BYTES
  SP_ATK: 0x0FA,                      // 2 BYTES
  SP_DEF: 0x00FC,                     // 2 BYTES
  UNUSED_15: 0x00FE,                  // 2 BYTES
  PADDING: 0x0100,                    // 4 BYTES
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * PokemonBattleStats
 * @class
 * @extends Pokemon
 */
class PokemonBattleStats extends Pokemon {

  //////////////////////////////////////////////////////////////////////////////
 // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
 // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * PokemonBattleStats
   * @constructor
   * @param {DataModel} data
   */
  constructor(data) {
    super(data);
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
   * Static factory method.
   * @static
   *
   * @return {PokemonBattleStats}
   */
  static createInstance(data) {
    return new PokemonBattleStats(data);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default PokemonBattleStats;
