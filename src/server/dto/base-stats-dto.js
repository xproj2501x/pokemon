/**
 * Base Stats DTO
 * ===
 *
 * @module PokemonBaseDataDto
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import mongoose from 'mongoose';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const PokemonBaseDataSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: Array,
    required: true
  },
  catchRate: {
    type: Number,
    required: true
  },
  attributes: {
    hitPoints: {
      type: Number,
      required: true
    },
    attack: {
      type: Number,
      required: true
    },
    defense: {
      type: Number,
      required: true
    },
    specialAttack: {
      type: Number,
      required: true
    },
    specialDefense: {
      type: Number,
      required: true
    },
    speed: {
      type: Number,
      required: true
    }
  },
  effortYield: {
    hitPoints: {
      type: Number,
      required: true
    },
    attack: {
      type: Number,
      required: true
    },
    defense: {
      type: Number,
      required: true
    },
    specialAttack: {
      type: Number,
      required: true
    },
    specialDefense: {
      type: Number,
      required: true
    },
    speed: {
      type: Number,
      required: true
    }
  },
  experienceYield: {
    type: Number,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  gender: {
    type: Number,
    required: true
  },
  eggCycles: {
    type: Number,
    required: true
  },
  friendship: {
    type: Number,
    required: true
  },
  growthType: {
    type: Number,
    required: true
  },
  eggGroups: {
    type: Array,
    required: true
  },
  abilities: {
    type: Array,
    required: true
  }
});

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default mongoose.model('PokemonBaseDataDto', PokemonBaseDataSchema, 'PokemonBaseData');
