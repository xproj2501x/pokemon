////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const ELEVATION_LEVEL = {
  DEEP_WATER: 0,
  SHALLOW_WATER: 1,
  COASTAL: 2,
  PLAINS: 3,
  HILLS: 4,
  MOUNTAIN: 5,
  ALPINE: 6,
  SNOW_CAP: 7
};

const PRECIPITATION_LEVEL = {
  ARID: 0,
  SEMIARID: 1,
  MODERATE: 2,
  HUMID: 3,
  RAINY: 4
};

const TEMPERATURE_LEVEL = {
  ARCTIC: 0,
  SUBARCTIC: 1,
  BOREAL: 2,
  TEMPERATE: 3,
  SUBTROPICAL: 4,
  TROPICAL: 5
};

const DIRECTION = {
  NORTH: [0, -1],
  NORTH_EAST: [1, -1],
  EAST: [1, 0],
  SOUTH_EAST: [1, 1],
  SOUTH: [0, 1],
  SOUTH_WEST: [-1, 1],
  WEST: [-1, 0],
  NORTH_WEST: [-1, -1]
};

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export {ELEVATION_LEVEL, PRECIPITATION_LEVEL, TEMPERATURE_LEVEL, DIRECTION};
