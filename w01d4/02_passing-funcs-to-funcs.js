// function that gets passed to the other function is called a callback

const runMyFunction = function(callback, name, age) {
  // console.log(callback.toString());
  callback('Elise');
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

// runMyFunction(sayHello());
runMyFunction(sayHello, 'Bob');
