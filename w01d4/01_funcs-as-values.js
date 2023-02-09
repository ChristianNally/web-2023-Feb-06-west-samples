
// function sayHello() {} // function declaration
// const sayHello = function() {}; // function expression

// airBnB coding standards
const sayHello = function sayHello(name) {
  return `hello there ${name}`;
};

const myFunctions = [];
myFunctions.push(sayHello);
console.log(myFunctions);

const myFunc = myFunctions[0];
console.log(myFunc('dean'));

console.log(myFunctions[0]('dean'));

// funcName();

console.log(sayHello('alice'));
// const returnVal = sayHello('alice'); // calling or invoking the function
// // console.log(returnVal);

// const something = sayHello;
// console.log(something.toString());
// const output = something('carol');
// console.log(output);
// console.log();
// jQuery() jQuery.ajax()
// console.log(sayHello);
// console.log(sayHello.toString());
// sayHello.secretMessage = 'does this work??';
// console.log(sayHello);
