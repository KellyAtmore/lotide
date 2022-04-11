const assert = require('chai').assert;
const middle = require('../middle');



describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]), []);
  });
  it("returns [2,4] for [1,2,4,3]", () => {
    assert.deepEqual(middle([1,2,4,3]), [2,4]);
  });
  it("returns [4] for [1,2,4,5,3]", () => {
    assert.deepEqual(middle([1,2,4,5,3]), [4]);
  });
});





// assertArraysEqual(middle([1, 2, 3, 4], [1, 2, 3, 4, 6, 4, 3]),[1,2]);
// assertArraysEqual(middle([1, 5, 6, 4], [1, 2, 3, 4, 6, 4, 3,]),[5,6]);
// assertArraysEqual(middle([1, 2, 3, 4], [1, 2, 3, 4, 6, 4, 3,]),[2,3]);
// assertArraysEqual(middle([7, 8, 9, 10, 5], [1, 2, 3, 4, 6, 4, 3,]),[9,10]);