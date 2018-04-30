import BinaryNode from '../data-structures/binary-node';
import Vector2 from "../math/vector2";

class BSP2 {
  constructor(){
    this._partitions = [];
  }

  build(iterations, width, height) {
    let container = {x: 0, y: 0, width: width, height: height};
    // let data = this.generate(container, iterations);
    this.generate(container, iterations);
    return this._partitions;
  }


  generate(container, iterations) {


    if(iterations > 0) {
      let split = this._split(container);
      if (split) {
        if (split[0]) {
          // node.left = this.generate(split[0], iterations - 1);
          this.generate(split[0], iterations - 1);
        }
        if (split[1]) {
          // node.right = this.generate(split[1], iterations - 1);
          this.generate(split[1], iterations - 1);
        }
      }
    } else {
      this._partitions.push(container);
    }

  }

  _split(container) {
    let r1, r2;

    let splitH = this._random(0, 1);

    if (container.height > container.width && container.height / container.width >= 1.25) {
      splitH = true;
    }
    if (container.width > container.height && container.width / container.height >= 1.25) {
      splitH = false;
    }


    if(splitH) {
      let min = Math.floor(container.height * .45);
      let max = container.height - min;
      let split = this._random(min, max);
      r1 = {x: container.x, y: container.y, width: container.width, height: split};

      r2 = {x: container.x, y: container.y + split, width: container.width, height: container.height - split};
    } else {
      let min = Math.floor(container.width * .45);
      let max = container.width - min;
      let split = this._random(min, max);
      r1 = {x: container.x, y: container.y, width: split, height: container.height};

      r2 = {x: container.x + split, y: container.y, width: container.width - split, height: container.height};
    }

    return [r1, r2];

  }

  _splitContainer(container, iteration) {
    if (iteration > 0) {
      if ((container.size.x > this._minimumSize.x) && (container.size.y > this._minimumSize.y)) {
        const DIFFERENCE = container.size.x - container.size.y;
        const AXIS = (DIFFERENCE > 0) ? 0 : ((DIFFERENCE < 0) ? 1 : this._random(0, 1));
        const MINIMUM_SPLIT_POSITION = AXIS ? (container.position.y + this._minimumSize.y) : (container.position.x + this._minimumSize.x);
        const MAXIMUM_SPLIT_POSITION = AXIS ? (container.size.y - this._minimumSize.y) : (container.size.x - this._minimumSize.x);
        const SPLIT_POSITION = this._random(MINIMUM_SPLIT_POSITION, MAXIMUM_SPLIT_POSITION);
        const CHILD_A = {
          position: Vector2.create(container.position.x, container.position.y),
          size: AXIS ? Vector2.create(container.size.x, SPLIT_POSITION - 1) : Vector2.create(SPLIT_POSITION - 1, container.size.y)
        };
        const CHILD_B = {
          position: AXIS ? Vector2.create(container.position.x, SPLIT_POSITION + 1) : Vector2.create(SPLIT_POSITION + 1, container.position.y),
          size: Vector2.create(container.size.x, container.size.y)
        };

        this._splitContainer(CHILD_A, iteration - 1);
        this._splitContainer(CHILD_B, iteration - 1);
      } else {
        this._partitions.push(container);
      }
    } else {
      this._partitions.push(container);
    }
  }

  _random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export default BSP2;