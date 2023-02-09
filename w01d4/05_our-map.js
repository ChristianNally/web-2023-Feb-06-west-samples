const dogs = ['Ariel', 'Charlie', 'Nico', 'Dioji'];

// const potentialOutput = ['Ariel likes pets', 'Charlie likes pets', ...];

const whatToDoOnEachLoop = (petName) => {
  return `${petName} likes pets`;
};

const mappedDogs = dogs.map(whatToDoOnEachLoop);

console.log(dogs);
console.log(mappedDogs);

// console.log(dogs === mappedDogs);

const ourMap = (arr, callback) => {
  // create an output array to hold our transformed values
  const output = [];

  // loop through the input array
  for (const element of arr) {
    // call the provided callback with the element from the array AND capture return val
    const returnVal = callback(element);
    
    // add return value to our output array
    output.push(returnVal);
  }

  // return the output array
  return output;
};

const ourMappedDogs = ourMap(dogs, whatToDoOnEachLoop);
console.log(ourMappedDogs);
