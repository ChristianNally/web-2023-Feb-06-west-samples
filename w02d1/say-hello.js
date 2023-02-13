const sayHello = function (name) {
  // console.log(`hello there ${name}`);
  return `hello there ${name}`;
};

console.log(arguments);
// sayHello('Carol', 42, true);

// console.log('does this run????');

// const exportObj = {
//   sayHello: sayHello,
//   otherThing: 'jello world'
// };

// module.exports = exportObj;

module.exports = sayHello; // default export
// module.exports.sayHello = sayHello;