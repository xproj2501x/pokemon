/**
 * Graph Node
 * ===
 *
 * @module graphNode
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////

/**
 * GraphNode
 * @class
 */
class GraphNode {
  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @private
   * @type {int}
   */
  _key;

  /**
   * @private
   * @type {object}
   */
  _data;

  /**
   * @private
   * @type {object}
   */
  _edges;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @readonly
   * @return {object}
   */
  get data() {
    return this._data;
  }

  /**
   * Returns an array of the edges for the node.
   * @readonly
   * @return {Array}
   */
  get edges() {
    return Object.keys(this._edges);
  }

  /**
   * GraphNode
   * @constructor
   */
  constructor(key, data) {
    this._key = key;
    this._data = data;
    this._edges = {};
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Adds an edge from the node to another node in the graph.
   * @param {int} key - The key for the connected node.
   * @param {int} weight - The weight of the edge. (Default: 0}
   */
  addEdge(key, weight=0) {
    if (this.hasEdge(key)) throw Error(`Error: node ${this._key} is already connected to node ${key}`);
    this._edges[key] = weight;
  }

  /**
   *
   * @param {int} key - The key for the connected node.
   */
  removeEdge(key) {
    if (!this.hasEdge(key)) throw Error(`Error: node ${this._key} is not connected to node ${key}`);
    delete this._edges[key];
  }

  /**
   *
   * @param {int} key - The key for the connected node.
   * @return {boolean}
   */
  hasEdge(key) {
    return key in this._edges;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @param {int} key
   * @param {object} data
   * @return {GraphNode}
   */
  static create(key, data) {
    return new GraphNode(key, data);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default GraphNode;
