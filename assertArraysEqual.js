
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`πππAssertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`πππ Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3], [3, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

module.exports = assertArraysEqual;