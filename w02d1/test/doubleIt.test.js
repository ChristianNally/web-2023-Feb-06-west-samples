// import an assertion library
const assert = require('assert');

// import the function to be tested
const doubleIt = require('../doubleIt')

// set up a describe block to group all of our tests together
describe('tests for the doubleIt function', () => {
  // test #1: returns 8 when given 4
  it('returns 8 when given 4', () => {
    const actual = doubleIt(4);
    const expected = 8;

    assert.strictEqual(actual, expected);
  });

  // test #2: returns 5 when given 2.5
  it('returns 5 when given 2.5', () => {
    const actual = doubleIt(2.5);
    const expected = 5;

    assert.strictEqual(actual, expected);
  });

  // test #3: returns null if no values passed in
  // it('returns null if no value passed in', () => {
  //   const actual = doubleIt();
  //   const expected = null;

  //   assert.strictEqual(actual, expected);
  // });

  it('throws an error if no value passed in', () => {
    // const actual = doubleIt();
    // const expected = null;

    // assert.strictEqual(actual, expected);

    assert.throws(() => doubleIt(), Error('please provide a number'));
  });

});
