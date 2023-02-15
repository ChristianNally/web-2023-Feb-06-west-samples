const net = require('net');

const config = {
  host: 'localhost',
  port: '3001'
};

const connection = net.createConnection(config);

// set the encoding on the connection
connection.setEncoding('utf-8');

// listen for incoming data
connection.on('data', (messageFromTheServer) => {
  console.log(messageFromTheServer);
});

// send a message to the server
// connection.write('nice to be here!!');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (messageFromStdIn) => {
  // console.log(messageFromStdIn);
  connection.write(messageFromStdIn);
});

