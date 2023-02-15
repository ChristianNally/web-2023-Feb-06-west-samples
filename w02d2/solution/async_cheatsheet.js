// require packages
const fs = require('fs');
const http = require('http');
const readline = require('readline');

// define some constants
const file = 'solution/fileToRead.txt';
const logFilename = 'solution/log.txt';

// It is important to see how a function definition is
// different from a function call.  We will also see how to use the
// asynchronous nature of Node.js to our advantage.

// This whole file is "The Main Thread" of execution.
// The event loop doesn't start until the main thread is done executing.

// a function to write out to a log file asynchronously
// we will use this function to log information to a file, which shows progress of the application
const writeLog = (data) => {
  const withEOL = data + '\n';
  fs.appendFile(logFilename, withEOL, (err) => {
    if (err) {
      console.log(err);
    } else {
      // console.log('The "data to append" was appended to file!');
    }
  });
};

// a function to load the contents of a file asynchronously
const doTheFileRead = () => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      writeLog(err);
    } else {
      writeLog(data);
    }
  });
};

// a function to fetch data from an http api asynchronously
const doTheAPIGet = () => {

  http.get('http://numbersapi.com/random/math', (res) => {
    let body = '';
    res.on('data', (d) => {
      body += d;
    });
    res.on('end', () => {
      writeLog(body);
    });
  }).on('error', (e) => {
    writeLog(e);
  });
  doTheFileRead();
};

doTheAPIGet();

// fetch data from the terminal asynchronously
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// const callbackToCallWhenTheUserHasEnteredTheirResponse = (answer) => {
//   console.log(`Hello ${answer}!`);
//   rl.close();
// };

// rl.question('\nWhat is your name? ', callbackToCallWhenTheUserHasEnteredTheirResponse);

rl.question('\nWhat is your name? ', (answer) => {
  console.log(`Hello ${answer}!`);
  rl.close();
});


const first = 44;
sum(first, 66);


