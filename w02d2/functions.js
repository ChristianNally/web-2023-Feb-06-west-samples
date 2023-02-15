//
// Function DEFINITIONS
//

// method 1

function nameOfFunctionGoesHere(parameter, go, here){
  // each line of code in the function goes here
  const sum = parameter + go;
  here();
  return sum; // this is like the output of the function
}


// method 2

const anotherFunction = () => {
  console.log('monkey fuzz!');
};


//
// Function Executions, or CALLING a function
//

const total = nameOfFunctionGoesHere(44, 55, anotherFunction);
console.log('total', total);