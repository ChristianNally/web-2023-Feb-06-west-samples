"use strict";
// name of function, arguments, return value
const sayHello = (name, age, height) => {
    return `hello there ${name}`;
};
const result1 = sayHello('Alice');
const result2 = sayHello('Alice', 24);
const returningPromise = (num) => {
    return new Promise((resolve) => {
        resolve(num);
    });
};
returningPromise(42).then((data) => { });
const higherOrderFunc = (name, callback) => {
    return callback(42);
};
