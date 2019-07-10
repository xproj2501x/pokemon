////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import express from 'express';
import ROUTES from './src/server/routes';
import * as path from 'path';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const APP = express();
const HTTP = require('http').Server(APP);
const IO = require('socket.io')(HTTP);
const PORT = 3000;

APP.use(express.static(path.resolve(__dirname + '/dist')));
APP.use('/api', ROUTES);
APP.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/dist/index.html'));
});
IO.on('connection', (socket) => {
  console.log('user connected');
  socket.on('user joined', (message) => {
    console.log(message);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
});
HTTP.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
}); 