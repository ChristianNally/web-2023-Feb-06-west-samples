const age = 42;
console.log(age);

console.log(42); // anonymous without name

const runMyFunction = function(callback) {
  callback('Elise');
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

runMyFunction(sayHello);

runMyFunction(function(name) {
  console.log(`hello there ${name}`);
});

fs.readFile('index.js', function(contentsOfTheFile) { console.log(contentsOfTheFile) })
