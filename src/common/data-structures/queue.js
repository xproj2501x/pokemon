/**
 * Queue
 * ===
 *
 * @module queue
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Queue
 * @class
 */
class Queue {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @readonly
   * @return {int} The length of the queue.
   */
  get length() {
    return this._data.length;
  }

  /**
   * @private
   * @type {Array}
   */
  _data;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Queue
   * @constructor
   */
  constructor() {
    this._data = [];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Enqueues an element at the end of the queue.
   * @public
   * @param {object} element - The element to be enqueued.
   */
  enqueue(element) {
    this._data.push(element);
  }

  /**
   * Dequeues an element from the front of the queue.
   * @public
   *
   * @return {object} The dequeued element.
   */
  dequeue() {
    return this._data.shift();
  }

  /**
   * Returns the first element in the queue without removing it.
   * @public
   *
   * @return {object} The first element in the queue.
   */
  peek() {
    return this._data[0];
  }

  /**
   * Resets the queue.
   * @public
   */
  clear() {
    this._data = [];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   *
   * @return {Queue} - A new queue instance.
   */
  static createInstance() {
    return new Queue();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Queue;
