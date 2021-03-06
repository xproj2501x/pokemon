/**
 * Log
 * ===
 *
 * @module log
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ssZ';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Log
 * @class
 */
class Log {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @private
   * @type {Array}
   */
  _log;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Log
   * @constructor
   */
  constructor() {
    this._log = [];
  }

  /**
   * Writes a message to the log
   * @param {object} message - the message to be written
   */
  write(message) {
    this._log.push(message);
  }
  ////////////////////////////////////////////////////////////////////////////////
  // Public Methods
  ////////////////////////////////////////////////////////////////////////////////

  /**
   * Clears the log
   */
  clear() {
    this._log = [];
  }

  ////////////////////////////////////////////////////////////////////////////////
  // Private Methods
  ////////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @return {Log}
   */
  static create() {
    return new Log();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Log;
