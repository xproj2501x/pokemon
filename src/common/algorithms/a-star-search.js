/**
 * A Star Search
 * ===
 *
 * @module aStarSearch
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import BinaryHeap from '../data-structures/binary-heap';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////

/**
 * AStarSearch
 * @class
 */
class AStarSearch {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////


  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////


  /**
   * AStarSearch
   * @constructor
   */
  constructor() {

  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   *
   * @param graph
   * @param start
   * @param end
   * @param options
   */
  search(graph, start, end, options) {
    const OPEN_HEAP = BinaryHeap.createInstance((node) => {return node.f;});
    const HEURISTIC = options.heuristic || this._calculateDiagonal;
    const CLOSEST = options.closest || true;
    let closestNode = start;

    graph.cleanGraph();
    options = options || {};
    start.heuristic = HEURISTIC(start, end);
    graph.markDirty(start);
    OPEN_HEAP.push(start);
    while (OPEN_HEAP.size > 0) {
      const CURRENT_NODE = OPEN_HEAP.pop();

      if (CURRENT_NODE === end) {
        return this._findPathTo(CURRENT_NODE);
      }
      CURRENT_NODE.closed = true;
      const NEIGHBORS = graph.getNeighbors(CURRENT_NODE);

      for (let idx = 0; idx < NEIGHBORS.length; idx++) {
        const NEIGHBOR = NEIGHBORS[idx];

        if (NEIGHBOR.closed) {
          continue;
        }
        const TOTAL_SCORE = CURRENT_NODE.score + NEIGHBOR.getCost(CURRENT_NODE);
        const VISITED = NEIGHBOR.visited;

        if (!VISITED || TOTAL_SCORE < NEIGHBOR.score) {
          NEIGHBOR.visited = true;
          NEIGHBOR.parent = CURRENT_NODE;
          NEIGHBOR.heuristic = NEIGHBOR.heuristic || HEURISTIC(NEIGHBOR, end);
          NEIGHBOR.score = TOTAL_SCORE;
          NEIGHBOR.f = NEIGHBOR.score + NEIGHBOR.heuristic;
          graph.markDirty(NEIGHBOR);
          if (CLOSEST) {
            if (NEIGHBOR.heuristic < closestNode.heuristic || (NEIGHBOR.heuristic === closestNode.heuristic && NEIGHBOR.score < closestNode.score)) {
              closestNode = NEIGHBOR;
            }
          }
          if (!VISITED) {
            OPEN_HEAP.push(NEIGHBOR)
          } else {
            OPEN_HEAP.rescoreElement(NEIGHBOR);
          }
        }
      }
    }
    if (CLOSEST) {
      return this._findPathTo(closestNode);
    }
    return [];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _findPathTo(node) {
    const PATH = [];
    let currentNode = node;

    while (currentNode.parent) {
      PATH.unshift(currentNode);
      currentNode = currentNode.parent;
    }
    return PATH;
  }

  /**
   *
   * @private
   * @param pos0
   * @param pos1
   * @return {number}
   */
  _calculateManhattan(pos0, pos1) {
   const D1 = Math.abs(pos1.x - pos0.x);
   const D2 = Math.abs(pos1.y - pos0.y);

   return D1 + D2;
  }

  _calculateDiagonal(pos0, pos1) {
    const D1 = Math.abs(pos1.x - pos0.x);
    const D2 = Math.abs(pos1.y - pos0.y);

    return (1 * (D1 + D2)) + ((Math.sqrt(2) - (2 * 1)) * Math.min(D1, D2));
  }
  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @return {AStarSearch}
   */
  static createInstance() {
    return new AStarSearch();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default AStarSearch;
