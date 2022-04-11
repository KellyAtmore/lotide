
// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("returns empty array if original array has one element", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns 'second third for ['first', 'second', 'third,]", () => {
    assert.deepEqual(tail(['first', 'second', 'third']), ['second', 'third']);
  });
  it("returns empty array if origianl array is empty", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns 2 3 4 5 for 1 2 3 4 5", () => {
    assert.deepEqual(tail([1,2,3,4,5]), [2,3,4,5]);
  });
});


// An empty array should yield an empty array for its tail

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!