/**
 * UUID
 * ===
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const HEX_DIGITS = '01234567890abcdef';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * UUID
 * @class
 */
class UUID {

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @return {string}
   */
  static create() {
    const STRING = [];

    for (let idx = 0; idx < 36; idx++) {
      STRING[idx] = HEX_DIGITS.substr(Math.floor(Math.random() * 0x10), 1);
    }
    STRING[14] = '4';
    STRING[19] = HEX_DIGITS.substr((STRING[19] & 0x3) | 0x1, 1);
    STRING[8] = STRING[13] = STRING[18] = STRING[23] = '-';
    return STRING.join('');
  }
}
////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default UUID;
