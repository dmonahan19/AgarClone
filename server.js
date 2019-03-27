const express = require('express');
const app = express();
// const socketio = require('socket.io');
app.use(express.static(__dirname + '/public'));