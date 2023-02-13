/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // 1. create the piles

  // put aside a place in memory to hold our "piles"
  // { '6': 3, '1': 1, '5': 2, '4': 1 } 
  const piles = {};

  // look at each element in the array
  for (const number of arr) {
    // have we seen this value before?
    if (piles[number]) {
      // if yes, increment the number of times seen
      piles[number] += 1;
    } else {
      // if no, create a new "pile"
      piles[number] = 1;
    }
  }

  // log the "piles"
  // console.log(piles);

  // 2. compare the piles
  let highestValue = 0;
  let highestKey = null;

  // loop through our piles
  for (const key in piles) {
    const value = piles[key];
    
    // is this the tallest pile we've seen so far?
    if (value > highestValue) {
      // if yes, replace the highestValue and highestKey
      highestValue = value;
      highestKey = key;
    }
  }

  // return the key assoc with the highest value
  return Number(highestKey);
};

// Don't change below:
module.exports = { mode };
