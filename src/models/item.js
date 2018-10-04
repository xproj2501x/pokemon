/**
 * Item
 * ===
 *
 * @module item
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
const SIZE = 44;

const KEYS = {
  NAME: 0x00,                 // 14 Bytes
  PRICE: 0x10,                // 2 Bytes
  HOLD_EFFECT: 0x12,          // 2 Bytes
  PARAMETER: 0x13,            // 1 Byte
  DESCRIPTION_POINTER: 0x14,  // 1 Byte
  MYSTERY_VALUE: 0x18,        // 2 Bytes
  POCKET: 0x1A,               // 1 Byte
  TYPE: 0x1B,                 // 1 Byte
  FIELD_USAGE_POINTER: 0x1C,  // 4 Bytes
  BATTLE_USAGE: 0x20,         // 4 Bytes
  BATTLE_USAGE_POINTER: 0x24, // 4 Bytes
  EXTRA_PARAMETER: 0x28       // 4 Bytes
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Item
 * @class
 */
class Item {

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
   *
   * @return {Item}
   */
  static createInstance(data) {
    return new Item(data);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Item;
