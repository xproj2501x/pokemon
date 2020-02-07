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
const MoveSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: Number,
    required: true
  },
  category: {
    type: Number,
    required: true
  },
  powerPoints: {
    type: Number,
    required: true
  },
  basePower: {
    type: Number,
    required: true
  },
  accuracy: {
    type: Number,
    required: true
  },
});

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default mongoose.model('MoveDto', MoveSchema);
