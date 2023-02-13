const sayHello = require('./say-hello');
// const sayHello = sayHelloExport.sayHello;

// console.log('sayHello', sayHello);

const assert = require('assert');

const actual = sayHello('Alice');

const expected = 'hello there Alice';

assert.strictEqual(actual, expected);
