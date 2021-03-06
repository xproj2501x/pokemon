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
   * @return {int} The length of the stack.
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
   * @param {object} element - The element to be enqueued.
   */
  enqueue(element) {
    this._data.push(element);
  }

  /**
   * Dequeues an element from the front of the queue.
   * @return {object} The dequeued element.
   */
  dequeue() {
    return this._data.shift();
  }

  /**
   * Returns the first element in the queue without removing it.
   * @return {object} The first element in the queue.
   */
  peek() {
    return this._data[0];
  }

  /**
   * Resets the queue.
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
   * @return {Queue} - A new queue object.
   */
  static create() {
    return new Queue();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Queue;
