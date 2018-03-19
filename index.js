import express from 'express';

const APP = express();
const HTTP = require('http').Server(APP);
const IO = require('socket.io')(HTTP);

APP.use(express.static(__dirname + '/dist'));

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