////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
/**
 * Enum for items
 * @readonly
 * @enum {int}
 */
const ITEM = {
  NONE: 0x0000,
  MASTER_BALL: 0x0001,
  ULTRA_BALL: 0x0002,
  GREAT_BALL: 0x0003,
  POKE_BALL: 0x0004,
  SAFARI_BALL: 0x0005,
  NET_BALL: 0x0006,
  DIVE_BALL: 0x0007,
  NEST_BALL: 0x0008,
  REPEAT_BALL: 0x0009,
  TIMER_BALL: 0x000A,
  LUXURY_BALL: 0x000B,
  PREMIER_BALL: 0x000C,
  DUSK_BALL: 0x000D,
  HEAL_BALL: 0x000E,
  QUICK_BALL: 0x000F,
  CHERISH_BALL: 0x0010,
  POTION: 0x0011,
  ANTIDOTE: 0x0012,
  BURN_HEAL: 0x0013,
  ICE_HEAL: 0x0014,
  AWAKENING: 0x0015,
  PARALYZE_HEAL: 0x0016,
  FULL_RESTORE: 0x0017,
  MAX_POTION: 0x0018,
  HYPER_POTION: 0x0019,
  SUPER_POTION: 0x001A,
  FULL_HEAL: 0x001B,
  REVIVE: 0x001C,
  MAX_REVIVE: 0x001D,
  FRESH_WATER: 0x001E,
  SODA_POP: 0x001F,
  LEMONADE: 0x0020,
  MOOMOO_MILK: 0x0021,
  ENERGY_POWDER: 0x0022,
  ENERGY_ROOT: 0x0023,
  HEAL_POWDER: 0x0024,
  REVIVAL_HERB: 0x0025,
  ETHER: 0x0026,
  MAX_ETHER: 0x0027,
  ELIXIR: 0x0028,
  MAX_ELIXIR: 0x0029,
  LAVA_COOKIE: 0x002A,
  BERRY_JUICE: 0x002B,
  SACRED_ASH: 0x002C,
  HP_UP: 0x002D,
  PROTEIN: 0x002E,
  IRON: 0x002F,
  CARBOS: 0x0030,
  CALCIUM: 0x0031,
  RARE_CANDY: 0x0032,
  PP_UP: 0x0033,
  ZINC: 0x0034,
  PP_MAX: 0x0035,
  OLD_GATEAU: 0x0036,
  GUARD_SPEC: 0x0037,
  DIRE_HIT: 0x0038,
  X_ATTACK: 0x0039,
  X_DEFENSE: 0x003A,
  X_SPEED: 0x003B,
  X_ACCURACY: 0x003C,
  X_SP_ATK: 0x003D,
  X_SP_DEF: 0x003E,
  POKE_DOLL: 0x003F,
  FLUFFY_TAIL: 0x0040,
  BLUE_FLUTE: 0x0041,
  YELLOW_FLUTE: 0x0042,
  RED_FLUTE: 0x0043,
  BLACK_FLUTE: 0x0044,
  WHITE_FLUTE: 0x0045,
  SHOAL_SALT: 0x0046,
  SHOAL_SHELL: 0x0047,
  RED_SHARD: 0x0048,
  BLUE_SHARD: 0x0049,
  YELLOW_SHARD: 0x004A,
  GREEN_SHARD: 0x004B,
  SUPER_REPEL: 0x004C,
  MAX_REPEL: 0x004D,
  ESCAPE_ROPE: 0x004E,
  REPEL: 0x004F,
  SUN_STONE: 0x0050,
  MOON_STONE: 0x0051,
  FIRE_STONE: 0x0052,
  THUNDER_STONE: 0x0053,
  WATER_STONE: 0x0054,
  LEAF_STONE: 0x0055,
  TINY_MUSHROOM: 0x0056,
  BIG_MUSHROOM: 0x0057,
  PEARL: 0x0058,
  BIG_PEARL: 0x0059,
  STARDUST: 0x005A,
  STAR_PIECE: 0x005B,
  NUGGET: 0x005C,
  HEART_SCALE: 0x005D,
  HONEY: 0x005E,
  GROWTH_MULCH: 0x005F,
  DAMP_MULCH: 0x0060,
  STABLE_MULCH: 0x0061,
  GOOEY_MULCH: 0x0062,
  ROOT_FOSSIL: 0x0063,
  CLAW_FOSSIL: 0x0064,
  HELIX_FOSSIL: 0x0065,
  DOME_FOSSIL: 0x0066,
  OLD_AMBER: 0x0067,
  ARMOR_FOSSIL: 0x0068,
  SKULL_FOSSIL: 0x0069,
  RARE_BONE: 0x006A,
  SHINY_STONE: 0x006B,
  DUSK_STONE: 0x006C,
  DAWN_STONE: 0x006D,
  OVAL_STONE: 0x006E,
  ODD_KEYSTONE: 0x006F,
  GRISEOUS_ORB: 0x0070,
  DOUSE_DRIVE: 0x0071,
  SHOCK_DRIVE: 0x0072,
  BURN_DRIVE: 0x0073,
  CHILL_DRIVE: 0x0074,
  SWEET_HEART: 0x0075,
  ADAMANT_ORB: 0x0076,
  LUSTROUS_ORB: 0x0077,
  GREET_MAIL: 0x0078,
  FAVORED_MAIL: 0x0079,
  RSVP_MAIL: 0x007A,
  THANKS_MAIL: 0x007B,
  INQUIRY_MAIL: 0x007C,
  LIKE_MAIL: 0x007D,
  REPLY_MAIL: 0x007E,
  BRIDGE_MAIL_S: 0x007F,
  BRIDGE_MAIL_D: 0x0080,
  BRIDGE_MAIL_T: 0x0081,
  BRIDGE_MAIL_V: 0x0082,
  BRIDGE_MAIL_M: 0x0083,
  CHERI_BERRY: 0x0084,
  CHESTO_BERRY: 0x0085,
  PECHA_BERRY: 0x0086,
  RAWST_BERRY: 0x0087,
  ASPEAR_BERRY: 0x0088,
  LEPPA_BERRY: 0x0089,
  ORAN_BERRY: 0x008A,
  PERSIM_BERRY: 0x008B,
  LUM_BERRY: 0x008C,
  SITRUS_BERRY: 0x008D,
  FIGY_BERRY: 0x008E,
  WIKI_BERRY: 0x008F,
  MAGO_BERRY: 0x0090,
  AGUAV_BERRY: 0x0091,
  IAPAPA_BERRY: 0x0092,
  RAZZ_BERRY: 0x0093,
  BLUK_BERRY: 0x0094,
  NANAB_BERRY: 0x0095,
  WEPEAR_BERRY: 0x0096,
  PINAP_BERRY: 0x0097,
  POMEG_BERRY: 0x0098,
  KELPSY_BERRY: 0x0099,
  QUALOT_BERRY: 0x009A,
  HONDEW_BERRY: 0x009B,
  GREPA_BERRY: 0x009C,
  TAMATO_BERRY: 0x009D,
  CORNN_BERRY: 0x009E,
  MAGOST_BERRY: 0x009F,
  RABUTA_BERRY: 0x00A0,
  NOMEL_BERRY: 0x00A1,
  SPELON_BERRY: 0x00A2,
  PAMTRE_BERRY: 0x00A3,
  WATMEL_BERRY: 0x00A4,
  DURIN_BERRY: 0x00A5,
  BELUE_BERRY: 0x00A6,
  OCCA_BERRY: 0x00A7,
  PASSHO_BERRY: 0x00A8,
  WACAN_BERRY: 0x00A9,
  RINDO_BERRY: 0x00AA,
  YACHE_BERRY: 0x00AB,
  CHOPLE_BERRY: 0x00AC,
  KEBIA_BERRY: 0x00AD,
  SHUCA_BERRY: 0x00AE,
  COBA_BERRY: 0x00AF,
  PAYAPA_BERRY: 0x00B0,
  TANGA_BERRY: 0x00B1,
  CHARTI_BERRY: 0x00B2,
  KASIB_BERRY: 0x00B3,
  HABAN_BERRY: 0x00B4,
  COLBUR_BERRY: 0x00B5,
  BABIRI_BERRY: 0x00B6,
  CHILAN_BERRY: 0x00B7,
  LIECHI_BERRY: 0x00B8,
  GANLON_BERRY: 0x00B9,
  SALAC_BERRY: 0x00BA,
  PETAYA_BERRY: 0x00BB,
  APICOT_BERRY: 0x00BC,
  LANSAT_BERRY: 0x00BD,
  STARF_BERRY: 0x00BE,
  ENIGMA_BERRY: 0x00BF,
  MICLE_BERRY: 0x00C0,
  CUSTAP_BERRY: 0x00C1,
  JABOCA_BERRY: 0x00C2,
  ROWAP_BERRY: 0x00C3,
  BRIGHT_POWDER: 0x00C4,
  WHITE_HERB: 0x00C5,
  MACHO_BRACE: 0x00C6,
  EXP_SHARE: 0x00C7,
  QUICK_CLAW: 0x00C8,
  SOOTHE_BELL: 0x00C9,
  MENTAL_HERB: 0x00CA,
  CHOICE_BAND: 0x00CB,
  KINGS_ROCK: 0x00CC,
  SILVER_POWDER: 0x00CD,
  AMULET_COIN: 0x00CE,
  CLEANSE_TAG: 0x00CF,
  SOUL_DEW: 0x00D0,
  DEEP_SEA_TOOTH: 0x00D1,
  DEEP_SEA_SCALE: 0x00D2,
  SMOKE_BALL: 0x00D3,
  EVERSTONE: 0x00D4,
  FOCUS_BAND: 0x00D5,
  LUCKY_EGG: 0x00D6,
  SCOPE_LENS: 0x00D7,
  METAL_COAT: 0x00D8,
  LEFTOVERS: 0x00D9,
  DRAGON_SCALE: 0x00DA,
  LIGHT_BALL: 0x00DB,
  SOFT_SAND: 0x00DC,
  HARD_STONE: 0x00DD,
  MIRACLE_SEED: 0x00DE,
  BLACK_GLASSES: 0x00DF,
  BLACK_BELT: 0x00E0,
  MAGNET: 0x00E1,
  MYSTIC_WATER: 0x00E2,
  SHARP_BEAK: 0x00E3,
  POISON_BARB: 0x00E4,
  NEVER_MELT_ICE: 0x00E5,
  SPELL_TAG: 0x00E6,
  TWISTED_SPOON: 0x00E7,
  CHARCOAL: 0x00E8,
  DRAGON_FANG: 0x00E9,
  SILK_SCARF: 0x00EA,
  UP_GRADE: 0x00EB,
  SHELL_BELL: 0x00EC,
  SEA_INCENSE: 0x00ED,
  LAX_INCENSE: 0x00EE,
  LUCKY_PUNCH: 0x00EF,
  METAL_POWDER: 0x00F0,
  THICK_CLUB: 0x00F1,
  STICK: 0x00F2,
  RED_SCARF: 0x00F3,
  BLUE_SCARF: 0x00F4,
  PINK_SCARF: 0x00F5,
  GREEN_SCARF: 0x00F6,
  YELLOW_SCARF: 0x00F7,
  WIDE_LENS: 0x00F8,
  MUSCLE_BAND: 0x00F9,
  WISE_GLASSES: 0x00FA,
  EXPERT_BELT: 0x00FB,
  LIGHT_CLAY: 0x00FC,
  LIFE_ORB: 0x00FD,
  POWER_HERB: 0x00FE,
  TOXIC_ORB: 0x00FF,
  FLAME_ORB: 0x0100,
  QUICK_POWDER: 0x0101,
  FOCUS_SASH: 0x0102,
  ZOOM_LENS: 0x0103,
  METRONOME: 0x0104,
  IRON_BALL: 0x0105,
  LAGGING_TAIL: 0x0106,
  DESTINY_KNOT: 0x0107,
  BLACK_SLUDGE: 0x0108,
  ICY_ROCK: 0x0109,
  SMOOTH_ROCK: 0x010A,
  HEAT_ROCK: 0x010B,
  DAMP_ROCK: 0x010C,
  GRIP_CLAW: 0x010D,
  CHOICE_SCARF: 0x010E,
  STICKY_BARB: 0x010F,
  POWER_BRACER: 0x0110,
  POWER_BELT: 0x0111,
  POWER_LENS: 0x0112,
  POWER_BAND: 0x0113,
  POWER_ANKLET: 0x0114,
  POWER_WEIGHT: 0x0115,
  SHED_SHELL: 0x0116,
  BIG_ROOT: 0x0117,
  CHOICE_SPECS: 0x0118,
  FLAME_PLATE: 0x0119,
  SPLASH_PLATE: 0x011A,
  ZAP_PLATE: 0x011B,
  MEADOW_PLATE: 0x011C,
  ICICLE_PLATE: 0x011D,
  FIST_PLATE: 0x011E,
  TOXIC_PLATE: 0x011F,
  EARTH_PLATE: 0x0120,
  SKY_PLATE: 0x0121,
  MIND_PLATE: 0x0122,
  INSECT_PLATE: 0x0123,
  STONE_PLATE: 0x0124,
  SPOOKY_PLATE: 0x0125,
  DRACO_PLATE: 0x0126,
  DREAD_PLATE: 0x0127,
  IRON_PLATE: 0x0128,
  ODD_INCENSE: 0x0129,
  ROCK_INCENSE: 0x012A,
  FULL_INCENSE: 0x012B,
  WAVE_INCENSE: 0x012C,
  ROSE_INCENSE: 0x012D,
  LUCK_INCENSE: 0x012E,
  PURE_INCENSE: 0x012F,
  PROTECTOR: 0x0130,
  ELECTIRIZER: 0x0131,
  MAGMARIZER: 0x0132,
  DUBIOUS_DISC: 0x0133,
  REAPER_CLOTH: 0x0134,
  RAZOR_CLAW: 0x0135,
  RAZOR_FANG: 0x0136,
  TM01: 0x0137,
  TM02: 0x0138,
  TM03: 0x0139,
  TM04: 0x013A,
  TM05: 0x013B,
  TM06: 0x013C,
  TM07: 0x013D,
  TM08: 0x013E,
  TM09: 0x013F,
  TM10: 0x0140,
  TM11: 0x0141,
  TM12: 0x0142,
  TM13: 0x0143,
  TM14: 0x0144,
  TM15: 0x0145,
  TM16: 0x0146,
  TM17: 0x0147,
  TM18: 0x0148,
  TM19: 0x0149,
  TM20: 0x014A,
  TM21: 0x014B,
  TM22: 0x014C,
  TM23: 0x014D,
  TM24: 0x014E,
  TM25: 0x014F,
  TM26: 0x0150,
  TM27: 0x0151,
  TM28: 0x0152,
  TM29: 0x0153,
  TM30: 0x0154,
  TM31: 0x0155,
  TM32: 0x0156,
  TM33: 0x0157,
  TM34: 0x0158,
  TM35: 0x0159,
  TM36: 0x015A,
  TM37: 0x015B,
  TM38: 0x015C,
  TM39: 0x015D,
  TM40: 0x015E,
  TM41: 0x015F,
  TM42: 0x0160,
  TM43: 0x0161,
  TM44: 0x0162,
  TM45: 0x0163,
  TM46: 0x0164,
  TM47: 0x0165,
  TM48: 0x0166,
  TM49: 0x0167,
  TM50: 0x0168,
  TM51: 0x0169,
  TM52: 0x016A,
  TM53: 0x016B,
  TM54: 0x016C,
  TM55: 0x016D,
  TM56: 0x016E,
  TM57: 0x016F,
  TM58: 0x0170,
  TM59: 0x0171,
  TM60: 0x0172,
  TM61: 0x0173,
  TM62: 0x0174,
  TM63: 0x0175,
  TM64: 0x0176,
  TM65: 0x0177,
  TM66: 0x0178,
  TM67: 0x0179,
  TM68: 0x017A,
  TM69: 0x017B,
  TM70: 0x017C,
  TM71: 0x017D,
  TM72: 0x017E,
  TM73: 0x017F,
  TM74: 0x0180,
  TM75: 0x0181,
  TM76: 0x0182,
  TM77: 0x0183,
  TM78: 0x0184,
  TM79: 0x0185,
  TM80: 0x0186,
  TM81: 0x0187,
  TM82: 0x0188,
  TM83: 0x0189,
  TM84: 0x018A,
  TM85: 0x018B,
  TM86: 0x018C,
  TM87: 0x018D,
  TM88: 0x018E,
  TM89: 0x018F,
  TM90: 0x0190,
  TM91: 0x0191,
  TM92: 0x0192,
  HM01: 0x0193,
  HM02: 0x0194,
  HM03: 0x0195,
  HM04: 0x0196,
  HM05: 0x0197,
  HM06: 0x0198,
  EXPLORER_KIT: 0x0199,
  LOOT_SACK: 0x019A,
  RULE_BOOK: 0x019B,
  POKE_RADAR: 0x019C,
  POINT_CARD: 0x019D,
  JOURNAL: 0x019E,
  SEAL_CASE: 0x019F,
  FASHION_CASE: 0x01A0,
  SEAL_BAG: 0x01A1,
  PAL_PAD: 0x01A2,
  WORKS_KEY: 0x01A3,
  OLD_CHARM: 0x01A4,
  GALACTIC_KEY: 0x01A5,
  RED_CHAIN: 0x01A6,
  TOWN_MAP: 0x01A7,
  VS_SEEKER: 0x01A8,
  COIN_CASE: 0x01A9,
  OLD_ROD: 0x01AA,
  GOOD_ROD: 0x01AB,
  SUPER_ROD: 0x01AC,
  SPRAYDUCK: 0x01AD,
  POFFIN_CASE: 0x01AE,
  SUITE_KEY: 0x01AF,
  OAKS_LETTER: 0x01B0,
  LUNAR_WING: 0x01B1,
  MEMBER_CARD: 0x01B2,
  AZURE_FLUTE: 0x01B3,
  CONTEST_PASS: 0x01B4,
  MAGMA_STONE: 0x01B5,
  PARCEL: 0x01B6,
  COUPON_1: 0x01B7,
  COUPON_2: 0x01B8,
  COUPON_3: 0x01B9,
  STORAGE_KEY: 0x01BA,
  SECRET_POTION: 0x01BB,
  VS_RECORDER: 0x01BC,
  GRACIDEA: 0x01BD,
  SECRET_KEY: 0x01BE,
  APRICORN_BOX: 0x01BF,
  UNOWN_REPORT: 0x01C0,
  BERRY_POTS: 0x01C1,
  DOWSING_MACHINE: 0x01C2,
  BLUE_CARD: 0x01C3,
  SLOWPOKE_TAIL: 0x01C4,
  CLEAR_BELL: 0x01C5,
  CARD_KEY: 0x01C6,
  BASEMENT_KEY: 0x01C7,
  SQUIRT_BOTTLE: 0x01C8,
  RED_SCALE: 0x01C9,
  LOST_ITEM: 0x01CA,
  PASS: 0x01CB,
  MACHINE_PART: 0x01CC,
  SILVER_WING: 0x01CD,
  RAINBOW_WING: 0x01CE,
  MYSTERY_EGG: 0x01CF,
  RED_APRICORN: 0x01D0,
  BLUE_APRICORN: 0x01D1,
  YELLOW_APRICORN: 0x01D2,
  GREEN_APRICORN: 0x01D3,
  PINK_APRICORN: 0x01D4,
  WHITE_APRICORN: 0x01D5,
  BLACK_APRICORN: 0x01D6,
  FAST_BALL: 0x01D7,
  LEVEL_BALL: 0x01D8,
  LURE_BALL: 0x01D9,
  HEAVY_BALL: 0x01DA,
  LOVE_BALL: 0x01DB,
  FRIEND_BALL: 0x01DC,
  MOON_BALL: 0x01DD,
  SPORT_BALL: 0x01DE,
  PARK_BALL: 0x01DF,
  PHOTO_ALBUM: 0x01E0,
  GB_SOUNDS: 0x01E1,
  TIDAL_BELL: 0x01E2,
  RAGE_CANDY_BAR: 0x01E3,
  DATA_CARD_01: 0x01E4,
  DATA_CARD_02: 0x01E5,
  DATA_CARD_03: 0x01E6,
  DATA_CARD_04: 0x01E7,
  DATA_CARD_05: 0x01E8,
  DATA_CARD_06: 0x01E9,
  DATA_CARD_07: 0x01EA,
  DATA_CARD_08: 0x01EB,
  DATA_CARD_09: 0x01EC,
  DATA_CARD_10: 0x01ED,
  DATA_CARD_11: 0x01EE,
  DATA_CARD_12: 0x01EF,
  DATA_CARD_13: 0x01F0,
  DATA_CARD_14: 0x01F1,
  DATA_CARD_15: 0x01F2,
  DATA_CARD_16: 0x01F3,
  DATA_CARD_17: 0x01F4,
  DATA_CARD_18: 0x01F5,
  DATA_CARD_19: 0x01F6,
  DATA_CARD_20: 0x01F7,
  DATA_CARD_21: 0x01F8,
  DATA_CARD_22: 0x01F9,
  DATA_CARD_23: 0x01FA,
  DATA_CARD_24: 0x01FB,
  DATA_CARD_25: 0x01FC,
  DATA_CARD_26: 0x01FD,
  DATA_CARD_27: 0x01FE,
  JADE_ORB: 0x01FF,
  LOCK_CAPSULE: 0x0200,
  RED_ORB: 0x0201,
  BLUE_ORB: 0x0202,
  ENIGMA_STONE: 0x0203,
  PRISM_SCALE: 0x0204,
  EVIOLITE: 0x0205,
  FLOAT_STONE: 0x0206,
  ROCKY_HELMET: 0x0207,
  AIR_BALLOON: 0x0208,
  RED_CARD: 0x0209,
  RING_TARGET: 0x020A,
  BINDING_BAND: 0x020B,
  ABSORB_BULB: 0x020C,
  CELL_BATTERY: 0x020D,
  EJECT_BUTTON: 0x020E,
  FIRE_GEM: 0x020F,
  WATER_GEM: 0x0210,
  ELECTRIC_GEM: 0x0211,
  GRASS_GEM: 0x0212,
  ICE_GEM: 0x0213,
  FIGHTING_GEM: 0x0214,
  POISON_GEM: 0x0215,
  GROUND_GEM: 0x0216,
  FLYING_GEM: 0x0217,
  PSYCHIC_GEM: 0x0218,
  BUG_GEM: 0x0219,
  ROCK_GEM: 0x021A,
  GHOST_GEM: 0x021B,
  DRAGON_GEM: 0x021C,
  DARK_GEM: 0x021D,
  STEEL_GEM: 0x021E,
  NORMAL_GEM: 0x021F,
  HEALTH_WING: 0x0220,
  MUSCLE_WING: 0x0221,
  RESIST_WING: 0x0222,
  GENIUS_WING: 0x0223,
  CLEVER_WING: 0x0224,
  SWIFT_WING: 0x0225,
  PRETTY_WING: 0x0226,
  COVER_FOSSIL: 0x0227,
  PLUME_FOSSIL: 0x0228,
  LIBERTY_PASS: 0x0229,
  PASS_ORB: 0x022A,
  DREAM_BALL: 0x022B,
  POKE_TOY: 0x022C,
  PROP_CASE: 0x022D,
  DRAGON_SKULL: 0x022E,
  BALM_MUSHROOM: 0x022F,
  BIG_NUGGET: 0x0230,
  PEARL_STRING: 0x0231,
  COMET_SHARD: 0x0232,
  RELIC_COPPER: 0x0233,
  RELIC_SILVER: 0x0234,
  RELIC_GOLD: 0x0235,
  RELIC_VASE: 0x0236,
  RELIC_BAND: 0x0237,
  RELIC_STATUE: 0x0238,
  RELIC_CROWN: 0x0239,
  CASTELIACONE: 0x023A,
  DIRE_HIT_2: 0x023B,
  X_SPEED_2: 0x023C,
  X_SP_ATK_2: 0x023D,
  X_SP_DEF_2: 0x023E,
  X_DEFENSE_2: 0x023F,
  X_ATTACK_2: 0x0240,
  X_ACCURACY_2: 0x0241,
  X_SPEED_3: 0x0242,
  X_SP_ATK_3: 0x0243,
  X_SP_DEF_3: 0x0244,
  X_DEFENSE_3: 0x0245,
  X_ATTACK_3: 0x0246,
  X_ACCURACY_3: 0x0247,
  X_SPEED_6: 0x0248,
  X_SP_ATK_6: 0x0249,
  X_SP_DEF_6: 0x024A,
  X_DEFENSE_6: 0x024B,
  X_ATTACK_6: 0x024C,
  X_ACCURACY_6: 0x024D,
  ABILITY_URGE: 0x024E,
  ITEM_DROP: 0x024F,
  ITEM_URGE: 0x0250,
  RESET_URGE: 0x0251,
  DIRE_HIT_3: 0x0252,
  LIGHT_STONE: 0x0253,
  DARK_STONE: 0x0254,
  TM93: 0x0255,
  TM94: 0x0256,
  TM95: 0x0257,
  XTRANSCEIVER: 0x0258,
  GRAM_1: 0x0259,
  GRAM_2: 0x025A,
  GRAM_3: 0x025B,
  MEDAL_BOX: 0x025C,
  DNA_SPLICERS: 0x025D,
  PERMIT: 0x025E,
  OVAL_CHARM: 0x025F,
  SHINY_CHARM: 0x0260,
  PLASMA_CARD: 0x0261,
  GRUBBY_HANKY: 0x0262,
  COLRESS_MACHINE: 0x0263,
  DROPPED_ITEM: 0x0264,
  REVEAL_GLASS: 0x0265,
  WEAKNESS_POLICY: 0x0266,
  ASSAULT_VEST: 0x0267,
  HOLO_CASTER: 0x0268,
  PROFS_LETTER: 0x0269,
  ROLLER_SKATES: 0x026A,
  PIXIE_PLATE: 0x026B,
  ABILITY_CAPSULE: 0x026C,
  WHIPPED_DREAM: 0x026D,
  SACHET: 0x026E,
  LUMINOUS_MOSS: 0x026F,
  SNOWBALL: 0x0270,
  SAFETY_GOGGLES: 0x0271,
  POKE_FLUTE: 0x0272,
  RICH_MULCH: 0x0273,
  SURPRISE_MULCH: 0x0274,
  BOOST_MULCH: 0x0275,
  AMAZE_MULCH: 0x0276,
  GENGARITE: 0x0277,
  GARDEVOIRITE: 0x0278,
  AMPHAROSITE: 0x0279,
  VENUSAURITE: 0x027A,
  CHARIZARDITE_X: 0x027B,
  BLASTOISINITE: 0x027C,
  MEWTWONITE_X: 0x027D,
  MEWTWONITE_Y: 0x027E,
  BLAZIKENITE: 0x027F,
  MEDICHAMITE: 0x0280,
  HOUNDOOMINITE: 0x0281,
  AGGRONITE: 0x0282,
  BANETTITE: 0x0283,
  TYRANITARITE: 0x0284,
  SCIZORITE: 0x0285,
  PINSIRITE: 0x0286,
  AERODACTYLITE: 0x0287,
  LUCARIONITE: 0x0288,
  ABOMASITE: 0x0289,
  KANGASKHANITE: 0x028A,
  GYARADOSITE: 0x028B,
  ABSOLITE: 0x028C,
  CHARIZARDITE_Y: 0x028D,
  ALAKAZITE: 0x028E,
  HERACRONITE: 0x028F,
  MAWILITE: 0x0290,
  MANECTITE: 0x0291,
  GARCHOMPITE: 0x0292,
  LATIASITE: 0x0293,
  LATIOSITE: 0x0294,
  ROSELI_BERRY: 0x0295,
  KEE_BERRY: 0x0296,
  MARANGA_BERRY: 0x0297,
  SPRINKLOTAD: 0x0298,
  TM96: 0x0299,
  TM97: 0x029A,
  TM98: 0x029B,
  TM99: 0x029C,
  TM100: 0x029D,
  POWER_PLANT_PASS: 0x029E,
  MEGA_RING: 0x029F,
  INTRIGUING_STONE: 0x02A0,
  COMMON_STONE: 0x02A1,
  DISCOUNT_COUPON: 0x02A2,
  ELEVATOR_KEY: 0x02A3,
  TMV_PASS: 0x02A4,
  HONOR_OF_KALOS: 0x02A5,
  ADVENTURE_RULES: 0x02A6,
  STRANGE_SOUVENIR: 0x02A7,
  LENS_CASE: 0x02A8,
  MAKEUP_BAG: 0x02A9,
  TRAVEL_TRUNK: 0x02AA,
  LUMIOSE_GALETTE: 0x02AB,
  SHALOUR_SABLE: 0x02AC,
  JAW_FOSSIL: 0x02AD,
  SAIL_FOSSIL: 0x02AE,
  LOOKER_TICKET: 0x02AF,
  BIKE: 0x02B0,
  FAIRY_GEM: 0x02B1,
  MEGA_CHARM: 0x02B2,
  MEGA_GLOVE: 0x02B3,
  MACH_BIKE: 0x02B4,
  ACRO_BIKE: 0x02B5,
  WAILMER_PAIL: 0x02B6,
  DEVON_PARTS: 0x02B7,
  SOOT_SACK: 0x02B8,
  POKEBLOCK_KIT: 0x02B9,
  LETTER: 0x02BA,
  EON_TICKET: 0x02BB,
  SCANNER: 0x02BC,
  GO_GOGGLES: 0x02BD,
  METEORITE: 0x02BE,
  KEY_TO_ROOM_1: 0x02BF,
  KEY_TO_ROOM_2: 0x02C0,
  KEY_TO_ROOM_4: 0x02C1,
  KEY_TO_ROOM_6: 0x02C2,
  DEVON_SCOPE: 0x02C3,
  SS_TICKET: 0x02C4,
  HM07: 0x02C5,
  DEVON_SCUBA_GEAR: 0x02C6,
  CONTEST_COSTUME: 0x02C7,
  MAGMA_SUIT: 0x02C8,
  AQUA_SUIT: 0x02C9,
  PAIR_OF_TICKETS: 0x02CA,
  MEGA_BRACELET: 0x02CB,
  MEGA_PENDANT: 0x02CC,
  MEGA_GLASSES: 0x02CD,
  MEGA_ANCHOR: 0x02CE,
  MEGA_STICKPIN: 0x02CF,
  MEGA_TIARA: 0x02D0,
  MEGA_ANKLET: 0x02D1,
  SWAMPERTITE: 0x02D2,
  SCEPTILITE: 0x02D3,
  SABLENITE: 0x02D4,
  ALTARIANITE: 0x02D5,
  GALLADITE: 0x02D6,
  AUDINITE: 0x02D7,
  METAGROSSITE: 0x02D8,
  SHARPEDONITE: 0x02D9,
  SLOWBRONITE: 0x02DA,
  STEELIXITE: 0x02DB,
  PIDGEOTITE: 0x02DC,
  GLALITITE: 0x02DD,
  DIANCITE: 0x02DE,
  PRISON_BOTTLE: 0x02DF,
  MEGA_CUFF: 0x02E0,
  CAMERUPTITE: 0x02E1,
  LOPUNNITE: 0x02E2,
  SALAMENCITE: 0x02E3,
  BEEDRILLITE: 0x02E4,
  KEY_STONE: 0x02E5,
  METEORITE_SHARD: 0x02E6,
  EON_FLUTE: 0x02E7,
  NORMALIUM_Z: 0x02E8,
  FIRIUM_Z: 0x02E9,
  WATERIUM_Z: 0x02EA,
  ELECTRIUM_Z: 0x02EB,
  GRASSIUM_Z: 0x02EC,
  ICIUM_Z: 0x02ED,
  FIGHTINIUM_Z: 0x02EE,
  POISONIUM_Z: 0x02EF,
  GROUNDIUM_Z: 0x02F0,
  FLYINIUM_Z: 0x02F1,
  PSYCHIUM_Z: 0x02F2,
  BUGINIUM_Z: 0x02F3,
  ROCKIUM_Z: 0x02F4,
  GHOSTIUM_Z: 0x02F5,
  DRAGONIUM_Z: 0x02F6,
  DARKINIUM_Z: 0x02F7,
  STEELIUM_Z: 0x02F8,
  FAIRIUM_Z: 0x02F9,
  PIKANIUM_Z: 0x02FA,
  BOTTLE_CAP: 0x02FB,
  GOLD_BOTTLE_CAP: 0x02FC,
  Z_RING: 0x02FD,
  DECIDIUM_Z: 0x02FE,
  INCINIUM_Z: 0x02FF,
  PRIMARIUM_Z: 0x0300,
  TAPUNIUM_Z: 0x0301,
  MARSHADIUM_Z: 0x0302,
  ALORAICHIUM_Z: 0x0303,
  SNORLIUM_Z: 0x0304,
  EEVIUM_Z: 0x0305,
  MEWNIUM_Z: 0x0306,
  PIKASHUNIUM_Z: 0x0307,
  FORAGE_BAG: 0x0308,
  FISHING_ROD: 0x0309,
  PROFESSORS_MASK: 0x030A,
  FESTIVAL_TICKET: 0x030B,
  SPARKLING_STONE: 0x030C,
  ADRENALINE_ORB: 0x030D,
  ZYGARDE_CUBE: 0x030E,
  ICE_STONE: 0x030F,
  RIDE_PAGER: 0x0310,
  BEAST_BALL: 0x0311,
  BIG_MALASADA: 0x0312,
  RED_NECTAR: 0x0313,
  YELLOW_NECTAR: 0x0314,
  PINK_NECTAR: 0x0315,
  PURPLE_NECTAR: 0x0316,
  SUN_FLUTE: 0x0317,
  MOON_FLUTE: 0x0318,
  ENIGMATIC_CARD: 0x0319,
  TERRAIN_EXTENDER: 0x031A,
  PROTECTIVE_PADS: 0x031B,
  ELECTRIC_SEED: 0x031C,
  PSYCHIC_SEED: 0x031D,
  MISTY_SEED: 0x031E,
  GRASSY_SEED: 0x031F,
  FIGHTING_MEMORY: 0x0320,
  FLYING_MEMORY: 0x0321,
  POISON_MEMORY: 0x0322,
  GROUND_MEMORY: 0x0323,
  ROCK_MEMORY: 0x0324,
  BUG_MEMORY: 0x0325,
  GHOST_MEMORY: 0x0326,
  STEEL_MEMORY: 0x0327,
  FIRE_MEMORY: 0x0328,
  WATER_MEMORY: 0x0329,
  GRASS_MEMORY: 0x032A,
  ELECTRIC_MEMORY: 0x032B,
  PSYCHIC_MEMORY: 0x032C,
  ICE_MEMORY: 0x032D,
  DRAGON_MEMORY: 0x032E,
  DARK_MEMORY: 0x032F,
  FAIRY_MEMORY: 0x0330,
  SOLGANIUM_Z: 0x0331,
  LUNALIUM_Z: 0x0332,
  ULTRANECROZIUM_Z: 0x0333,
  MIMIKIUM_Z: 0x0334,
  LYCANIUM_Z: 0x0335,
  KOMMONIUM_Z: 0x0336,
  Z_POWER_RING: 0x0337,
  PINK_PETAL: 0x0338,
  ORANGE_PETAL: 0x0339,
  BLUE_PETAL: 0x033A,
  RED_PETAL: 0x033B,
  GREEN_PETAL: 0x033C,
  YELLOW_PETAL: 0x033D,
  PURPLE_PETAL: 0x033E,
  RAINBOW_FLOWER: 0x033F,
  SURGE_BADGE: 0x0340,
  N_SOLARIZER: 0x0341,
  N_LUNARIZER: 0x0342,
  ILIMAS_NORMALIUM_Z: 0x0343,
  LEFT_POKE_BALL: 0x0344,
  ROTO_HATCH: 0x0345,
  ROTO_BARGAIN: 0x0346,
  ROTO_PRIZE_MONEY: 0x0347,
  ROTO_EXP_POINTS: 0x0348,
  ROTO_FRIENDSHIP: 0x0349,
  ROTO_ENCOUNTER: 0x034A,
  ROTO_STEALTH: 0x034B,
  ROTO_HP_RESTORE: 0x034C,
  ROTO_PP_RESTORE: 0x034D,
  ROTO_BOOST: 0x034D,
  ROTO_CATCH: 0x034E
};

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default ITEM;