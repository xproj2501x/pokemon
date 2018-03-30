////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import {Router} from 'express';
import POKEDEX_ROUTER from './pokedex';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const ROUTER = Router();

ROUTER.use('/pokedex', POKEDEX_ROUTER);
ROUTER.get('*', (req, res) => {
  res.sendStatus(404);
});

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default ROUTER;