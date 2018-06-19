/**
 * A Star Graph
 * ===
 *
 * @module aStarGraph
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import AStarGraphNode from './a-star-graph-node';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////

/**
 * AStarGraph
 * @class
 * @extends Graph
 */
class AStarGraph {
  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @private
   * @type {number}
   */
  _size;

  /**
   * @private
   * @type {Array}
   */
  _grid;

  /**
   * @private
   * @type {Array}
   */
  _nodes;

  /**
   * @private
   * @type {Array}
   */
  _dirtyNodes;

  /**
   * @private
   * @type {Boolean}
   */
  _diagonals;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Graph
   * @constructor
   */
  constructor(size) {
    this._size = size;
    this._nodes = [];
    this._grid = [];
    this._dirtyNodes = [];
    this._diagonals = true;

    for (let idx = 0; idx < this._size; idx++) {
      for (let jdx = 0; jdx < this._size; jdx++) {
        const NODE = AStarGraphNode.createInstance(idx, jdx, 1);

        this._grid[idx + (jdx * this._size)] = NODE;
        this._nodes.push(NODE);
      }
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////

  cleanGraph() {
    for (let idx = 0; idx < this._dirtyNodes.length; idx++) {
      this._cleanNode(this._dirtyNodes[idx]);
    }
  }

  markDirty(node) {
    this._dirtyNodes.push(node);
  }

  getNeighbors(node) {
    const NEIGHBORS = [];

    if (this._grid[(node.x - 1) + (node.y * this._size)]){
      NEIGHBORS.push(this._grid[(node.x - 1) + (node.y * this._size)]);
    }
    if (this._grid[(node.x + 1) + (node.y * this._size)]){
      NEIGHBORS.push(this._grid[(node.x + 1) + (node.y * this._size)]);
    }
    if (this._grid[node.x + ((node.y - 1) * this._size)]){
      NEIGHBORS.push(this._grid[node.x + ((node.y - 1) * this._size)]);
    }
    if (this._grid[node.x + ((node.y + 1) * this._size)]){
      NEIGHBORS.push(this._grid[node.x + ((node.y + 1) * this._size)]);
    }
    if (this._diagonals) {
      if (this._grid[(node.x - 1) + ((node.y - 1) * this._size)]){
        NEIGHBORS.push(this._grid[(node.x - 1) + ((node.y - 1) * this._size)]);
      }
      if (this._grid[(node.x + 1) + ((node.y + 1) * this._size)]){
        NEIGHBORS.push(this._grid[(node.x + 1) + ((node.y + 1) * this._size)]);
      }
      if (this._grid[(node.x - 1) + ((node.y + 1) * this._size)]){
        NEIGHBORS.push(this._grid[(node.x - 1) + ((node.y + 1) * this._size)]);
      }
      if (this._grid[(node.x + 1) + ((node.y - 1) * this._size)]){
        NEIGHBORS.push(this._grid[(node.x + 1) + ((node.y - 1) * this._size)]);
      }
    }
    return NEIGHBORS;
  }

  toString() {
    const OUTPUT = [];

    for (let idx = 0; idx < this._size; idx++) {
      for (let jdx = 0; jdx < this._size; jdx++) {

      }
    }
    return OUTPUT;
  }
  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _cleanNode(node) {
    node.score = 0;
    node.heuristic = 0;
    node.visited = false;
    node.closed = false;
    node.parent = false;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   *
   * @return {AStarGraph}
   */
  static createInstance(size) {
    return new AStarGraph(size);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default AStarGraph;
