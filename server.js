const net = require('net');
const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const port = 3000;

let telemetryData = 0;

const tcpServer = net.createServer((socket) => {
  socket.on('data', (data) => {
    telemetryData = data.toString();
  });
});

app.use(cors());

tcpServer.listen(4000, () => {
  console.log('TCP server listening on port 4000');
});

app.get('/data', (req, res) => {
  res.json({ telemetryData });
});

server.listen(port, () => {
  console.log(`HTTP server running at http://localhost:${port}`);
});