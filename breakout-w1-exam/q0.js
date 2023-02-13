/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  const numElements = arr.length;
  return numElements;

  return arr.length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  // could be solved with .reduce
  const reducedVal1 = arr.reduce((runningTotal, number) => {
    return runningTotal + number;
  }, 0);

  return reducedVal1;



  // create a space in memory to hold the running total
  let runningTotal = 0;

  // look at each element inside the array
  // for (const number of arr) {
  //   // add the current element to the running total
  //   runningTotal = runningTotal + number;
  //   // runningTotal += number;
  // }

  arr.forEach((number) => {
    runningTotal += number;
  });

  // return the running total
  return runningTotal;
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

// 3.141587
// 314.1587
// 314
// 3.14

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {

  if (arr.length === 0) {
    return null;
  }


  // avg = totalOfElements / numOfElements
  const total = sum(arr);
  const numElements = count(arr);

  const avg = total / numElements;

  const roundedAvg = round(avg);

  return roundedAvg;
};

// Don't change below:
module.exports = { count, sum, mean };
