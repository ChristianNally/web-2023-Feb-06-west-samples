/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

// 6,2,3,4,9,7
// 0 1 2 3 4 5

// length 6 = 6 / 2 = 3 - 1 = 2
// middleIndex 2 and 3

const median = function(arr) {
  // sort the input arr
  arr.sort();

  // calculate the middle index
  const middleIndex = (arr.length - 1) / 2;

  // is the array even-length?
  if (arr.length % 2 === 0) {
    // even-length
    const rightIndex = arr.length / 2;
    const leftIndex = rightIndex - 1;

    const rightVal = arr[rightIndex];
    const leftVal = arr[leftIndex];

    const avg = (rightVal + leftVal) / 2;

    return round(avg);
  } else {
    // odd-length
    const answer = arr[middleIndex];
    return answer;
  }
};

// Don't change below:
module.exports = { median };
