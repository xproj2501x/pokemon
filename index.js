////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import express from 'express';
import ROUTES from './src/server/routes';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const APP = express();
const HTTP = require('http').Server(APP);
const IO = require('socket.io')(HTTP);
const ENGINE = Engine.create();

APP.use(express.static(__dirname + '/dist'));
APP.use('/api', ROUTES);
APP.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
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
HTTP.listen(3000, () => {
  console.log('listening on *:3000');
});