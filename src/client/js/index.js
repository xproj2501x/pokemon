////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import '../css/_site.scss';
import {DEBUG} from './constants';
import Game from '../../game';
import AStarSearch from '../../common/algorithms/a-star-search';
import AStarGraph from '../../common/algorithms/a-star/a-star-graph';
import AStarGraphNode from '../../common/algorithms/a-star/a-star-graph-node';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
window.addEventListener('load', (event) => {
  const GAME = Game.create(DEBUG);
  const A_STAR_SEARCH = AStarSearch.createInstance();
  const A_STAR_GRAPH = AStarGraph.createInstance(512);
  const START = AStarGraphNode.createInstance(1, 1);
  const END = AStarGraphNode.createInstance(10, 10);
  const PATH = A_STAR_SEARCH.search(A_STAR_GRAPH, START, END, {});

  console.log(PATH);
  GAME.start();
});