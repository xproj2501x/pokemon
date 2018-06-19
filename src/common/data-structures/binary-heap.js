/**
 * Binary Heap
 * ===
 *
 * @module binaryHeap
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////

/**
 * BinaryHeap
 * @class
 */
class BinaryHeap {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @private
   * @type {Array}
   */
  _data;

  /**
   * @private
   * @type {}
   */
  _scoreFunction;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @readonly
   * @return {number}
   */
  get size() {
    return this._data.length;
  }

  /**
   * BinaryHeap
   * @constructor
   * @param {} scoreFunction
   */
  constructor(scoreFunction) {
    this._data = [];
    this._scoreFunction = scoreFunction;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @public
   * @param {object} element
   */
  push(element) {
    this._data.push(element);
    this._sinkDown(this.size - 1);
  }

  /**
   * @public
   */
  pop() {
    const FIRST = this._data[0];
    const LAST = this._data.pop();

    if (this.size > 0) {
      this._data[0] = LAST;
      this._bubbleUp(0);
    }
    return FIRST;
  }

  /**
   * @public
   * @param {object} element
   */
  remove(element) {
    const INDEX = this._data.indexOf(element);
    const LAST = this._data.pop();

    if (INDEX !== this.size - 1) {
      this._data[INDEX] = LAST;
      if (this._scoreFunction(LAST) < this._scoreFunction(element)) {
        this._sinkDown(INDEX);
      } else {
        this._bubbleUp(INDEX);
      }
    }
  }

  /**
   * @public
   * @param {object} element -
   */
  rescoreElement(element) {
    this._sinkDown(this._data.indexOf(element));
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   *
   * @private
   * @param {number} index -
   */
  _sinkDown(index) {
    const ELEMENT = this._data[index];

    while (index > 0) {
      const PARENT_INDEX = ((index + 1) >> 1) - 1;
      const PARENT = this._data[PARENT_INDEX];

      if (this._scoreFunction(ELEMENT) < this._scoreFunction(PARENT)) {
        this._data[PARENT_INDEX] = ELEMENT;
        this._data[index] = PARENT;
        index = PARENT_INDEX;
      } else {
        break;
      }
    }
  }

  /**
   *
   * @private
   * @param {number} index -
   */
  _bubbleUp(index) {
    const PARENT = this._data[index];
    const PARENT_SCORE = this._scoreFunction(PARENT);

    while (true) {
      const CHILD_1_INDEX = (index + 1) << 1;
      const CHILD_2_INDEX = (index + 1) << 1;
      let swap = null;
      let childScore;

      if (CHILD_1_INDEX < this.size) {
        const CHILD_1 = this._data[CHILD_1_INDEX];

        childScore = this._scoreFunction(CHILD_1);
        if (childScore < PARENT_SCORE) {
          swap = CHILD_1_INDEX;
        }
      }
      if (CHILD_2_INDEX < this.size) {
        const CHILD_2 = this._data[CHILD_2_INDEX];
        const CHILD_2_SCORE = this._scoreFunction(CHILD_2);

        if (CHILD_2_SCORE < (swap === null ? PARENT_SCORE : childScore)) {
          swap = CHILD_2_INDEX;
        }
      }
      if (swap !== null) {
        this._data[index] = this._data[swap];
        this._data[swap] = PARENT;
        index = swap;
      } else {
        break;
      }
    }
  }
  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @param {} scoreFunction -
   * @return {BinaryHeap}
   */
  static createInstance(scoreFunction) {
    return new BinaryHeap(scoreFunction);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default BinaryHeap;
