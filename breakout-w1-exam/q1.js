/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // return Math.min(...arr);

  // create a space in memory to hold lowest value seen so far
  let lowestValue = arr[0];

  // look at each value in the arr
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    // is this the lowest value we've seen so far?
    if (value < lowestValue) {
      // if yes, replace the lowest value with the current value
      lowestValue = value;
    }
  }

  // return lowest value seen
  return lowestValue;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // create a variable to hold highest seen so far
  let highestValue = arr[0];

  // look at each element inside the array
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    // is this higher than the highest value seen so far?
    if (value > highestValue) {
      // if yes, replace highest value with current value
      highestValue = value;
    }
  }

  // return highest seen
  return highestValue;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const highestValue = max(arr);
  const lowestValue = min(arr);

  const difference = highestValue - lowestValue;
  return difference;
};

// Don't change below:

module.exports = { min, max, range };
