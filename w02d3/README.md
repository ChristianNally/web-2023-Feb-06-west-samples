# W02D03 - Networking with TCP and HTTP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo (chat server)

### Networking
* computers connected and talking to each other
* any computer on the network can talk to any other comp on the network
* routing computers
* servers (hosting websites)

### Internet Protocol (IP)
* provides a unique address for each computer (street address)
* identify the running process on the other computer through the port (apt number)
* 65,535 ports to choose from
  * 80 HTTP
  * 5000 
  * 8080 HTTP
  * 53 DNS
  * 20 && 21 FTP
  * 22 SSH
  * 3000 - 8000 dev ports

* IPv4 192.168.2.2 127.0.0.1

### TCP
* Transport Control Protocol
* breaks all communication down into packets
* establish a connection - 3 way handshake
* lost packets get resent
* assembled in correct order by the recipient

### UDP
* User Datagram Protocol
* has no need for a connection
* lost packets are not resent


client <======> server


### Event-driven programming
* register callbacks to run when an event occurs

```js
object.on('nameOfEvent', (objectThatRepresentsEvent) => {})
button.on('click', (clickObject) => {});
form.on('submit', () => {});
```


API - Application Programming Interface
abstraction layer

```js
setTimeout(() => {}, 3000)

const myFuncThatHidesComplexity = () => {
  // do some complex stuff
};
```

### Encoding
* everything is stored as a number
* which number represents which letter/character
* ascii



 stdin.setRawMode(true); // don't wait for enter, run on every keystroke

conn.write("Name: ABC")
conn.write("win the game!")


