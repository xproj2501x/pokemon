////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
/**
 * Strings for move names
 * @readonly
 * @type {Array}
 */
const MOVE = [
  "UNKNOWN",
  "POUND",
  "KARATE CHOP",
  "DOUBLE SLAP",
  "COMET PUNCH",
  "MEGA PUNCH",
  "PAY DAY",
  "FIRE PUNCH",
  "ICE PUNCH",
  "THUNDER PUNCH",
  "SCRATCH",
  "VICE GRIP",
  "GUILLOTINE",
  "RAZOR WIND",
  "SWORDS DANCE",
  "CUT",
  "GUST",
  "WING ATTACK",
  "WHIRLWIND",
  "FLY",
  "BIND",
  "SLAM",
  "VINE WHIP",
  "STOMP",
  "DOUBLE KICK",
  "MEGA KICK",
  "JUMP KICK",
  "ROLLING KICK",
  "SAND ATTACK",
  "HEADBUTT",
  "HORN ATTACK",
  "FURY ATTACK",
  "HORN DRILL",
  "TACKLE",
  "BODY SLAM",
  "WRAP",
  "TAKE DOWN",
  "THRASH",
  "DOUBLE-EDGE",
  "TAIL WHIP",
  "POISON STING",
  "TWINEEDLE",
  "PIN MISSILE",
  "LEER",
  "BITE",
  "GROWL",
  "ROAR",
  "SING",
  "SUPERSONIC",
  "SONIC BOOM",
  "DISABLE",
  "ACID",
  "EMBER",
  "FLAMETHROWER",
  "MIST",
  "WATER GUN",
  "HYDRO PUMP",
  "SURF",
  "ICE BEAM",
  "BLIZZARD",
  "PSYBEAM",
  "BUBBLE BEAM",
  "AURORA BEAM",
  "HYPER BEAM",
  "PECK",
  "DRILL PECK",
  "SUBMISSION",
  "LOW KICK",
  "COUNTER",
  "SEISMIC TOSS",
  "STRENGTH",
  "ABSORB",
  "MEGA DRAIN",
  "LEECH SEED",
  "GROWTH",
  "RAZOR LEAF",
  "SOLAR BEAM",
  "POISON POWDER",
  "STUN SPORE",
  "SLEEP POWDER",
  "PETAL DANCE",
  "STRING SHOT",
  "DRAGON RAGE",
  "FIRE SPIN",
  "THUNDER SHOCK",
  "THUNDERBOLT",
  "THUNDER WAVE",
  "THUNDER",
  "ROCK THROW",
  "EARTHQUAKE",
  "FISSURE",
  "DIG",
  "TOXIC",
  "CONFUSION",
  "PSYCHIC",
  "HYPNOSIS",
  "MEDITATE",
  "AGILITY",
  "QUICK ATTACK",
  "RAGE",
  "TELEPORT",
  "NIGHT SHADE",
  "MIMIC",
  "SCREECH",
  "DOUBLE TEAM",
  "RECOVER",
  "HARDEN",
  "MINIMIZE",
  "SMOKESCREEN",
  "CONFUSE RAY",
  "WITHDRAW",
  "DEFENSE CURL",
  "BARRIER",
  "LIGHT SCREEN",
  "HAZE",
  "REFLECT",
  "FOCUS ENERGY",
  "BIDE",
  "METRONOME",
  "MIRROR MOVE",
  "SELF-DESTRUCT",
  "EGG BOMB",
  "LICK",
  "SMOG",
  "SLUDGE",
  "BONE CLUB",
  "FIRE BLAST",
  "WATERFALL",
  "CLAMP",
  "SWIFT",
  "SKULL BASH",
  "SPIKE CANNON",
  "CONSTRICT",
  "AMNESIA",
  "KINESIS",
  "SOFT-BOILED",
  "HIGH JUMP KICK",
  "GLARE",
  "DREAM EATER",
  "POISON GAS",
  "BARRAGE",
  "LEECH LIFE",
  "LOVELY KISS",
  "SKY ATTACK",
  "TRANSFORM",
  "BUBBLE",
  "DIZZY PUNCH",
  "SPORE",
  "FLASH",
  "PSYWAVE",
  "SPLASH",
  "ACID ARMOR",
  "CRABHAMMER",
  "EXPLOSION",
  "FURY SWIPES",
  "BONEMERANG",
  "REST",
  "ROCK SLIDE",
  "HYPER FANG",
  "SHARPEN",
  "CONVERSION",
  "TRI ATTACK",
  "SUPER FANG",
  "SLASH",
  "SUBSTITUTE",
  "STRUGGLE",
  "SKETCH",
  "TRIPLE KICK",
  "THIEF",
  "SPIDER WEB",
  "MIND READER",
  "NIGHTMARE",
  "FLAME WHEEL",
  "SNORE",
  "CURSE",
  "FLAIL",
  "CONVERSION 2",
  "AEROBLAST",
  "COTTON SPORE",
  "REVERSAL",
  "SPITE",
  "POWDER SNOW",
  "PROTECT",
  "MACH PUNCH",
  "SCARY FACE",
  "FEINT ATTACK",
  "SWEET KISS",
  "BELLY DRUM",
  "SLUDGE BOMB",
  "MUD-SLAP",
  "OCTAZOOKA",
  "SPIKES",
  "ZAP CANNON",
  "FORESIGHT",
  "DESTINY BOND",
  "PERISH SONG",
  "ICY WIND",
  "DETECT",
  "BONE RUSH",
  "LOCK-ON",
  "OUTRAGE",
  "SANDSTORM",
  "GIGA DRAIN",
  "ENDURE",
  "CHARM",
  "ROLLOUT",
  "FALSE SWIPE",
  "SWAGGER",
  "MILK DRINK",
  "SPARK",
  "FURY CUTTER",
  "STEEL WING",
  "MEAN LOOK",
  "ATTRACT",
  "SLEEP TALK",
  "HEAL BELL",
  "RETURN",
  "PRESENT",
  "FRUSTRATION",
  "SAFEGUARD",
  "PAIN SPLIT",
  "SACRED FIRE",
  "MAGNITUDE",
  "DYNAMIC PUNCH",
  "MEGAHORN",
  "DRAGON BREATH",
  "BATON PASS",
  "ENCORE",
  "PURSUIT",
  "RAPID SPIN",
  "SWEET SCENT",
  "IRON TAIL",
  "METAL CLAW",
  "VITAL THROW",
  "MORNING SUN",
  "SYNTHESIS",
  "MOONLIGHT",
  "HIDDEN POWER",
  "CROSS CHOP",
  "TWISTER",
  "RAIN DANCE",
  "SUNNY DAY",
  "CRUNCH",
  "MIRROR COAT",
  "PSYCH UP",
  "EXTREME SPEED",
  "ANCIENT POWER",
  "SHADOW BALL",
  "FUTURE SIGHT",
  "ROCK SMASH",
  "WHIRLPOOL",
  "BEAT UP",
  "FAKE OUT",
  "UPROAR",
  "STOCKPILE",
  "SPIT UP",
  "SWALLOW",
  "HEAT WAVE",
  "HAIL",
  "TORMENT",
  "FLATTER",
  "WILL-O-WISP",
  "MEMENTO",
  "FACADE",
  "FOCUS PUNCH",
  "SMELLING SALTS",
  "FOLLOW ME",
  "NATURE POWER",
  "CHARGE",
  "TAUNT",
  "HELPING HAND",
  "TRICK",
  "ROLE PLAY",
  "WISH",
  "ASSIST",
  "INGRAIN",
  "SUPERPOWER",
  "MAGIC COAT",
  "RECYCLE",
  "REVENGE",
  "BRICK BREAK",
  "YAWN",
  "KNOCK OFF",
  "ENDEAVOR",
  "ERUPTION",
  "SKILL SWAP",
  "IMPRISON",
  "REFRESH",
  "GRUDGE",
  "SNATCH",
  "SECRET POWER",
  "DIVE",
  "ARM THRUST",
  "CAMOUFLAGE",
  "TAIL GLOW",
  "LUSTER PURGE",
  "MIST BALL",
  "FEATHER DANCE",
  "TEETER DANCE",
  "BLAZE KICK",
  "MUD SPORT",
  "ICE BALL",
  "NEEDLE ARM",
  "SLACK OFF",
  "HYPER VOICE",
  "POISON FANG",
  "CRUSH CLAW",
  "BLAST BURN",
  "HYDRO CANNON",
  "METEOR MASH",
  "ASTONISH",
  "WEATHER BALL",
  "AROMATHERAPY",
  "FAKE TEARS",
  "AIR CUTTER",
  "OVERHEAT",
  "ODOR SLEUTH",
  "ROCK TOMB",
  "SILVER WIND",
  "METAL SOUND",
  "GRASS WHISTLE",
  "TICKLE",
  "COSMIC POWER",
  "WATER SPOUT",
  "SIGNAL BEAM",
  "SHADOW PUNCH",
  "EXTRASENSORY",
  "SKY UPPERCUT",
  "SAND TOMB",
  "SHEER COLD",
  "MUDDY WATER",
  "BULLET SEED",
  "AERIAL ACE",
  "ICICLE SPEAR",
  "IRON DEFENSE",
  "BLOCK",
  "HOWL",
  "DRAGON CLAW",
  "FRENZY PLANT",
  "BULK UP",
  "BOUNCE",
  "MUD SHOT",
  "POISON TAIL",
  "COVET",
  "VOLT TACKLE",
  "MAGICAL LEAF",
  "WATER SPORT",
  "CALM MIND",
  "LEAF BLADE",
  "DRAGON DANCE",
  "ROCK BLAST",
  "SHOCK WAVE",
  "WATER PULSE",
  "DOOM DESIRE",
  "PSYCHO BOOST",
  "ROOST",
  "GRAVITY",
  "MIRACLE EYE",
  "WAKE-UP SLAP",
  "HAMMER ARM",
  "GYRO BALL",
  "HEALING WISH",
  "BRINE",
  "NATURAL GIFT",
  "FEINT",
  "PLUCK",
  "TAILWIND",
  "ACUPRESSURE",
  "METAL BURST",
  "U-TURN",
  "CLOSE COMBAT",
  "PAYBACK",
  "ASSURANCE",
  "EMBARGO",
  "FLING",
  "PSYCHO SHIFT",
  "TRUMP CARD",
  "HEAL BLOCK",
  "WRING OUT",
  "POWER TRICK",
  "GASTRO ACID",
  "LUCKY CHANT",
  "ME FIRST",
  "COPYCAT",
  "POWER SWAP",
  "GUARD SWAP",
  "PUNISHMENT",
  "LAST RESORT",
  "WORRY SEED",
  "SUCKER PUNCH",
  "TOXIC SPIKES",
  "HEART SWAP",
  "AQUA RING",
  "MAGNET RISE",
  "FLARE BLITZ",
  "FORCE PALM",
  "AURA SPHERE",
  "ROCK POLISH",
  "POISON JAB",
  "DARK PULSE",
  "NIGHT SLASH",
  "AQUA TAIL",
  "SEED BOMB",
  "AIR SLASH",
  "X-SCISSOR",
  "BUG BUZZ",
  "DRAGON PULSE",
  "DRAGON RUSH",
  "POWER GEM",
  "DRAIN PUNCH",
  "VACUUM WAVE",
  "FOCUS BLAST",
  "ENERGY BALL",
  "BRAVE BIRD",
  "EARTH POWER",
  "SWITCHEROO",
  "GIGA IMPACT",
  "NASTY PLOT",
  "BULLET PUNCH",
  "AVALANCHE",
  "ICE SHARD",
  "SHADOW CLAW",
  "THUNDER FANG",
  "ICE FANG",
  "FIRE FANG",
  "SHADOW SNEAK",
  "MUD BOMB",
  "PSYCHO CUT",
  "ZEN HEADBUTT",
  "MIRROR SHOT",
  "FLASH CANNON",
  "ROCK CLIMB",
  "DEFOG",
  "TRICK ROOM",
  "DRACO METEOR",
  "DISCHARGE",
  "LAVA PLUME",
  "LEAF STORM",
  "POWER WHIP",
  "ROCK WRECKER",
  "CROSS POISON",
  "GUNK SHOT",
  "IRON HEAD",
  "MAGNET BOMB",
  "STONE EDGE",
  "CAPTIVATE",
  "STEALTH ROCK",
  "GRASS KNOT",
  "CHATTER",
  "JUDGMENT",
  "BUG BITE",
  "CHARGE BEAM",
  "WOOD HAMMER",
  "AQUA JET",
  "ATTACK ORDER",
  "DEFEND ORDER",
  "HEAL ORDER",
  "HEAD SMASH",
  "DOUBLE HIT",
  "ROAR OF TIME",
  "SPACIAL REND",
  "LUNAR DANCE",
  "CRUSH GRIP",
  "MAGMA STORM",
  "DARK VOID",
  "SEED FLARE",
  "OMINOUS WIND",
  "SHADOW FORCE",
  "HONE CLAWS",
  "WIDE GUARD",
  "GUARD SPLIT",
  "POWER SPLIT",
  "WONDER ROOM",
  "PSYSHOCK",
  "VENOSHOCK",
  "AUTOTOMIZE",
  "RAGE POWDER",
  "TELEKINESIS",
  "MAGIC ROOM",
  "SMACK DOWN",
  "STORM THROW",
  "FLAME BURST",
  "SLUDGE WAVE",
  "QUIVER DANCE",
  "HEAVY SLAM",
  "SYNCHRONOISE",
  "ELECTRO BALL",
  "SOAK",
  "FLAME CHARGE",
  "COIL",
  "LOW SWEEP",
  "ACID SPRAY",
  "FOUL PLAY",
  "SIMPLE BEAM",
  "ENTRAINMENT",
  "AFTER YOU",
  "ROUND",
  "ECHOED VOICE",
  "CHIP AWAY",
  "CLEAR SMOG",
  "STORED POWER",
  "QUICK GUARD",
  "ALLY SWITCH",
  "SCALD",
  "SHELL SMASH",
  "HEAL PULSE",
  "HEX",
  "SKY DROP",
  "SHIFT GEAR",
  "CIRCLE THROW",
  "INCINERATE",
  "QUASH",
  "ACROBATICS",
  "REFLECT TYPE",
  "RETALIATE",
  "FINAL GAMBIT",
  "BESTOW",
  "INFERNO",
  "WATER PLEDGE",
  "FIRE PLEDGE",
  "GRASS PLEDGE",
  "VOLT SWITCH",
  "STRUGGLE BUG",
  "BULLDOZE",
  "FROST BREATH",
  "DRAGON TAIL",
  "WORK UP",
  "ELECTROWEB",
  "WILD CHARGE",
  "DRILL RUN",
  "DUAL CHOP",
  "HEART STAMP",
  "HORN LEECH",
  "SACRED SWORD",
  "RAZOR SHELL",
  "HEAT CRASH",
  "LEAF TORNADO",
  "STEAMROLLER",
  "COTTON GUARD",
  "NIGHT DAZE",
  "PSYSTRIKE",
  "TAIL SLAP",
  "HURRICANE",
  "HEAD CHARGE",
  "GEAR GRIND",
  "SEARING SHOT",
  "TECHNO BLAST",
  "RELIC SONG",
  "SECRET SWORD",
  "GLACIATE",
  "BOLT STRIKE",
  "BLUE FLARE",
  "FIERY DANCE",
  "FREEZE SHOCK",
  "ICE BURN",
  "SNARL",
  "ICICLE CRASH",
  "V-CREATE",
  "FUSION FLARE",
  "FUSION BOLT",
  "FLYING PRESS",
  "MAT BLOCK",
  "BELCH",
  "ROTOTILLER",
  "STICKY WEB",
  "FELL STINGER",
  "PHANTOM FORCE",
  "TRICK-OR-TREAT",
  "NOBLE ROAR",
  "ION DELUGE",
  "PARABOLIC CHARGE",
  "FOREST'S CURSE",
  "PETAL BLIZZARD",
  "FREEZE-DRY",
  "DISARMING VOICE",
  "PARTING SHOT",
  "TOPSY-TURVY",
  "DRAINING KISS",
  "CRAFTY SHIELD",
  "FLOWER SHIELD",
  "GRASSY TERRAIN",
  "MISTY TERRAIN",
  "ELECTRIFY",
  "PLAY ROUGH",
  "FAIRY WIND",
  "MOONBLAST",
  "BOOMBURST",
  "FAIRY LOCK",
  "KING'S SHIELD",
  "PLAY NICE",
  "CONFIDE",
  "DIAMOND STORM",
  "STEAM ERUPTION",
  "HYPERSPACE HOLE",
  "WATER SHURIKEN",
  "MYSTICAL FIRE",
  "SPIKY SHIELD",
  "AROMATIC MIST",
  "EERIE IMPULSE",
  "VENOM DRENCH",
  "POWDER",
  "GEOMANCY",
  "MAGNETIC FLUX",
  "HAPPY HOUR",
  "ELECTRIC TERRAIN",
  "DAZZLING GLEAM",
  "CELEBRATE",
  "HOLD HANDS",
  "BABY-DOLL EYES",
  "NUZZLE",
  "HOLD BACK",
  "INFESTATION",
  "POWER-UP PUNCH",
  "OBLIVION WING",
  "THOUSAND ARROWS",
  "THOUSAND WAVES",
  "LAND'S WRATH",
  "LIGHT OF RUIN",
  "ORIGIN PULSE",
  "PRECIPICE BLADES",
  "DRAGON ASCENT",
  "HYPERSPACE FURY",
  "BREAKNECK BLITZ",
  "ALL-OUT PUMMELING",
  "SUPERSONIC SKYSTRIKE",
  "ACID DOWNPOUR",
  "TECTONIC RAGE",
  "CONTINENTAL CRUSH",
  "SAVAGE SPIN-OUT",
  "NEVER-ENDING NIGHTMARE",
  "CORKSCREW CRASH",
  "INFERNO OVERDRIVE",
  "HYDRO VORTEX",
  "BLOOM DOOM",
  "GIGAVOLT HAVOC",
  "SHATTERED PSYCHE",
  "SUBZERO SLAMMER",
  "DEVASTATING DRAKE",
  "BLACK HOLE ECLIPSE",
  "TWINKLE TACKLE",
  "CATASTROPIKA",
  "SHORE UP",
  "FIRST IMPRESSION",
  "BANEFUL BUNKER",
  "SPIRIT SHACKLE",
  "DARKEST LARIAT",
  "SPARKLING ARIA",
  "ICE HAMMER",
  "FLORAL HEALING",
  "HIGH HORSEPOWER",
  "STRENGTH SAP",
  "SOLAR BLADE",
  "LEAFAGE",
  "SPOTLIGHT",
  "TOXIC THREAD",
  "LASER FOCUS",
  "GEAR UP",
  "THROAT CHOP",
  "POLLEN PUFF",
  "ANCHOR SHOT",
  "PSYCHIC TERRAIN",
  "LUNGE",
  "FIRE LASH",
  "POWER TRIP",
  "BURN UP",
  "SPEED SWAP",
  "SMART STRIKE",
  "PURIFY",
  "REVELATION DANCE",
  "CORE ENFORCER",
  "TROP KICK",
  "INSTRUCT",
  "BEAK BLAST",
  "CLANGING SCALES",
  "DRAGON HAMMER",
  "BRUTAL SWING",
  "AURORA VEIL",
  "SINISTER ARROW RAID",
  "MALICIOUS MOONSAULT",
  "OCEANIC OPERETTA",
  "GUARDIAN OF ALOLA",
  "SOUL-STEALING 7-STAR STRIKE",
  "STOKED SPARKSURFER",
  "PULVERIZING PANCAKE",
  "EXTREME EVOBOOST",
  "GENESIS SUPERNOVA",
  "SHELL TRAP",
  "FLEUR CANNON",
  "PSYCHIC FANGS",
  "STOMPING TANTRUM",
  "SHADOW BONE",
  "ACCELEROCK",
  "LIQUIDATION",
  "PRISMATIC LASER",
  "SPECTRAL THIEF",
  "SUNSTEEL STRIKE",
  "MOONGEIST BEAM",
  "TEARFUL LOOK",
  "ZING ZAP",
  "NATURE'S MADNESS",
  "MULTI-ATTACK",
  "10,000,000 VOLT THUNDERBOLT",
  "MIND BLOWN",
  "PLASMA FISTS",
  "PHOTON GEYSER",
  "LIGHT THAT BURNS THE SKY",
  "SEARING SUNRAZE SMASH",
  "MENACING MOONRAZE MAELSTROM",
  "LET'S SNUGGLE FOREVER",
  "SPLINTERED STORMSHARDS",
  "CLANGOROUS SOULBLAZE"
];

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default MOVE;
