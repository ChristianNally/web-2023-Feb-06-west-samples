// introduced in ES6 (2015)

// advantages
// 1. no function keyword yay!!
// 2. if only one argument, no need for parens
// 3. if only one line of code, no need for curly braces
// 4. if no curly braces, the line of code is automatically returned
// 5. arrow funcs DO NOT create `this`

// const myVal = console.log();

const myFunc1 = function() {};
const myFunc2 = () => {};

const sayHello = name => `hello there ${name}`;

const returnVal = sayHello('Carol');
console.log('returnVal', returnVal);

higherOrderFunc(name => `hello there ${name}`);

// if (true) console.log('hello');
// if (err) throw err;
