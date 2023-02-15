process.stdin.setEncoding('utf-8');

process.stdin.on('data', (messageFromStdIn) => {
  console.log(messageFromStdIn);
});

