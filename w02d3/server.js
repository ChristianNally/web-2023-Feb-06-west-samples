const net = require('net');

// console.log(net);
const server = net.createServer();

const port = 3001;

// console.log(server);

// create an array to hold ALL of our connection objects
const connections = [];

// listen for an incoming connection
server.on('connection', (connection) => {
  console.log('someone has connected to the server!!');

  // add this connection to our group of connections
  connections.push(connection);
  
  // set the encoding on the connection object
  connection.setEncoding('utf-8');

  // console.log(connection);
  // send a welcome message to the new connection!
  connection.write('thanks for connecting to our server!!');

  // listen for incoming messages
  connection.on('data', (messageFromClient) => {
    // change my name, colour my text, move my snake up one square
    // "Name: <your name>"
    console.log('client says:', messageFromClient);

    if (messageFromClient.includes('Name: ')) {
      console.log('they want to change their name!');

      const name = messageFromClient.split(' ')[1];
      console.log('name', name);

      connection.username = name;
      return;
    }

    // connection.write(messageFromClient);
    // echo the message to ALL connected clients
    for (const conn of connections) {
      // if the conn is not the current connection
      if (conn !== connection) {
        conn.write(`${connection.username} says: ${messageFromClient}`);
      }
    }
  });
});

server.listen(port, () => {
  console.log(`tcp server listening on port ${port}`);
});
