/**
 * Base Stats DTO
 * ===
 *
 * @module BaseStatsDto
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import mongoose from 'mongoose';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const BaseStatsSchema = new mongoose.Schema({
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
  abilities: {
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
  }
});

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default mongoose.model('BaseStatsDto', BaseStatsSchema);
