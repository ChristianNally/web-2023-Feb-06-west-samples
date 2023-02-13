const doubleIt = (num) => {
  if (num === undefined) {
    // return null;
    throw new Error('please provide a number');
  }

  return num * 2; // NaN
};

module.exports = doubleIt;
