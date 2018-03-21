////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
import NATURE from "./nature";

/**
 * Enum for moves
 * @readonly
 * @enum {int}
 */
const MOVE = {
  UNKNOWN: 0x0000,
  POUND: 0x0001,
  KARATE_CHOP: 0x0002,
  DOUBLE_SLAP: 0x0003,
  COMET_PUNCH: 0x0004,
  MEGA_PUNCH: 0x0005,
  PAY_DAY: 0x0006,
  FIRE_PUNCH: 0x007,
  ICE_PUNCH: 0x0008,
  THUNDER_PUNCH: 0x0009,
  SCRATCH: 0x000A,
  VICE_GRIP: 0x000B,
  GUILLOTINE: 0x000C,
  RAZOR_WIND: 0x000D,
  SWORDS_DANCE: 0x000E,
  CUT: 0x000F,
  GUST: 0x0010,
  WING_ATTACK: 0x0011,
  WHIRLWIND: 0x0012,
  FLY: 0x0013,
  BIND: 0x0014,
  SLAM: 0x0015,
  VINE_WHIP: 0x0016,
  STOMP: 0x0017,
  DOUBLE_KICK: 0x0018,
  MEGA_KICK: 0x0019,
  JUMP_KICK: 0x001A,
  ROLLING_KICK: 0x001B,
  SAND_ATTACK: 0x001C,
  HEADBUTT: 0x001D,
  HORN_ATTACK: 0x001E,
  FURY_ATTACK: 0x001F,
  HORN_DRILL: 0x0020,
  TACKLE: 0x0021,
  BODY_SLAM: 0x0022,
  WRAP: 0x023,
  TAKE_DOWN: 0x0024,
  THRASH: 0x0025,
  DOUBLE_EDGE: 0x026,
  TAIL_WHIP: 0x027,
  POISON_STING: 0x028,
  TWINEEDLE: 0x029,
  PIN_MISSILE: 0x02A,
  LEER: 0x02B,
  BITE: 0x02C,
  GROWL: 0x02D,
  ROAR: 0x02E,
  SING: 0x02F,
  SUPERSONIC: 0x030,
  SONIC_BOOM: 0x031,
  DISABLE: 0x032,
  ACID: 0x033,
  EMBER: 0x034,
  FLAMETHROWER: 0x035,
  MIST: 0x036,
  WATER_GUN: 0x037,
  HYDRO_PUMP: 0x038,
  SURF: 0x039,
  ICE_BEAM: 0x03A,
  BLIZZARD: 0x03B,
  PSYBEAM: 0x03C,
  BUBBLE_BEAM: 0x03D,
  AURORA_BEAM: 0x03E,
  HYPER_BEAM: 0x03F,
  PECK: 0x040,
  DRILL_PECK: 0x041,
  SUBMISSION: 0x042,
  LOW_KICK: 0x043,
  COUNTER: 0x044,
  SEISMIC_TOSS: 0x045,
  STRENGTH: 0x046,
  ABSORB: 0x047,
  MEGA_DRAIN: 0x048,
  LEECH_SEED: 0x049,
  GROWTH: 0x04A,
  RAZOR_LEAF: 0x04B,
  SOLAR_BEAM: 0x04C,
  POISON_POWDER: 0x04D,
  STUN_SPORE: 0x04E,
  SLEEP_POWDER: 0x04F,
  PETAL_DANCE: 0x050,
  STRING_SHOT: 0x051,
  DRAGON_RAGE: 0x052,
  FIRE_SPIN: 0x053,
  THUNDER_SHOCK: 0x054,
  THUNDERBOLT: 0x055,
  THUNDER_WAVE: 0x056,
  THUNDER: 0x057,
  ROCK_THROW: 0x058,
  EARTHQUAKE: 0x059,
  FISSURE: 0x05A,
  DIG: 0x05B,
  TOXIC: 0x05C,
  CONFUSION: 0x05D,
  PSYCHIC: 0x05E,
  HYPNOSIS: 0x05F,
  MEDITATE: 0x060,
  AGILITY: 0x061,
  QUICK_ATTACK: 0x062,
  RAGE: 0x063,
  TELEPORT: 0x064,
  NIGHT_SHADE: 0x065,
  MIMIC: 0x066,
  SCREECH: 0x067,
  DOUBLE_TEAM: 0x068,
  RECOVER: 0x069,
  HARDEN: 0x06A,
  MINIMIZE: 0x06B,
  SMOKESCREEN: 0x06C,
  CONFUSE_RAY: 0x06D,
  WITHDRAW: 0x06E,
  DEFENSE_CURL: 0x06F,
  BARRIER: 0x070,
  LIGHT_SCREEN: 0x071,
  HAZE: 0x072,
  REFLECT: 0x073,
  FOCUS_ENERGY: 0x074,
  BIDE: 0x075,
  METRONOME: 0x076,
  MIRROR_MOVE: 0x077,
  SELF_DESTRUCT: 0x078,
  EGG_BOMB: 0x079,
  LICK: 0x07A,
  SMOG: 0x07B,
  SLUDGE: 0x07C,
  BONE_CLUB: 0x07D,
  FIRE_BLAST: 0x07E,
  WATERFALL: 0x07F,
  CLAMP: 0x080,
  SWIFT: 0x081,
  SKULL_BASH: 0x082,
  SPIKE_CANNON: 0x083,
  CONSTRICT: 0x084,
  AMNESIA: 0x085,
  KINESIS: 0x086,
  SOFT_BOILED: 0x087,
  HIGH_JUMP_KICK: 0x088,
  GLARE: 0x089,
  DREAM_EATER: 0x08A,
  POISON_GAS: 0x08B,
  BARRAGE: 0x08C,
  LEECH_LIFE: 0x08D,
  LOVELY_KISS: 0x08E,
  SKY_ATTACK: 0x08F,
  TRANSFORM: 0x090,
  BUBBLE: 0x091,
  DIZZY_PUNCH: 0x092,
  SPORE: 0x093,
  FLASH: 0x094,
  PSYWAVE: 0x095,
  SPLASH: 0x096,
  ACID_ARMOR: 0x097,
  CRABHAMMER: 0x098,
  EXPLOSION: 0x099,
  FURY_SWIPES: 0x09A,
  BONEMERANG: 0x09B,
  REST: 0x09C,
  ROCK_SLIDE: 0x09D,
  HYPER_FANG: 0x09E,
  SHARPEN: 0x09F,
  CONVERSION: 0x0A0,
  TRI_ATTACK: 0x0A1,
  SUPER_FANG: 0x0A2,
  SLASH: 0x0A3,
  SUBSTITUTE: 0x0A4,
  STRUGGLE: 0x0A5,
  SKETCH: 0x0A6,
  TRIPLE_KICK: 0x0A7,
  THIEF: 0x0A8,
  SPIDER_WEB: 0x0A9,
  MIND_READER: 0x0AA,
  NIGHTMARE: 0x0AB,
  FLAME_WHEEL: 0x0AC,
  SNORE: 0x0AD,
  CURSE: 0x0AE,
  FLAIL: 0x0AF,
  CONVERSION_2: 0x0B0,
  AEROBLAST: 0x0B1,
  COTTON_SPORE: 0x0B2,
  REVERSAL: 0x0B3,
  SPITE: 0x0B4,
  POWDER_SNOW: 0x0B5,
  PROTECT: 0x0B6,
  MACH_PUNCH: 0x0B7,
  SCARY_FACE: 0x0B8,
  FEINT_ATTACK: 0x0B9,
  SWEET_KISS: 0x0BA,
  BELLY_DRUM: 0x0BB,
  SLUDGE_BOMB: 0x0BC,
  MUD_SLAP: 0x0BD,
  OCTAZOOKA: 0x0BE,
  SPIKES: 0x0BF,
  ZAP_CANNON: 0x0C0,
  FORESIGHT: 0x0C1,
  DESTINY_BOND: 0x0C2,
  PERISH_SONG: 0x0C3,
  ICY_WIND: 0x0C4,
  DETECT: 0x0C5,
  BONE_RUSH: 0x0C6,
  LOCK_ON: 0x0C7,
  OUTRAGE: 0x0C8,
  SANDSTORM: 0x0C9,
  GIGA_DRAIN: 0x0CA,
  ENDURE: 0x0CB,
  CHARM: 0x0CC,
  ROLLOUT: 0x0CD,
  FALSE_SWIPE: 0x0CE,
  SWAGGER: 0x0CF,
  MILK_DRINK: 0x0D0,
  SPARK: 0x0D1,
  FURY_CUTTER: 0x0D2,
  STEEL_WING: 0x0D3,
  MEAN_LOOK: 0x0D4,
  ATTRACT: 0x0D5,
  SLEEP_TALK: 0x0D6,
  HEAL_BELL: 0x0D7,
  RETURN: 0x0D8,
  PRESENT: 0x0D9,
  FRUSTRATION: 0x0DA,
  SAFEGUARD: 0x0DB,
  PAIN_SPLIT: 0x0DC,
  SACRED_FIRE: 0x0DD,
  MAGNITUDE: 0x0DE,
  DYNAMIC_PUNCH: 0x0DF,
  MEGAHORN: 0x00E0,
  DRAGON_BREATH: 0x00E1,
  BATON_PASS: 0x00E2,
  ENCORE: 0x00E3,
  PURSUIT: 0x00E4,
  RAPID_SPIN: 0x00E5,
  SWEET_SCENT: 0x00E6,
  IRON_TAIL: 0x00E7,
  METAL_CLAW: 0x00E8,
  VITAL_THROW: 0x00E9,
  MORNING_SUN: 0x00EA,
  SYNTHESIS: 0x00EB,
  MOONLIGHT: 0x00EC,
  HIDDEN_POWER: 0x00ED,
  CROSS_CHOP: 0x00EE,
  TWISTER: 0x00EF,
  RAIN_DANCE: 0x00F0,
  SUNNY_DAY: 0x00F1,
  CRUNCH: 0x00F2,
  MIRROR_COAT: 0x00F3,
  PSYCH_UP: 0x00F4,
  EXTREME_SPEED: 0x00F5,
  ANCIENT_POWER: 0x00F6,
  SHADOW_BALL: 0x00F7,
  FUTURE_SIGHT: 0x00F8,
  ROCK_SMASH: 0x00F9,
  WHIRLPOOL: 0x00FA,
  BEAT_UP: 0x00FB,
  FAKE_OUT: 0x0FC,
  UPROAR: 0x00FD,
  STOCKPILE: 0x00FE,
  SPIT_UP: 0x00FF,
  SWALLOW: 0x0100,
  HEAT_WAVE: 0x0101,
  HAIL: 0x0102,
  TORMENT: 0x0103,
  FLATTER: 0x0104,
  WILL_O_WISP: 0x0105,
  MEMENTO: 0x0106,
  FACADE: 0x0107,
  FOCUS_PUNCH: 0x0108,
  SMELLING_SALTS: 0x0109,
  FOLLOW_ME: 0x010A,
  NATURE_POWER: 0x010B,
  CHARGE: 0x010C,
  TAUNT: 0x010D,
  HELPING_HAND: 0x010E,
  TRICK: 0x010F,
  ROLE_PLAY: 0x0110,
  WISH: 0x0111,
  ASSIST: 0x0112,
  INGRAIN: 0x0113,
  SUPERPOWER: 0x0114,
  MAGIC_COAT: 0x0115,
  RECYCLE: 0x0116,
  REVENGE: 0x0117,
  BRICK_BREAK: 0x0118,
  YAWN: 0x0119,
  KNOCK_OFF: 0x011A,
  ENDEAVOR: 0x011B,
  ERUPTION: 0x011C,
  SKILL_SWAP: 0x011D,
  IMPRISON: 0x011E,
  REFRESH: 0x011F,
  GRUDGE: 0x0120,
  SNATCH: 0x0121,
  SECRET_POWER: 0x0122,
  DIVE: 0x0123,
  ARM_THRUST: 0x0124,
  CAMOUFLAGE: 0x0125,
  TAIL_GLOW: 0x0126,
  LUSTER_PURGE: 0x0127,
  MIST_BALL: 0x0128,
  FEATHER_DANCE: 0x0129,
  TEETER_DANCE: 0x012A,
  BLAZE_KICK: 0x012B,
  MUD_SPORT: 0x012C,
  ICE_BALL: 0x012D,
  NEEDLE_ARM: 0x012E,
  SLACK_OFF: 0x012F,
  HYPER_VOICE: 0x0130,
  POISON_FANG: 0x0131,
  CRUSH_CLAW: 0x0132,
  BLAST_BURN: 0x0133,
  HYDRO_CANNON: 0x0134,
  METEOR_MASH: 0x0135,
  ASTONISH: 0x0136,
  WEATHER_BALL: 0x0137,
  AROMATHERAPY: 0x0138,
  FAKE_TEARS: 0x0139,
  AIR_CUTTER: 0x013A,
  OVERHEAT: 0x013B,
  ODOR_SLEUTH: 0x013C,
  ROCK_TOMB: 0x013D,
  SILVER_WIND: 0x013E,
  METAL_SOUND: 0x013F,
  GRASS_WHISTLE: 0x0140,
  TICKLE: 0x0141,
  COSMIC_POWER: 0x0142,
  WATER_SPOUT: 0x0143,
  SIGNAL_BEAM: 0x0144,
  SHADOW_PUNCH: 0x0145,
  EXTRASENSORY: 0x0146,
  SKY_UPPERCUT: 0x0147,
  SAND_TOMB: 0x0148,
  SHEER_COLD: 0x0149,
  MUDDY_WATER: 0x014A,
  BULLET_SEED: 0x014B,
  AERIAL_ACE: 0x014C,
  ICICLE_SPEAR: 0x014D,
  IRON_DEFENSE: 0x014E,
  BLOCK: 0x014F,
  HOWL: 0x0150,
  DRAGON_CLAW: 0x0151,
  FRENZY_PLANT: 0x0152,
  BULK_UP: 0x0153,
  BOUNCE: 0x0154,
  MUD_SHOT: 0x0155,
  POISON_TAIL: 0x0156,
  COVET: 0x0157,
  VOLT_TACKLE: 0x0158,
  MAGICAL_LEAF: 0x0159,
  WATER_SPORT: 0x015A,
  CALM_MIND: 0x015B,
  LEAF_BLADE: 0x015C,
  DRAGON_DANCE: 0x015D,
  ROCK_BLAST: 0x015E,
  SHOCK_WAVE: 0x015F,
  WATER_PULSE: 0x0160,
  DOOM_DESIRE: 0x0161,
  PSYCHO_BOOST: 0x0162,
  ROOST: 0x0163,
  GRAVITY: 0x0164,
  MIRACLE_EYE: 0x0165,
  WAKE_UP_SLAP: 0x0166,
  HAMMER_ARM: 0x0167,
  GYRO_BALL: 0x0168,
  HEALING_WISH: 0x0169,
  BRINE: 0x016A,
  NATURAL_GIFT: 0x016B,
  FEINT: 0x016C,
  PLUCK: 0x016D,
  TAILWIND: 0x016E,
  ACUPRESSURE: 0x016F,
  METAL_BURST: 0x0170,
  U_TURN: 0x0171,
  CLOSE_COMBAT: 0x0172,
  PAYBACK: 0x0173,
  ASSURANCE: 0x0174,
  EMBARGO: 0x0175,
  FLING: 0x0176,
  PSYCHO_SHIFT: 0x0177,
  TRUMP_CARD: 0x0178,
  HEAL_BLOCK: 0x0179,
  WRING_OUT: 0x017A,
  POWER_TRICK: 0x017B,
  GASTRO_ACID: 0x017C,
  LUCKY_CHANT: 0x017D,
  ME_FIRST: 0x017E,
  COPYCAT: 0x017F,
  POWER_SWAP: 0x0180,
  GUARD_SWAP: 0x0181,
  PUNISHMENT: 0x0182,
  LAST_RESORT: 0x0183,
  WORRY_SEED: 0x0184,
  SUCKER_PUNCH: 0x0185,
  TOXIC_SPIKES: 0x0186,
  HEART_SWAP: 0x0187,
  AQUA_RING: 0x0188,
  MAGNET_RISE: 0x0189,
  FLARE_BLITZ: 0x018A,
  FORCE_PALM: 0x018B,
  AURA_SPHERE: 0x018C,
  ROCK_POLISH: 0x018D,
  POISON_JAB: 0x018E,
  DARK_PULSE: 0x018F,
  NIGHT_SLASH: 0x0190,
  AQUA_TAIL: 0x0191,
  SEED_BOMB: 0x0192,
  AIR_SLASH: 0x0193,
  X_SCISSOR: 0x0194,
  BUG_BUZZ: 0x0195,
  DRAGON_PULSE: 0x0196,
  DRAGON_RUSH: 0x0197,
  POWER_GEM: 0x0198,
  DRAIN_PUNCH: 0x0199,
  VACUUM_WAVE: 0x019A,
  FOCUS_BLAST: 0x019B,
  ENERGY_BALL: 0x019C,
  BRAVE_BIRD: 0x019D,
  EARTH_POWER: 0x019E,
  SWITCHEROO: 0x019F,
  GIGA_IMPACT: 0x01A0,
  NASTY_PLOT: 0x01A1,
  BULLET_PUNCH: 0x01A2,
  AVALANCHE: 0x01A3,
  ICE_SHARD: 0x01A4,
  SHADOW_CLAW: 0x01A5,
  THUNDER_FANG: 0x01A6,
  ICE_FANG: 0x01A7,
  FIRE_FANG: 0x01A8,
  SHADOW_SNEAK: 0x01A9,
  MUD_BOMB: 0x01AA,
  PSYCHO_CUT: 0x01AB,
  ZEN_HEADBUTT: 0x01AC,
  MIRROR_SHOT: 0x01AD,
  FLASH_CANNON: 0x01AE,
  ROCK_CLIMB: 0x01AF,
  DEFOG: 0x01B0,
  TRICK_ROOM: 0x01B1,
  DRACO_METEOR: 0x01B2,
  DISCHARGE: 0x01B3,
  LAVA_PLUME: 0x01B4,
  LEAF_STORM: 0x01B5,
  POWER_WHIP: 0x01B6,
  ROCK_WRECKER: 0x01B7,
  CROSS_POISON: 0x01B8,
  GUNK_SHOT: 0x01B9,
  IRON_HEAD: 0x01BA,
  MAGNET_BOMB: 0x01BB,
  STONE_EDGE: 0x01BC,
  CAPTIVATE: 0x01BD,
  STEALTH_ROCK: 0x01BE,
  GRASS_KNOT: 0x01BF,
  CHATTER: 0x01C0,
  JUDGMENT: 0x01C1,
  BUG_BITE: 0x01C2,
  CHARGE_BEAM: 0x01C3,
  WOOD_HAMMER: 0x01C4,
  AQUA_JET: 0x01C5,
  ATTACK_ORDER: 0x01C6,
  DEFEND_ORDER: 0x01C7,
  HEAL_ORDER: 0x01C8,
  HEAD_SMASH: 0x01C9,
  DOUBLE_HIT: 0x01CA,
  ROAR_OF_TIME: 0x01CB,
  SPACIAL_REND: 0x01CC,
  LUNAR_DANCE: 0x01CD,
  CRUSH_GRIP: 0x01CE,
  MAGMA_STORM: 0x01CF,
  DARK_VOID: 0x01D0,
  SEED_FLARE: 0x01D1,
  OMINOUS_WIND: 0x01D2,
  SHADOW_FORCE: 0x01D3,
  HONE_CLAWS: 0x01D4,
  WIDE_GUARD: 0x01D5,
  GUARD_SPLIT: 0x01D6,
  POWER_SPLIT: 0x01D7,
  WONDER_ROOM: 0x01D8,
  PSYSHOCK: 0x01D9,
  VENOSHOCK: 0x01DA,
  AUTOTOMIZE: 0x01DB,
  RAGE_POWDER: 0x01DC,
  TELEKINESIS: 0x01DD,
  MAGIC_ROOM: 0x01DE,
  SMACK_DOWN: 0x01DF,
  STORM_THROW: 0x01E0,
  FLAME_BURST: 0x01E1,
  SLUDGE_WAVE: 0x01E2,
  QUIVER_DANCE: 0x01E3,
  HEAVY_SLAM: 0x01E4,
  SYNCHRONOISE: 0x01E5,
  ELECTRO_BALL: 0x01E6,
  SOAK: 0x01E7,
  FLAME_CHARGE: 0x01E8,
  COIL: 0x01E9,
  LOW_SWEEP: 0x01EA,
  ACID_SPRAY: 0x01EB,
  FOUL_PLAY: 0x01EC,
  SIMPLE_BEAM: 0x01ED,
  ENTRAINMENT: 0x01EE,
  AFTER_YOU: 0x01EF,
  ROUND: 0x01F0,
  ECHOED_VOICE: 0x01F1,
  CHIP_AWAY: 0x01F2,
  CLEAR_SMOG: 0x01F3,
  STORED_POWER: 0x01F4,
  QUICK_GUARD: 0x01F5,
  ALLY_SWITCH: 0x01F6,
  SCALD: 0x01F7,
  SHELL_SMASH: 0x01F8,
  HEAL_PULSE: 0x01F9,
  HEX: 0x01FA,
  SKY_DROP: 0x01FB,
  SHIFT_GEAR: 0x01FC,
  CIRCLE_THROW: 0x01FD,
  INCINERATE: 0x01FE,
  QUASH: 0x01FF,
  ACROBATICS: 0x0200,
  REFLECT_TYPE: 0x0201,
  RETALIATE: 0x0202,
  FINAL_GAMBIT: 0x0203,
  BESTOW: 0x0204,
  INFERNO: 0x0205,
  WATER_PLEDGE: 0x0206,
  FIRE_PLEDGE: 0x0207,
  GRASS_PLEDGE: 0x0208,
  VOLT_SWITCH: 0x0209,
  STRUGGLE_BUG: 0x020A,
  BULLDOZE: 0x020B,
  FROST_BREATH: 0x020C,
  DRAGON_TAIL: 0x020D,
  WORK_UP: 0x020E,
  ELECTROWEB: 0x020F,
  WILD_CHARGE: 0x0210,
  DRILL_RUN: 0x0211,
  DUAL_CHOP: 0x0212,
  HEART_STAMP: 0x0213,
  HORN_LEECH: 0x0214,
  SACRED_SWORD: 0x0215,
  RAZOR_SHELL: 0x0216,
  HEAT_CRASH: 0x0217,
  LEAF_TORNADO: 0x0218,
  STEAMROLLER: 0x0219,
  COTTON_GUARD: 0x021A,
  NIGHT_DAZE: 0x021B,
  PSYSTRIKE: 0x021C,
  TAIL_SLAP: 0x021D,
  HURRICANE: 0x021E,
  HEAD_CHARGE: 0x021F,
  GEAR_GRIND: 0x0220,
  SEARING_SHOT: 0x0221,
  TECHNO_BLAST: 0x0222,
  RELIC_SONG: 0x0223,
  SECRET_SWORD: 0x0224,
  GLACIATE: 0x0225,
  BOLT_STRIKE: 0x0226,
  BLUE_FLARE: 0x0227,
  FIERY_DANCE: 0x0228,
  FREEZE_SHOCK: 0x0229,
  ICE_BURN: 0x022A,
  SNARL: 0x022B,
  ICICLE_CRASH: 0x022C,
  V_CREATE: 0x022D,
  FUSION_FLARE: 0x022E,
  FUSION_BOLT: 0x022F,
  FLYING_PRESS: 0x0230,
  MAT_BLOCK: 0x0231,
  BELCH: 0x0232,
  ROTOTILLER: 0x0233,
  STICKY_WEB: 0x0234,
  FELL_STINGER: 0x0235,
  PHANTOM_FORCE: 0x0236,
  TRICK_OR_TREAT: 0x0237,
  NOBLE_ROAR: 0x0238,
  ION_DELUGE: 0x0239,
  PARABOLIC_CHARGE: 0x023A,
  FORESTS_CURSE: 0x023B,
  PETAL_BLIZZARD: 0x023C,
  FREEZE_DRY: 0x023D,
  DISARMING_VOICE: 0x023E,
  PARTING_SHOT: 0x023F,
  TOPSY_TURVY: 0x0240,
  DRAINING_KISS: 0x0241,
  CRAFTY_SHIELD: 0x0242,
  FLOWER_SHIELD: 0x0243,
  GRASSY_TERRAIN: 0x0244,
  MISTY_TERRAIN: 0x0245,
  ELECTRIFY: 0x0246,
  PLAY_ROUGH: 0x0247,
  FAIRY_WIND: 0x0248,
  MOONBLAST: 0x0249,
  BOOMBURST: 0x024A,
  FAIRY_LOCK: 0x024B,
  KINGS_SHIELD: 0x024C,
  PLAY_NICE: 0x024D,
  CONFIDE: 0x024E,
  DIAMOND_STORM: 0x024F,
  STEAM_ERUPTION: 0x0250,
  HYPERSPACE_HOLE: 0x0251,
  WATER_SHURIKEN: 0x0252,
  MYSTICAL_FIRE: 0x0253,
  SPIKY_SHIELD: 0x0254,
  AROMATIC_MIST: 0x0255,
  EERIE_IMPULSE: 0x0256,
  VENOM_DRENCH: 0x0257,
  POWDER: 0x0258,
  GEOMANCY: 0x0259,
  MAGNETIC_FLUX: 0x025A,
  HAPPY_HOUR: 0x025B,
  ELECTRIC_TERRAIN: 0x025C,
  DAZZLING_GLEAM: 0x025D,
  CELEBRATE: 0x025E,
  HOLD_HANDS: 0x025F,
  BABY_DOLL_EYES: 0x0260,
  NUZZLE: 0x0261,
  HOLD_BACK: 0x0262,
  INFESTATION: 0x0263,
  POWER_UP_PUNCH: 0x0264,
  OBLIVION_WING: 0x0265,
  THOUSAND_ARROWS: 0x0266,
  THOUSAND_WAVES: 0x0267,
  LANDS_WRATH: 0x0268,
  LIGHT_OF_RUIN: 0x0269,
  ORIGIN_PULSE: 0x026A,
  PRECIPICE_BLADES: 0x026B,
  DRAGON_ASCENT: 0x026C,
  HYPERSPACE_FURY: 0x026D,
  BREAKNECK_BLITZ_PHYSICAL: 0x026E,
  BREAKNECK_BLITZ: 0x026F,
  ALL_OUT_PUMMELING: 0x0270,
  SUPERSONIC_SKYSTRIKE: 0x0271,
  ACID_DOWNPOUR: 0x0272,
  TECTONIC_RAGE: 0x0273,
  CONTINENTAL_CRUSH: 0x0274,
  SAVAGE_SPIN_OUT: 0x0275,
  NEVER_ENDING_NIGHTMARE: 0x0276,
  CORKSCREW_CRASH: 0x0277,
  INFERNO_OVERDRIVE: 0x0278,
  HYDRO_VORTEX: 0x0279,
  BLOOM_DOOM: 0x027A,
  GIGAVOLT_HAVOC: 0x027B,
  SHATTERED_PSYCHE: 0x027C,
  SUBZERO_SLAMMER: 0x027D,
  DEVASTATING_DRAKE: 0x027E,
  BLACK_HOLE_ECLIPSE: 0x027F,
  TWINKLE_TACKLE: 0x0280,
  CATASTROPIKA: 0x0281,
  SHORE_UP: 0x0282,
  FIRST_IMPRESSION: 0x0283,
  BANEFUL_BUNKER: 0x0284,
  SPIRIT_SHACKLE: 0x0285,
  DARKEST_LARIAT: 0x0286,
  SPARKLING_ARIA: 0x0287,
  ICE_HAMMER: 0x0288,
  FLORAL_HEALING: 0x0289,
  HIGH_HORSEPOWER: 0x028A,
  STRENGTH_SAP: 0x028B,
  SOLAR_BLADE: 0x028C,
  LEAFAGE: 0x028D,
  SPOTLIGHT: 0x028E,
  TOXIC_THREAD: 0x028F,
  LASER_FOCUS: 0x0290,
  GEAR_UP: 0x0291,
  THROAT_CHOP: 0x0292,
  POLLEN_PUFF: 0x0293,
  ANCHOR_SHOT: 0x0294,
  PSYCHIC_TERRAIN: 0x0295,
  LUNGE: 0x0296,
  FIRE_LASH: 0x0297,
  POWER_TRIP: 0x0298,
  BURN_UP: 0x0299,
  SPEED_SWAP: 0x029A,
  SMART_STRIKE: 0x029B,
  PURIFY: 0x029C,
  REVELATION_DANCE: 0x029D,
  CORE_ENFORCER: 0x029E,
  TROP_KICK: 0x029F,
  INSTRUCT: 0x02A0,
  BEAK_BLAST: 0x02A1,
  CLANGING_SCALES: 0x02A2,
  DRAGON_HAMMER: 0x02A3,
  BRUTAL_SWING: 0x02A4,
  AURORA_VEIL: 0x02A5,
  SINISTER_ARROW_RAID: 0x02A6,
  MALICIOUS_MOONSAULT: 0x02A7,
  OCEANIC_OPERETTA: 0x02A8,
  GUARDIAN_OF_ALOLA: 0x02A9,
  SOUL_STEALING_7_STAR_STRIKE: 0x02AA,
  STOKED_SPARKSURFER: 0x02AB,
  PULVERIZING_PANCAKE: 0x02AC,
  EXTREME_EVOBOOST: 0x02AD,
  GENESIS_SUPERNOVA: 0x02AE,
  SHELL_TRAP: 0x02AF,
  FLEUR_CANNON: 0x02B0,
  PSYCHIC_FANGS: 0x02B1,
  STOMPING_TANTRUM: 0x02B2,
  SHADOW_BONE: 0x02B3,
  ACCELEROCK: 0x02B4,
  LIQUIDATION: 0x02B5,
  PRISMATIC_LASER: 0x02B6,
  SPECTRAL_THIEF: 0x02B7,
  SUNSTEEL_STRIKE: 0x02B8,
  MOONGEIST_BEAM: 0x02B9,
  TEARFUL_LOOK: 0x02BA,
  ZING_ZAP: 0x02BB,
  NATURES_MADNESS: 0x02BC,
  MULTI_ATTACK: 0x02BD,
  TEN_MILLION_VOLT_THUNDERBOLT: 0x02BE,
  MIND_BLOWN: 0x02BF,
  PLASMA_FISTS: 0x02C0,
  PHOTON_GEYSER: 0x02C1,
  LIGHT_THAT_BURNS_THE_SKY: 0x02C2,
  SEARING_SUNRAZE_SMASH: 0x02C3,
  MENACING_MOONRAZE_MAELSTROM: 0x02C4,
  LETS_SNUGGLE_FOREVER: 0x02C5,
  SPLINTERED_STORMSHARDS: 0x02C6,
  CLANGOROUS_SOULBLAZE: 0x02C7
};

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default MOVE;