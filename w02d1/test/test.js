const assert = require('assert');

// describe(); // collecting tests together; optional
// it(); // is our actual test; one `it` per test

describe('tests for the middle function', () => {

  it('can do something', () => {
    // throw new Error('bad stuff has happened');
    assert.strictEqual('1', '1');
  });

});

// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });
