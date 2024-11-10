const net = require('net');

// Connect to the TCP server running on localhost:4000
const client = new net.Socket();
client.connect(4000, '127.0.0.1', () => {
  console.log('Connected to server, simulating data...');
  
  setInterval(() => {
    // Simulate sensor data (random value between 0 and 1023)
    const simulatedData = Math.floor(Math.random() * 1024);
    client.write(simulatedData.toString());
  }, 1000); // Send data every second
});

client.on('close', () => {
  console.log('Connection closed');
});