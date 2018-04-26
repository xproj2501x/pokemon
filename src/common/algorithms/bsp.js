/**
 * Binary Space Partition
 * ===
 *
 * @module binarySpacePartition
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import PRNG from '../math/prng';
import BinaryTree from '../../common/data-structures/binary-tree';
import Vector2 from '../math/vector2';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * BinarySpacePartition
 * @class
 */
class BinarySpacePartition {
  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _tree;
  _partitions;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * BinarySpacePartition
   * @constructor
   */
  constructor(){

  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   *
   * @param options
   */
  build(options) {
    const ROOT_CONTAINER = {
      position: Vector2.create(0, 0),
      size: Vector2.create(options.size.x, options.size.y)
    };

    this._tree = BinaryTree.create();
    this._partitions = [];
    this._generate(ROOT_CONTAINER, options.iterations);
    return this._partitions;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _generate(container, iterations){
    this._partitions.push(container);
    if(iterations > 0){
      let split = this._splitContainer(container);

      if(split) {
        if (split[0]) {
          this._generate(split[0], iterations - 1);
        }
        if (split[1]) {
          this._generate(split[1], iterations - 1);
        }
      }
    }

  }

  _splitContainer(container) {
    let r1, r2;

    let splitH = this._random(0, 1);

    if (container.size.y > container.size.x && container.size.y / container.size.x >= 1.25) {
      splitH = true;
    }
    if (container.size.x > container.size.y && container.size.x / container.size.y >= 1.25) {
      splitH = false;
    }


    if(splitH) {
      let min = Math.floor(container.size.y * .45);
      let max = container.size.y - min;
      let split = this._random(min, max);

      r1 = {
        position: Vector2.create(container.position.x, container.position.y),
        size: Vector2.create(container.size.x, split)
      };

      r2 = {
        position: Vector2.create(container.position.x, container.position.y + split),
        size: Vector2.create(container.size.x, container.size.y - split)
      };
    } else {
      let min = Math.floor(container.size.y * .45);
      let max = container.size.x - min;
      let split = this._random(min, max);
      r1 = {
        position: Vector2.create(container.position.x, container.position.y),
        size: Vector2.create(split, container.size.y)
      };

      r2 = {
        position: Vector2.create(container.position.x + split, container.position.y),
        size: Vector2.create(container.size.x - split, container.size.y)
      };
    }

    return [r1, r2];

  }

  _random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

//////////////////////////////////////////////////////////////////////////////
// Exports
//////////////////////////////////////////////////////////////////////////////
export default BinarySpacePartition;
